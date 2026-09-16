import { useGLTF, useAnimations } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import { useConfigurator } from "../../hooks/useConfigurator";

type VinylPlayerProps = {
  selectedArm: string;
  rotationY: number;
};

function VinylPlayer({ selectedArm, rotationY }: VinylPlayerProps) {
  const { scene, animations } = useGLTF(
    "/models/MOCK_v3_AllInOne.glb",
  );

  const model = useMemo(() => scene.clone(true), [scene]);

  const { actions } = useAnimations(animations, model);

  const { lidOpen, selectedOptions } = useConfigurator();

  const feetIndex = selectedOptions["feet"] ?? 0;
  const buttonsIndex = selectedOptions["buttons"] ?? 0;
  const tonearmStyleIndex =
    selectedOptions["tonearmStyle"] ?? 0;

  useEffect(() => {
    const action = actions["LidAction.001"];

    if (!action) return;

    action.stop();
    action.setLoop(2201, -1);
    action.clampWhenFinished = true;

    if (lidOpen) {
      action.timeScale = 0.2;
      action.time = 0;
      action.play();
    } else {
      action.timeScale = -0.2;
      action.time = action.getClip().duration;
      action.play();
    }
  }, [lidOpen, actions]);

  useEffect(() => {
    const arm = model.getObjectByName("Arm001");
    const lid = model.getObjectByName("MOCK_LID");
    const legA = model.getObjectByName("MOCK_LEG_A");
    const legB = model.getObjectByName("MOCK_LEG_B");
    const buttonsA = model.getObjectByName("MOCK_BUTTONS_A");
    const buttonsB = model.getObjectByName("MOCK_BUTTONS_B");
    const tonearmA = model.getObjectByName("MOCK_ARM_A");
    const tonearmB = model.getObjectByName("MOCK_ARM_B");

    if (arm) arm.visible = selectedArm === "standard";
    if (legA) legA.visible = feetIndex === 0;
    if (legB) legB.visible = feetIndex === 1;
    if (buttonsA) buttonsA.visible = buttonsIndex === 0;
    if (buttonsB) buttonsB.visible = buttonsIndex === 1;
    if (tonearmA) tonearmA.visible = tonearmStyleIndex === 0;
    if (tonearmB) tonearmB.visible = tonearmStyleIndex === 1;
  }, [
    model,
    selectedArm,
    feetIndex,
    buttonsIndex,
    tonearmStyleIndex,
  ]);

  return (
    <primitive
      object={model}
      scale={10}
      position={[0.5, -2, 0]}
      rotation={[0, rotationY, 0]}
    />
  );
}

export default VinylPlayer;