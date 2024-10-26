import React from "react";
import styles from "./CatalogItem.module.css";

export default function CatalogItem({ name, time, photo, rateCount }) {
  return (
    <div className={styles.item}>
      <div
        className={styles.preview}
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className={styles.info}>
        <span className={styles.rateCount}>
          <img src="public\star.png" alt="" />({rateCount} отзывов)
        </span>
        <h2>{name}</h2>
        <ul className={styles.iconWrapper}>
          <li className={styles.hours}>{time} часа</li>
          <li className={styles.advantage}>Семейный</li>
        </ul>
      </div>
    </div>
  );
}
