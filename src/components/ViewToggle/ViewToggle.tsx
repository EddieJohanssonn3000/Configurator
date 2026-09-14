import { useConfigurator } from "../../hooks/useConfigurator";
import styles from "./ViewToggle.module.css"


function ViewToggle() {
  const {
    activeStep,
    sliderValue,
    handleRotationChange,
  } = useConfigurator();

  return (

    <div className={styles.container}>

       {activeStep === "Design" && (
      <h1 className={styles.title}>Design - Choose your design</h1>
    )}
    
    {activeStep === "Functions" && (
      <h1 className={styles.title}>Function - Pick your function</h1>
    )}

    {activeStep === "Custom" && (
      <h1 className={styles.title}>Custom - Customize your player</h1>
    )}
    
    <input className={styles.slider}
      type="range"
      min="0"
      max="100"
      value={sliderValue}
      onChange={(e) =>
        handleRotationChange(Number(e.target.value))
      }
      />
     <p className={styles.label}>Toggle to change view</p>
    </div>
  );
}

export default ViewToggle;