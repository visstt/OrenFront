import React from "react";
import styles from "./Header.module.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.nav}>
          <ul className={styles.ulHeader}>
            <li className={styles.liHeader}>
              <a href="#">Главная</a>
            </li>
            <li className={styles.liHeader}>
              <a href="#">Блог</a>
            </li>
            <li className={styles.liHeader}>
              <a href="#">Маршруты</a>
            </li>
            <li className={styles.liHeader}>
              <a href="#">Игра</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
