import Header from "../Header/Header";
import ModelViewer from "../ModelViewer/ModelViewer";
import Footer from "../Footer/Footer";
import OptionSelection from "../OptionSelection/OptionSelection";
import FeatureSelection from "../FeatureSelection/FeatureSelection";
import styles from "./Configurator.module.css"
import { useConfigurator } from "../../hooks/useConfigurator";

function Configurator() {
    const {
    activeStep,
    setActiveStep,
    selectedArm,
    setSelectedArm,
  } = useConfigurator();


  return (
    <main>
      <Header />
      <section className={styles.contentWrapper}>
        <OptionSelection />
        <ModelViewer selectedArm={selectedArm} />
        <FeatureSelection />
      </section>

        <button onClick={() => setSelectedArm("none")}>
            Hide Arm
          </button>

          <button onClick={() => setSelectedArm("standard")}>
            Show Arm
        </button>
      <Footer />
    </main>
  );
}

export default Configurator;
