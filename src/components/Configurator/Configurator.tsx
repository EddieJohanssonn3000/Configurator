import Header from "../Header/Header";
import ModelViewer from "../ModelViewer/ModelViewer";
import Footer from "../Footer/Footer";
import OptionSelection from "../OptionSelection/OptionSelection";
import FeatureSelection from "../FeatureSelection/FeatureSelection";
import styles from "./Configurator.module.css";
import {
  ConfiguratorProvider,
  useConfigurator,
} from "../../hooks/useConfigurator";

// function Configurator() {
//     const {
//     activeStep,
//     setActiveStep,
//     selectedArm,
//     setSelectedArm,
//   } = useConfigurator();

function Configurator() {
  return (
    <ConfiguratorProvider>
      <main>
        <Header />
        <section className={styles.contentWrapper}>
          <OptionSelection />
          <ModelViewer />
          <FeatureSelection />
        </section>
        <Footer />
      </main>
    </ConfiguratorProvider>
  );
}

export default Configurator;
