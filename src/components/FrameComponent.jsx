import styles from "./framecomponent.module.css";
import img from "../assets/home.png"

const FrameComponent = () => {
  return (
    <div className={styles.frameWrapper}>
       <div className={styles.doItButton}>
          <button className={styles.letsdodoit}>
            <div className={styles.letsDoIt}>Let’s do it</div>
          </button>
        </div>
      <div className={styles.puzzledManLookingAtQuestioParent}>
        <img
          className={styles.puzzledManLookingAtQuestio}
          loading="lazy"
          alt=""
          src={img}
        />
       
      </div>
    </div>
  );
};
export default FrameComponent