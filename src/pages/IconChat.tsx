import { FunctionComponent } from "react";
import styles from "./IconChat.module.css";

const IconChat: FunctionComponent = () => {
  return (
    <div className={styles.iconChat}>
      <img className={styles.vectorIcon} alt="" src="../vector1.svg" />
    </div>
  );
};

export default IconChat;
