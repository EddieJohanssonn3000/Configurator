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

// Preload every model file up front so switching options later doesn't trigger a Suspense re-fetch
Object.values(COLOR_THEMES).forEach((theme) => {
  Object.values(theme.parts).forEach((variants) => {
    variants.forEach((path: string) => useGLTF.preload(path));
  });
});

function ConfiguratorContent() {
  const { activeStep } = useConfigurator();

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
