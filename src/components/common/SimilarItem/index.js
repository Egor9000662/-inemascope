import React from "react";
import styles from "./styles.module.scss";

function InputSerch({ image, fullTitle, stars }) {
  return (
    <div className={styles.container}>
      <div className={styles.box_img}>
        <img src={image} alt="error" className={styles.img} />
      </div>
      <div className={styles.title}>{fullTitle}</div>
      <div className={styles.stars}>{stars}</div>
    </div>
  );
}
export default InputSerch;
