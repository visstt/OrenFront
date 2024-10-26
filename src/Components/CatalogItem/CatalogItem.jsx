import React from "react";
import styles from "./CatalogItem.module.css";

export default function CatalogItem({
  name,
  time,
  photo,
  rateCount,
  description,
  price,
}) {
  return (
    <div className={styles.item}>
      {/* Предпросмотр с использованием backgroundImage */}
      <div
        className={styles.preview}
        style={{ backgroundImage: `url(${photo})` }}
      ></div>

      <div className={styles.info}>
        <span className={styles.rateCount}>
          <img src="public/star.png" alt="Star icon" /> ({rateCount} отзывов)
        </span>
        <h2>{name}</h2>
        <ul className={styles.iconWrapper}>
          <li className={styles.hours}>{time} часа</li>
          <li className={styles.advantage}>Семейный</li>
        </ul>
        {description && <p className={styles.description}>{description}</p>}
        {price !== undefined && (
          <p className={styles.price}>
            Цена: {price ? `${price} ₽` : "Бесплатно"}
          </p>
        )}
      </div>
    </div>
  );
}
