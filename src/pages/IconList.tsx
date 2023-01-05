import { FunctionComponent } from "react";
import styles from "./IconList.module.css";

const IconList: FunctionComponent = () => {
  return (
    <div className={styles.iconList}>
      <img className={styles.vectorIcon} alt="" src="../vector2.svg" />
    </div>
  );
};

export default IconList;
