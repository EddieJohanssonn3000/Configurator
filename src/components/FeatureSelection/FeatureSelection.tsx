import { useConfigurator } from "../../hooks/useConfigurator";

function FeatureSelection() {
  const { activeStep } = useConfigurator();

  return (
    <div>
      {activeStep === "Design" && (
        <div>
          <p>Color Theme</p>
          <p>Feet</p>
          <p>Tonearm</p>
          <p>Dial</p>
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
