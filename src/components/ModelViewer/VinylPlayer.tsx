import { useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { useConfigurator } from "../../hooks/useConfigurator";

type VinylPlayerProps = {
  selectedArm: string;
  rotationY: number;
};

function VinylPlayer({ selectedArm, rotationY }: VinylPlayerProps) {
  const { scene } = useGLTF("/models/MOCK_v3_AllInOne.glb");
  const { selectedOptions } = useConfigurator();

  const feetIndex = selectedOptions["feet"] ?? 0;

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        console.log(
          "mesh name:",
          mesh.name,
          "| material name:",
          (mesh.material as THREE.Material).name,
        );
      }
    });

    const arm = scene.getObjectByName("Arm001");
    const lid = scene.getObjectByName("MOCK_LID");
    const legA = scene.getObjectByName("MOCK_LEG_A");
    const legB = scene.getObjectByName("MOCK_LEG_B");

    if (lid) lid.visible = false;
    if (arm) arm.visible = selectedArm === "standard";
    if (legA) legA.visible = feetIndex === 0;
    if (legB) legB.visible = feetIndex === 1;
  }, [scene, selectedArm, feetIndex]);

  return (
    <primitive
      object={scene}
      scale={15}
      position={[0.5, 0, 0]}
      rotation={[0, rotationY, 0]}
    />
  );
}

export default VinylPlayer;
