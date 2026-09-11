import { useConfigurator } from "../../hooks/useConfigurator";

function ViewToggle() {
  const {
    sliderValue,
    handleRotationChange,
  } = useConfigurator();

  return (
    <input
      type="range"
      min="0"
      max="100"
      value={sliderValue}
      onChange={(e) =>
        handleRotationChange(Number(e.target.value))
      }
    />
  );
}

export default ViewToggle;