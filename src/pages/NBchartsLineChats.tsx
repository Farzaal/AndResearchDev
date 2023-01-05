import { FunctionComponent } from "react";
import styles from "./NBchartsLineChats.module.css";

const NBchartsLineChats: FunctionComponent = () => {
  return (
    <div className={styles.nbchartsLinechats}>
      <img className={styles.lineArea} alt="" src="../line--area.svg" />
      <img className={styles.point50Icon} alt="" src="../point50.svg" />
      <img className={styles.point20Icon} alt="" src="../point20.svg" />
    </div>
  );
};

export default NBchartsLineChats;
