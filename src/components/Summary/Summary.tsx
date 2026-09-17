import { useState } from "react";
import { useConfigurator } from "../../hooks/useConfigurator";
import styles from "./Summary.module.css";
import ColorTheme from "../../assets/images/Unikko_color_theme.webp";
import feetB from "../../assets/images/Unikko_leg.webp";
import armA from "../../assets/images/Unikko_arm.webp";
import buttonA from "../../assets/images/Unikko_dial.webp";
import sticker from "../../assets/images/Unikko_sticker.webp";
import stereo from "../../assets/images/Unikko_stereo.webp";
import arrow from "../../assets/images/BackArrow.svg";
import slipmat from "../../assets/images/Unikko_slipmat.webp";
import { Canvas } from "@react-three/fiber";
import SummaryModel from "./SummaryModel";

function Summary() {
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);
  const { setActiveStep } = useConfigurator();
  const [rotationY, setRotationY] = useState(0);

  return (
   <main className={styles.summary}>
      <header className={styles.header}>
      <button
          className={styles.backButton}
          onClick={() => setActiveStep("Custom")}
        >
          <img src={arrow} alt="arrow" />
          Go back to configuration
      </button>
        <h1>Summary</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.modelArea}>
          <div className={styles.summaryCanvas}>
            <Canvas camera={{ position: [0, 3, 10], fov: 40 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 5, 5]} intensity={2} />

              <SummaryModel rotationY={rotationY} />
            </Canvas>
          </div>

          <input
            className={styles.summarySlider}
            type="range"
            min="0"
            max="100"
            value={((rotationY / Math.PI) + 1) * 50}
            onChange={(e) => {
              const value = Number(e.target.value);
              const rotation = ((value - 50) / 50) * Math.PI;

              setRotationY(rotation);
            }}
          />

          <p className={styles.summarySliderLabel}>
            Toggle to change view
          </p>
        </div>

        <div className={styles.infoBox}>
          <p className={styles.setupText}>Your setup</p>

          <h2>is complete</h2>

          <button
            className={styles.configurationButton}
            onClick={() => setIsConfigurationOpen(true)}
          >
            Show configuration <span>+</span>
          </button>

          <div className={styles.details}>
            <div>
              <span>Shipping</span>
              <strong>Free</strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>Nov - Dec</strong>
            </div>

            <div>
              <span>Total</span>
              <strong>15 675 kr</strong>
            </div>
          </div>

          <button className={styles.cartButton}>
            Add to cart
          </button>
        </div>
      </section>

        {isConfigurationOpen && (
    <div className={styles.configurationOverlay}>
    <aside className={styles.configurationPanel}>
      <button
        className={styles.closeConfiguration}
        onClick={() => setIsConfigurationOpen(false)}
      >
        ×
      </button>

      <h2>Configuration</h2>

      <div className={styles.configurationItems}>
        <div className={styles.configurationItem}>
          <span>Model</span>
          <strong>Cruiser Plus - LUX2027</strong>
        </div>

        <div className={styles.configurationItem}>
          <span>Product nr.</span>
          <strong>094953042 - 3X</strong>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Color theme</span>
            <strong>Unikko</strong>
          </div>

          <div className={styles.thumbnail}>
            <img src={ColorTheme} alt="color theme" />
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Feet</span>
            <strong>Feet B</strong>
          </div>

          <div className={styles.thumbnail}>
             <img src={feetB} alt="Feet B" />
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Arm</span>
            <strong>Arm A</strong>
          </div>

          <div className={styles.thumbnail}>
            <img src={armA} alt="Arm A" />
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Dials/knob</span>
            <strong>Dials A</strong>
          </div>

          <div className={styles.thumbnail}>
            <img src={buttonA} alt="Button A" />
          </div>
        </div>

        <div className={styles.configurationItem}>
          <span>Bluetooth</span>
          <strong>Included</strong>
        </div>

        <div className={styles.configurationItem}>
          <span>Lighting</span>
          <strong>Included</strong>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Stereo</span>
            <strong>VINYL - Technico AT-LP60X</strong>
          </div>

          <div className={styles.thumbnail}>
            <img src={stereo} alt="Stereo" />
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Sticker</span>
            <strong>Make some noise - rock sticker</strong>
          </div>

          <div className={styles.thumbnail}>
            <img src={sticker} alt="Sticker" />
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Slip Mat</span>
            <strong>Slip Mat A</strong>
          </div>

          <div className={styles.thumbnail}>
            <img src={slipmat} alt="Slipmat" />
          </div>
        </div>
      </div>
    </aside>
    </div>
  )}

    </main>
  );
}

export default Summary;