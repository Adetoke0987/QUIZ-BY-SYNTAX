import FrameComponent from "../components/FrameComponent";
import styles from "./css/home.module.css";


const Home = () => {
  return (
    <div className={styles.macbookPro142}>
      <div className={styles.syntaxLogo}>
        <p className={styles.syntax}>SYNTAX</p>
        <p className={styles.logo}>LOGO</p>
      </div>
      <section className={styles.macbookPro142Inner}>
        <div className={styles.yourGotoAppForLoremIpsumParent}>
          <h2 className={styles.yourGotoApp}>
            Your Goto App For Lorem ipsum shgt shjdk sjhjd
          </h2>
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default Home