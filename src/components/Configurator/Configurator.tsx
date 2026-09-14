import Header from "../Header/Header";
import ModelViewer from "../ModelViewer/ModelViewer";
import Footer from "../Footer/Footer";
import OptionSelection from "../OptionSelection/OptionSelection";
import FeatureSelection from "../FeatureSelection/FeatureSelection";
import styles from "./Configurator.module.css";
import { ConfiguratorProvider } from "../../hooks/useConfigurator";
import ViewToggle from "../ViewToggle/ViewToggle";
import View3D from "../View3D/View3D";

function Configurator() {
  return (
    <ConfiguratorProvider>
      <main>
        <Header />
        <ViewToggle />
        <View3D />
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
