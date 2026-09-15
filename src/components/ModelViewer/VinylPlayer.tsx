import { useGLTF, useAnimations } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import { useConfigurator } from "../../hooks/useConfigurator";

type ModelViewerProps = {
  selectedArm: string;
  rotationY: number;
};

function VinylPlayer({ selectedArm, rotationY}: ModelViewerProps) {
  const { scene, animations } = useGLTF('/models/MOCK_v3_AllInOne.glb')
  const model = useMemo(() => scene.clone(true), [scene]);
  const { actions } = useAnimations(animations, model);
  const { lidOpen } = useConfigurator();

  useEffect(() => {
  const action = actions["LidAction.001"];

  if (!action) return;

  action.reset();
  action.setLoop(2201, 1);
  action.clampWhenFinished = true;

  if (lidOpen) {
    action.timeScale = 1;
    action.play();
  } else {
    action.timeScale = -1;
    action.time = action.getClip().duration;
    action.play();
  }
}, [lidOpen, actions]);

  

   const arm = model.getObjectByName("Arm001");
  //  const lid = model.getObjectByName("MOCK_LID")


     if (arm) {
         arm.visible = selectedArm === "standard";
    }

     
    return <primitive object={model} scale={15} position={[0.5, -1.5, 0]} rotation={[0, rotationY, 0]}
  />
}

export default VinylPlayer;