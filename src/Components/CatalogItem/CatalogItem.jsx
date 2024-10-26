import React from "react";
import styles from "./CatalogItem.module.css";

export default function CatalogItem({ head, range }) {
  return (
    <div className={styles.item}>
      <div className={styles.preview}></div>
      <div className="info">
        <h2>{head}</h2>
        <ul className={styles.iconWrapper}>
          <li className={styles.hours}>{range} часа</li>
          <li className={styles.advantage}>Семейный</li>
        </ul>
      </div>
    </div>
  );
}
