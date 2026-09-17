import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import { useConfigurator } from "../../hooks/useConfigurator";
import { COLOR_THEMES } from "../../data/colorThemes";
import { STICKERS } from "../../data/stickers";
import ModelPart from "./ModelPart";

type VinylPlayerProps = {
  rotationY: number;
};

function AnimatedLid({ path }: { path: string }) {
  const { scene, animations } = useGLTF(path);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const { actions } = useAnimations(animations, clonedScene);
  const { lidOpen } = useConfigurator();

  useEffect(() => {
    const actionName = Object.keys(actions)[0];
    const action = actionName ? actions[actionName] : undefined;

    if (!action) {
      console.warn("No lid animation found for", path);
      return;
    }

    action.stop();
    action.setLoop(2201, -1);
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

  return <primitive object={clonedScene} />;
}

import { useRef } from "react";

function AnimatedSticker({ path }: { path: string }) {
  const { scene, animations } = useGLTF(path);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const { actions } = useAnimations(animations, clonedScene);
  const { lidOpen } = useConfigurator();
  const isFirstRun = useRef(true);

  useEffect(() => {
    const actionName = Object.keys(actions)[0];
    const action = actionName ? actions[actionName] : undefined;

    if (!action) {
      console.warn("No sticker animation found for", path);
      return;
    }

    action.stop();
    action.setLoop(2201, -1);
    action.clampWhenFinished = true;

    if (isFirstRun.current) {
      // Just appeared (new sticker selected) — snap instantly to the correct
      // pose matching the current lid state, don't play the transition.
      action.time = lidOpen ? action.getClip().duration : 0;
      action.play();
      action.paused = true;
      isFirstRun.current = false;
    } else {
      // Lid was actually toggled — play the real transition.
      if (lidOpen) {
        action.timeScale = 0.05;
        action.time = 0;
        action.play();
      } else {
        action.timeScale = -0.05;
        action.time = action.getClip().duration;
        action.play();
      }
    }
  }, [lidOpen, actions, path]);

  return <primitive object={clonedScene} />;
}

function VinylPlayer({ rotationY }: VinylPlayerProps) {
  const { selectedTheme, selectedOptions } = useConfigurator();

  const theme = COLOR_THEMES[selectedTheme];

  const armPath = theme.parts.arm[selectedOptions["arm"] ?? 0];
  const bodyPath = theme.parts.body[selectedOptions["body"] ?? 0];
  const buttonPath = theme.parts.button[selectedOptions["button"] ?? 0];
  const legPath = theme.parts.leg[selectedOptions["leg"] ?? 0];
  const lidPath = theme.parts.lid[0];

  const slipmatPath = theme.parts.slipmat[0];
  const slipmatOn = selectedOptions["dustCover"] === 1;

  const stickerInsidePath =
    STICKERS.inside[selectedOptions["stickerInside"] ?? 0];
  const stickerLidPath = STICKERS.lid[selectedOptions["stickerLid"] ?? 0];

  return (
    <group scale={10} position={[0.5, -2, 0]} rotation={[0, rotationY, 0]}>
      <ModelPart path={bodyPath} />
      <ModelPart path={armPath} />
      <ModelPart path={buttonPath} />
      <ModelPart path={legPath} />
      <AnimatedLid key={lidPath} path={lidPath} />
      {slipmatOn && <ModelPart path={slipmatPath} />}

      {stickerInsidePath && (
        <AnimatedSticker key={stickerInsidePath} path={stickerInsidePath} />
      )}
      {stickerLidPath && (
        <AnimatedSticker key={stickerLidPath} path={stickerLidPath} />
      )}
    </group>
  );
}

export default VinylPlayer;
