import React from "react";
import styles from "./Header.module.css";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

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
              <Link to="/">Главная</Link>
            </li>
            <li className={styles.liHeader}>
              <Link to="/blog">Блог</Link>
            </li>
            <li className={styles.liHeader}>
              <Link to="/catalog">Маршруты</Link>
            </li>
            <li className={styles.liHeader}>
              <Link to="#">Игра</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
