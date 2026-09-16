import { useConfigurator } from "../../hooks/useConfigurator";
import { FEATURES_BY_STEP } from "../../data/configuratorOptions";
import styles from "./FeatureSelection.module.css";

const THEME_KEYS = ["red", "gb", "unikko", "wood"] as const;

function FeatureSelection() {
  const { activeStep, cycleOption, selectedTheme, setSelectedTheme } =
    useConfigurator();

  const features =
    FEATURES_BY_STEP[activeStep as keyof typeof FEATURES_BY_STEP] ?? [];

  const cycleTheme = (direction: 1 | -1) => {
    const currentIndex = THEME_KEYS.indexOf(selectedTheme);
    const nextIndex =
      (currentIndex + direction + THEME_KEYS.length) % THEME_KEYS.length;
    setSelectedTheme(THEME_KEYS[nextIndex]);
  };

  return (
    <div className={styles.panel}>
      <div className={styles.list}>
        {features.map((feature) => {
          const isColorTheme = feature.key === "colorTheme";

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
                    isColorTheme
                      ? cycleTheme(-1)
                      : cycleOption(feature.key, feature.options.length, -1)
                  }
                >
                  ▲
                </button>
                <button
                  type="button"
                  className={styles.stepperBtn}
                  onClick={() =>
                    isColorTheme
                      ? cycleTheme(1)
                      : cycleOption(feature.key, feature.options.length, 1)
                  }
                >
                  ▼
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeatureSelection;
