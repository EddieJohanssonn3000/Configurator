import { useConfigurator } from "../../hooks/useConfigurator";
import View3DModel from "./View3DModel";
import styles from "./View3D.module.css"
import viewIn3D from "../../assets/images/view-in-3d.svg"

function View3D() {
  const { is3DOpen, setIs3DOpen } = useConfigurator();

  return (
    <>
      <button
        className={styles.viewButton}
        onClick={() => setIs3DOpen(true)}
          >
        <img src={viewIn3D} alt="View in 3D" />
      </button>

      {is3DOpen && (
       <div className={styles.overlay}>
        <div className={styles.modal}>
        <button
            className={styles.closeButton}
            onClick={() => setIs3DOpen(false)}
            >
            Close
         </button>

        <h2>View in 3D</h2>

      <View3DModel />
    </div>
  </div>
      )}
    </>
  );
}

export default View3D;