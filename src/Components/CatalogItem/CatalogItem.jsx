import React from "react";
import styles from "./CatalogItem.module.css";

export default function CatalogItem({ head, range, img, rateCount }) {
  return (
    <div className={styles.item}>
      <div
        className={styles.preview}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.info}>
        <span className={styles.rateCount}>
          <img src="public\star.png" alt="" />({rateCount} отзывов)
        </span>
        <h2>{head}</h2>
        <ul className={styles.iconWrapper}>
          <li className={styles.hours}>{range} часа</li>
          <li className={styles.advantage}>Семейный</li>
        </ul>
      </div>
    </div>
  );
}
