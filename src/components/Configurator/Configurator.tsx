import Header from "../Header/Header";
import ModelViewer from "../ModelViewer/ModelViewer";
import Footer from "../Footer/Footer";
import OptionSelection from "../OptionSelection/OptionSelection";
import FeatureSelection from "../FeatureSelection/FeatureSelection";

function Configurator() {
  return (
    <main>
      <Header />
      <OptionSelection />
      <ModelViewer />
      <FeatureSelection />
      <Footer />
    </main>
  );
}

export default Configurator;
