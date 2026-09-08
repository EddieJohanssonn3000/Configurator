import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/VP_MOCK_Test_1.glb");

  console.log(scene)

  return <primitive object={scene} />;
}