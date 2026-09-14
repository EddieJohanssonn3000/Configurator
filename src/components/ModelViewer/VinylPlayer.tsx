import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

type ModelViewerProps = {
  selectedArm: string;
  rotationY: number;
};

function VinylPlayer({ selectedArm, rotationY}: ModelViewerProps) {
  const { scene } = useGLTF('/models/MOCK_v3_AllInOne.glb')
  const model = useMemo(() => scene.clone(true), [scene]);

   const arm = model.getObjectByName("Arm001");
  //  const lid = model.getObjectByName("MOCK_LID")


     if (arm) {
         arm.visible = selectedArm === "standard";
    }

     
    return <primitive object={model} scale={15} position={[0.5, -1.5, 0]} rotation={[0, rotationY, 0]}
  />
}

export default VinylPlayer;