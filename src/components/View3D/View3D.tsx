import { useConfigurator } from "../../hooks/useConfigurator";
import View3DModel from "./View3DModel";
import styles from "./View3D.module.css"

function View3D() {
  const { is3DOpen, setIs3DOpen } = useConfigurator();

  return (
    <>
      <button onClick={() => setIs3DOpen(true)}>
        View in 3D
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