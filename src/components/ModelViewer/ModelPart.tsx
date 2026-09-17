import { useGLTF } from "@react-three/drei";

function ModelPart({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
}

export default ModelPart;
