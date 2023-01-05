import { FunctionComponent } from "react";
import styles from "./NBchartsPIE.module.css";

const NBchartsPIE: FunctionComponent = () => {
  return (
    <div className={styles.nbchartsPie}>
      <img className={styles.ellipse5Icon} alt="" src="../ellipse-5.svg" />
      <div className={styles.text5}>
        <div className={styles.div}>38,58%</div>
        <div className={styles.div1}>14,96%</div>
        <div className={styles.div2}>16.54%</div>
        <div className={styles.div3}>14,96%</div>
        <div className={styles.div4}>14,96%</div>
      </div>
    </div>
  );
};

export default NBchartsPIE;
