import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import VinylPlayer from "../ModelViewer/VinylPlayer";
import { useConfigurator } from "../../hooks/useConfigurator";

function View3DModel() {
  const { selectedArm, rotationY } = useConfigurator();
  return (
    <Canvas camera={{ position: [3, 2, 5], fov: 85 }}>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <directionalLight
        position={[-5, 3, 2]}
        intensity={1}
      />

      <VinylPlayer 
        selectedArm={selectedArm} rotationY={rotationY}
      />

      <OrbitControls />
    </Canvas>
  );
}

export default View3DModel;