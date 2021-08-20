import React from "react";
import styles from "./styles.module.scss";

function filmItemRow({ imDbRating, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.img} src={image} alt="error" />
        <div className={styles.box_rating}>
          <div className={styles.rating}>{imDbRating}</div>
        </div>
      </div>
    </div>
  );
}
export default filmItemRow;
