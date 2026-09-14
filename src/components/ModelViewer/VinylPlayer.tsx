import { useGLTF } from "@react-three/drei";

type ModelViewerProps = {
  selectedArm: string;
  rotationY: number;
};

function VinylPlayer({ selectedArm, rotationY}: ModelViewerProps) {
    const { scene } = useGLTF('/models/MOCK_v3_AllInOne.glb')

     const arm = scene.getObjectByName("Arm001");
     const lid = scene.getObjectByName("MOCK_LID")


     if (lid) {
       lid.visible = false;

    }


     if (arm) {
         arm.visible = selectedArm === "standard";
    }

     
    return <primitive object={scene} scale={10} position={[0.5, 0, 0]} rotation={[0, rotationY, 0]}
  />
}

export default VinylPlayer;