import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import styles from "./ModelViewer.module.css"

function VinylPlayer() {
    const { scene } = useGLTF('/models/VP_MOCK_Test_1.glb')

    return <primitive object={scene} scale={10}position={[0.5, 0, 0]}/>;
}

function ModelViewer() {
  return (
    <div className={styles.viewer}>
      <Canvas camera={{ position: [3, 2, 5], fov: 70 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        
        <Suspense fallback={null}>
          <VinylPlayer />
        </Suspense>

        <OrbitControls
        minDistance={4}
        maxDistance={8} />
      </Canvas>
    </div>
  );
}

export default ModelViewer;