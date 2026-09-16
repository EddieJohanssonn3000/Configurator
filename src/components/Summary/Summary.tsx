import { useState } from "react";
import styles from "./Summary.module.css";
import { div } from "three/tsl";

function Summary() {
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);

  return (
   <main className={styles.summary}>
      <header className={styles.header}>
        <button className={styles.backButton}>
          Go back to configuration
        </button>
        <h1>Summary</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.modelArea}>
          <p>3D model</p>
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
            <strong>Ruby red</strong>
          </div>

          <div className={styles.thumbnail}>
            RED
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Feet</span>
            <strong>Feet B</strong>
          </div>

          <div className={styles.thumbnail}>
            RED
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Arm</span>
            <strong>Arm A</strong>
          </div>

          <div className={styles.thumbnail}>
            RED
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Dials/knob</span>
            <strong>Dials A</strong>
          </div>

          <div className={styles.thumbnail}>
            RED
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
            IMG
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Sticker</span>
            <strong>Make some noise - rock sticker</strong>
          </div>

          <div className={styles.thumbnail}>
            IMG
          </div>
        </div>

        <div className={styles.configurationItemWithImage}>
          <div>
            <span>Slip Mat</span>
            <strong>Slip Mat A</strong>
          </div>

          <div className={styles.thumbnail}>
            IMG
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