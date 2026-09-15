import { useConfigurator } from "../../hooks/useConfigurator";
import View3DModel from "./View3DModel";
import styles from "./View3D.module.css"
import viewIn3D from "../../assets/images/view-in-3d.svg"
import infoIcon from "../../assets/images/circle-outline.svg"
import lidClosed from "../../assets/images/LidClosed.svg";
import lidOpen from "../../assets/images/LidOpen.svg";


function View3D() {
  const { is3DOpen, setIs3DOpen } = useConfigurator();

  return (
    <>
    <div className={styles.actions}>
      <div className={styles.lidButtons}>
        <button className={styles.lidButton}>
          <img src={lidClosed} alt="Closed lid" />
        </button>

        <button className={styles.lidButton}>
          <img src={lidOpen} alt="Open lid" />
        </button>
      </div>

      <button className={styles.infoButton}>
        <img src={infoIcon} alt="Information" />
      </button>

      <button
        className={styles.viewButton}
        onClick={() => setIs3DOpen(true)}
      >
        <img src={viewIn3D} alt="View in 3D" />
      </button>
    </div>

      {is3DOpen && (
       <div className={styles.overlay}>
        <div className={styles.modal}>
        <button
            className={styles.closeButton}
            onClick={() => setIs3DOpen(false)}
            >
            X
         </button>

          <p>Drag to rotate • Scroll to zoom</p>

      <View3DModel />
    </div>
  </div>
      )}
    </>
  );
}

export default View3D;