import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useConfigurator } from "../../hooks/useConfigurator";
import { COLOR_THEMES } from "../../data/colorThemes";
import ModelPart from "./ModelPart";

type VinylPlayerProps = {
  rotationY: number;
};

function AnimatedLid({ path }: { path: string }) {
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, scene);
  const { lidOpen } = useConfigurator();

  useEffect(() => {
    const actionName = Object.keys(actions)[0]; // grab whatever clip exists, regardless of name
    const action = actionName ? actions[actionName] : undefined;

    if (!action) {
      console.warn("No lid animation found for", path);
      return;
    }

    action.stop();
    action.setLoop(2201, -1); // THREE.LoopRepeat
    action.clampWhenFinished = true;

    if (lidOpen) {
      action.timeScale = 0.05;
      action.time = 0;
      action.play();
    } else {
      action.timeScale = -0.05;
      action.time = action.getClip().duration;
      action.play();
    }
  }, [lidOpen, actions, path]);

  return <primitive object={scene} />;
}

function VinylPlayer({ rotationY }: VinylPlayerProps) {
  const { selectedTheme, selectedOptions } = useConfigurator();

  const theme = COLOR_THEMES[selectedTheme];

  const armPath = theme.parts.arm[selectedOptions["arm"] ?? 0];
  const bodyPath = theme.parts.body[selectedOptions["body"] ?? 0];
  const buttonPath = theme.parts.button[selectedOptions["button"] ?? 0];
  const legPath = theme.parts.leg[selectedOptions["leg"] ?? 0];
  const lidPath = theme.parts.lid[0];
  return (
    <group scale={10} position={[0.5, -2, 0]} rotation={[0, rotationY, 0]}>
      <ModelPart path={bodyPath} />
      <ModelPart path={armPath} />
      <ModelPart path={buttonPath} />
      <ModelPart path={legPath} />
      <AnimatedLid path={lidPath} />
      <AnimatedLid key={lidPath} path={lidPath} />
    </group>
  );
}

export default VinylPlayer;
