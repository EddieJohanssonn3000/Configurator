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
          <p>Light</p>
          <p>Stereo</p>
        </div>
      )}
      {activeStep === "Custom" && (
        <div>
          <p>Stickers</p>
          <p>Limited Edition</p>
          <p>Dust Cover</p>
        </div>
      )}
    </div>
  );
}

export default FeatureSelection;
