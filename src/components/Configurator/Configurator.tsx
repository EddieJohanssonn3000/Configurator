import Header from "../Header/Header";
import ModelViewer from "../ModelViewer/ModelViewer";
import OptionSelection from "../OptionSelection/OptionSelection";
import FeatureSelection from "../FeatureSelection/FeatureSelection";

function Configurator() {
  return (
    <main>
      <Header />
      <OptionSelection />
      <ModelViewer />
      <FeatureSelection />
    </main>
  );
}

export default Configurator;
