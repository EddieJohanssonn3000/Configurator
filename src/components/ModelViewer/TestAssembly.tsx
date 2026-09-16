import { useGLTF } from "@react-three/drei";

function TestAssembly() {
  const { scene: bodyScene } = useGLTF("/models/RED/RED_RED_Body_A.glb");
  const { scene: legScene } = useGLTF("/models/RED/RED_RED_Leg_A.glb");

  return (
    <group scale={15}>
      <primitive object={bodyScene} />
      <primitive object={legScene} />
    </group>
  );
}

export default TestAssembly;
