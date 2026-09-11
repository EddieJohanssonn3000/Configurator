import { useConfigurator } from "../../hooks/useConfigurator";
import styles from "./OptionSelection.module.css";

const STEPS = ["Colors", "Functions", "Custom", "Background"] as const;

function OptionSelection() {
  const { activeStep, setActiveStep } = useConfigurator();

  return (
    <div className={styles.nav}>
      {STEPS.map((step) => (
        <button
          key={step}
          type="button"
          className={styles.step}
          onClick={() => setActiveStep(step)}
        >
          <span
            className={step === activeStep ? styles.dotActive : styles.dot}
          />
          <span className={styles.label}>{step}</span>
        </button>
      ))}
    </div>
  );
}

export default OptionSelection;
