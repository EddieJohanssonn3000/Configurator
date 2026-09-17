import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

function ModelPart({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  return <primitive object={clonedScene} />;
}

export default ModelPart;
