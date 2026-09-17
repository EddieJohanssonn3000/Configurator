import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import ModelViewer from "../ModelViewer/ModelViewer";
import Footer from "../Footer/Footer";
import OptionSelection from "../OptionSelection/OptionSelection";
import FeatureSelection from "../FeatureSelection/FeatureSelection";
import styles from "./Configurator.module.css";
import {
  ConfiguratorProvider,
  useConfigurator,
} from "../../hooks/useConfigurator";
import ViewToggle from "../ViewToggle/ViewToggle";
import View3D from "../View3D/View3D";
import Summary from "../Summary/Summary";
import { COLOR_THEMES } from "../../data/colorThemes";

function preloadTheme(themeKey: keyof typeof COLOR_THEMES) {
  const theme = COLOR_THEMES[themeKey];
  Object.values(theme.parts).forEach((variants) => {
    variants.forEach((path: string) => useGLTF.preload(path));
  });
}

function ConfiguratorContent() {
  const { activeStep, selectedTheme } = useConfigurator();

  useEffect(() => {
    // 1. Preload the currently selected theme right away — user needs this immediately.
    preloadTheme(selectedTheme);

    // 2. Preload every other theme in the background, once the browser is idle,
    //    so it doesn't compete with the initial render/interaction.
    const otherThemes = (
      Object.keys(COLOR_THEMES) as (keyof typeof COLOR_THEMES)[]
    ).filter((key) => key !== selectedTheme);

    const idleCallback =
      "requestIdleCallback" in window
        ? window.requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 1000); // fallback for Safari, which lacks requestIdleCallback

    const handle = idleCallback(() => {
      otherThemes.forEach((key) => preloadTheme(key));
    });

    return () => {
      if ("cancelIdleCallback" in window && typeof handle === "number") {
        window.cancelIdleCallback(handle);
      }
    };
  }, [selectedTheme]);

  if (activeStep === "Summary") {
    return <Summary />;
  }

  return (
    <main>
      <ViewToggle />
      <View3D />

      <section className={styles.contentWrapper}>
        <OptionSelection />
        <ModelViewer />
        <FeatureSelection />
      </section>

      <Footer />
    </main>
  );
}

function Configurator() {
  return (
    <ConfiguratorProvider>
      <ConfiguratorContent />
    </ConfiguratorProvider>
  );
}

export default Configurator;
