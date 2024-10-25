import React from "react";
import styles from "../Styles/Header.module.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">Маршруты</a>
            </li>
            <li>
              <a href="#">Игра</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
