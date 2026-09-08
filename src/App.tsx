import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import Model from "./components/Model";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={2} />

      <Bounds fit clip observe>
        <Model />
      </Bounds>

      <OrbitControls />
    </Canvas>
  );
}

export default App;