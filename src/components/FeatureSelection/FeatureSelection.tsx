import { useConfigurator } from "../../hooks/useConfigurator";

function FeatureSelection() {
  const { activeStep } = useConfigurator();

  return (
    <div>
      {activeStep === "Colors" && (
        <div>
          <p>Shell</p>
          <p>Feet</p>
          <p>Tonearm</p>
        </div>
      )}
      {activeStep === "Functions" && (
        <div>
          <p>Bluetooth</p>
          <p>Ligth</p>
          <p>Stereo</p>
        </div>
      )}
    </div>
  );
}

export default FeatureSelection;
