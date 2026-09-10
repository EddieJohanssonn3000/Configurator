import Header from "../Header/Header";
import ModelViewer from "../ModelViewer/ModelViewer";
import Footer from "../Footer/Footer";
import OptionSelection from "../OptionSelection/OptionSelection";
import FeatureSelection from "../FeatureSelection/FeatureSelection";
import styles from "./Configurator.module.css"

function Configurator() {
  return (
    <main>
      <Header />
      <section className={styles.contentWrapper}>
        <OptionSelection />
        <ModelViewer />
        <FeatureSelection />
      </section>
      <Footer />
    </main>
  );
}

export default Configurator;
