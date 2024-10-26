import React from "react";
import styles from "../Styles/Header.module.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

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
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="">Блог</Link>
            </li>
            <li>
              <Link to="/catalog">Маршруты</Link>
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
