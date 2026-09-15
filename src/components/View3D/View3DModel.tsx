import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import VinylPlayer from "../ModelViewer/VinylPlayer";
import { useConfigurator } from "../../hooks/useConfigurator";

function View3DModel() {
  const { selectedArm, rotationY } = useConfigurator();
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={3} />
      <directionalLight position={[-5, 3, 2]} intensity={7} />
      <directionalLight position={[0, 5, -5]} intensity={2} />

      <VinylPlayer 
        selectedArm={selectedArm} rotationY={rotationY}
      />

      <OrbitControls minDistance={5} maxDistance={15} />
    </Canvas>
  );
}

export default View3DModel;