import styles from "./Summary.module.css";

function Summary() {
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

          <button className={styles.configurationButton}>
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
    </main>
  );
}

export default Summary;