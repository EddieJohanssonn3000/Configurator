import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function VinylPlayer() {
    const { scene } = useGLTF('/models/VP_MOCK_Test_1.glb')

    return <primitive object={scene} scale={10} />;
}

function ModelViewer() {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        
        <Suspense fallback={null}>
          <VinylPlayer />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelViewer;