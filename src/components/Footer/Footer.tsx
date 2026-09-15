import styles from "./Footer.module.css";
import { useConfigurator } from "../../hooks/useConfigurator";

function Footer() {
  const { activeStep, setActiveStep } = useConfigurator();

  const handlePrevious = () => {
    if (activeStep === "Functions") {
      setActiveStep("Design");
    }

    if (activeStep === "Custom") {
      setActiveStep("Functions");
    }
  };

  const handleNext = () => {
    if (activeStep === "Design") {
      setActiveStep("Functions");
    }

    if (activeStep === "Functions") {
      setActiveStep("Custom");
    }
  };

  return (
    <footer className={styles.footerBtn}>
      {activeStep !== "Design" && (
        <button onClick={handlePrevious}>Previous</button>
      )}

      {activeStep === "Design" && (
        <button onClick={handleNext}>Next</button>
      )}

      {activeStep === "Functions" && (
        <button onClick={handleNext}>Next</button>
      )}

      {activeStep === "Custom" && (
        <button onClick={() => setActiveStep("Summary")}>
          Done</button>
      )}
    </footer>
  );
}

export default Footer;
