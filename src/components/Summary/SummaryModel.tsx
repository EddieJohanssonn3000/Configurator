import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type SummaryModelProps = {
  rotationY: number;
};

function SummaryModel({ rotationY }: SummaryModelProps) {
  const body = useGLTF("/models/UNIKKO/Unikko_Body_A.glb");
  const feet = useGLTF("/models/UNIKKO/Unikko_Leg_B.glb");
  const arm = useGLTF("/models/UNIKKO/Unikko_Arm_A.glb");
  const buttons = useGLTF("/models/UNIKKO/Unikko_Button_A.glb");
  const sticker = useGLTF("/models/STICKERS/STICKERS_Sticker_Inside_C.glb");
  const lid = useGLTF("/models/UNIKKO/Unikko_Lid.glb");

  const stickerModel = useMemo(
  () => sticker.scene.clone(true),
  [sticker.scene],
    );

const stickerInitialPosition = useMemo(
  () => stickerModel.position.clone(),
  [stickerModel],
);

const stickerInitialQuaternion = useMemo(
  () => stickerModel.quaternion.clone(),
  [stickerModel],
);

const stickerInitialScale = useMemo(
  () => stickerModel.scale.clone(),
  [stickerModel],
);

const lidInitialMatrix = useMemo(
  () => lid.scene.getObjectByName("Unikko_Lid")?.matrix.clone(),
  [lid.scene],
);

useFrame(() => {
  const animatedLid = lid.scene.getObjectByName("Unikko_Lid");

  if (!animatedLid || !lidInitialMatrix) return;

  animatedLid.updateMatrix();

  const inverseInitial = lidInitialMatrix.clone().invert();

  const lidMovement = new THREE.Matrix4().multiplyMatrices(
    animatedLid.matrix,
    inverseInitial,
  );

  const stickerMatrix = new THREE.Matrix4().compose(
    stickerInitialPosition,
    stickerInitialQuaternion,
    stickerInitialScale,
  );

  stickerMatrix.premultiply(lidMovement);

  stickerMatrix.decompose(
    stickerModel.position,
    stickerModel.quaternion,
    stickerModel.scale,
  );
});

const { actions } = useAnimations(lid.animations, lid.scene);

useEffect(() => {
  const action = actions["LidAction.002"];

  if (!action) return;

  action.reset();
  action.setLoop(2201, -1);
  action.clampWhenFinished = true;
  action.timeScale = 0.015;
  action.play();
}, [actions]);


  return (
   <group scale={13} position={[0, -2.5, 0]} rotation={[0, rotationY, 0]}>
    <primitive object={body.scene} />
    <primitive object={feet.scene} />
    <primitive object={arm.scene} />
    <primitive object={buttons.scene} />
    <primitive object={lid.scene} />
    <primitive object={stickerModel} />
  </group>
  );
}

export default SummaryModel;