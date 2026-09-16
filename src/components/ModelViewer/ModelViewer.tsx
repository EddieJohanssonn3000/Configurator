import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import styles from "./ModelViewer.module.css";
import VinylPlayer from "./VinylPlayer";
import { useConfigurator } from "../../hooks/useConfigurator";

function ModelViewer() {
  const { selectedArm, rotationY } = useConfigurator();

  return (
    <div className={styles.viewer}>
      <Canvas camera={{ position: [0, 5, 10], fov: 40 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <directionalLight position={[-5, 3, 2]} intensity={7} />
        <directionalLight position={[0, 5, -5]} intensity={2} />

        <Suspense fallback={null}>
          <VinylPlayer selectedArm={selectedArm} rotationY={rotationY} />
          {/* TEMP: dev-only free rotation, remove before final build */}
          <OrbitControls minDistance={4} maxDistance={8} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelViewer;
