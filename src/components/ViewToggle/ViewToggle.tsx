import { useConfigurator } from "../../hooks/useConfigurator";
import styles from "./ViewToggle.module.css"


function ViewToggle() {
  const {
    sliderValue,
    handleRotationChange,
  } = useConfigurator();

  return (

    <div className={styles.container}>
    
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