import { useConfigurator } from "../../hooks/useConfigurator";
import { FEATURES_BY_STEP } from "../../data/configuratorOptions";
import unikkoPic from "../../assets/images/unikko_pic.webp";
import styles from "./FeatureSelection.module.css";

const THEME_KEYS = ["red", "gb", "unikko", "wood"] as const;

function FeatureSelection() {
  const {
    activeStep,
    cycleOption,
    selectedOptions,
    selectedTheme,
    setSelectedTheme,
  } = useConfigurator();

  const features =
    FEATURES_BY_STEP[activeStep as keyof typeof FEATURES_BY_STEP] ?? [];

  const cycleTheme = (direction: 1 | -1) => {
    const currentIndex = THEME_KEYS.indexOf(selectedTheme);
    const nextIndex =
      (currentIndex + direction + THEME_KEYS.length) %
      THEME_KEYS.length;

    setSelectedTheme(THEME_KEYS[nextIndex]);
  };

  const getThemeStyle = () => {
    switch (selectedTheme) {
      case "red":
        return { background: "#8B0000" };

      case "gb":
        return { background: "#1a1a1a" };

      case "wood":
        return {
          background:
            "linear-gradient(135deg, #8b5e3c, #c69c6d, #8b5e3c)",
        };

      case "unikko":
        return {
          backgroundImage: `url(${unikkoPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.list}>
        {features.map((feature) => {
          const isColorTheme = feature.key === "colorTheme";

          const selectedIndex =
            selectedOptions[feature.key] ?? 0;

          const selectedValue =
            feature.options[selectedIndex];

          return (
            <div key={feature.key} className={styles.row}>
              <span className={styles.dot} />

              <span className={styles.label}>
                {feature.label}
              </span>

                        {isColorTheme ? (
              <span
                className={styles.swatch}
                style={getThemeStyle()}
              />
            ) : (
              <span className={styles.swatch}>
                {selectedValue}
              </span>
            )}
              <div className={styles.stepper}>
                <button
                  type="button"
                  className={styles.stepperBtn}
                  onClick={() =>
                    isColorTheme
                      ? cycleTheme(-1)
                      : cycleOption(
                          feature.key,
                          feature.options.length,
                          -1,
                        )
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
                      : cycleOption(
                          feature.key,
                          feature.options.length,
                          1,
                        )
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