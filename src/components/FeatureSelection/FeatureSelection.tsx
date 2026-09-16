import { useConfigurator } from "../../hooks/useConfigurator";
import { FEATURES_BY_STEP } from "../../data/configuratorOptions";
import styles from "./FeatureSelection.module.css";

function FeatureSelection() {
  const { activeStep, selectedOptions, cycleOption } = useConfigurator();

  const features =
    FEATURES_BY_STEP[activeStep as keyof typeof FEATURES_BY_STEP] ?? [];

  return (
    <div className={styles.panel}>
      <span className={styles.scrollLabel}>Scroll</span>
      <div className={styles.list}>
        {features.map((feature) => {
          const selectedIndex = selectedOptions[feature.key] ?? 0;
          const currentValue = feature.options[selectedIndex];

          return (
            <div key={feature.key} className={styles.row}>
              <span className={styles.dot} />
              <span className={styles.label}>{feature.label}</span>
              <span
                className={styles.swatch}
                style={{ background: "#1a1a1a" }}
              />
              <div className={styles.stepper}>
                <button
                  type="button"
                  className={styles.stepperBtn}
                  onClick={() =>
                    cycleOption(feature.key, feature.options.length, -1)
                  }
                >
                  ▲
                </button>
                <button
                  type="button"
                  className={styles.stepperBtn}
                  onClick={() =>
                    cycleOption(feature.key, feature.options.length, 1)
                  }
                >
                  ▼
                </button>
              </div>
              {/* temporary, remove once you trust it visually */}
              <span style={{ fontSize: 10, color: "#999" }}>
                {currentValue}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureSelection;
