import { FunctionComponent } from "react";
import styles from "./IconPerson.module.css";

const IconPerson: FunctionComponent = () => {
  return (
    <div className={styles.iconPerson}>
      <img className={styles.vectorIcon} alt="" src="../vector4.svg" />
    </div>
  );
};

export default IconPerson;
