import { FunctionComponent } from "react";
import styles from "./IconHome.module.css";

const IconHome: FunctionComponent = () => {
  return (
    <div className={styles.iconHome}>
      <img className={styles.vectorIcon} alt="" src="../vector5.svg" />
    </div>
  );
};

export default IconHome;
