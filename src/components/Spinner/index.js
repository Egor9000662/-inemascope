import React from "react";
import styles from "./styles.module.scss";

function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.fetching}></div>
    </div>
  );
}
export default Spinner;
