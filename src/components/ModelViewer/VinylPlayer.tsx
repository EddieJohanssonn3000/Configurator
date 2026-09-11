import { useGLTF } from "@react-three/drei";

type ModelViewerProps = {
  selectedArm: string;
};

function VinylPlayer({ selectedArm }: ModelViewerProps) {
    const { scene } = useGLTF('/models/VP_MOCK_Test_2.glb')

     const arm = scene.getObjectByName("Arm001");

     

     if (arm) {
         arm.visible = selectedArm === "standard";
    }

     
    return <primitive object={scene} scale={10}position={[0.5, 0, 0]}/>;
}

export default VinylPlayer;