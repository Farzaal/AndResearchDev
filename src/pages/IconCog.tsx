import { FunctionComponent } from "react";
import styles from "./IconCog.module.css";

const IconCog: FunctionComponent = () => {
  return (
    <div className={styles.iconCog}>
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
    </div>
  );
};

export default IconCog;
