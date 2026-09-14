import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styles from "./ModelViewer.module.css";
import VinylPlayer from "./VinylPlayer";
import { useConfigurator } from "../../hooks/useConfigurator";

function ModelViewer() {
  const { selectedArm, rotationY } = useConfigurator();

  return (
    <div className={styles.viewer}>
      <Canvas camera={{ position: [3, 2, 5], fov: 85 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <directionalLight position={[-5, 3, 2]} intensity={7} />
        <directionalLight position={[0, 5, -5]} intensity={2} />

        <Suspense fallback={null}>
          <VinylPlayer selectedArm={selectedArm} rotationY={rotationY} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelViewer;
