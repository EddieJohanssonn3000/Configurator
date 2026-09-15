import ModelViewer from "../ModelViewer/ModelViewer";
import Footer from "../Footer/Footer";
import OptionSelection from "../OptionSelection/OptionSelection";
import FeatureSelection from "../FeatureSelection/FeatureSelection";
import styles from "./Configurator.module.css";
import { ConfiguratorProvider, useConfigurator } from "../../hooks/useConfigurator";
import ViewToggle from "../ViewToggle/ViewToggle";
import View3D from "../View3D/View3D";
import Summary from "../Summary/Summary";


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