import styles from "./catalogPage.module.css";
import React from "react";

export default function Catalog() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={`${styles.menuCategory} ${styles.date}`}>
            <h3 className={styles.nameCategory}>Дата поездки</h3>
            <form action="#">
              <label className={styles.labelName}>
                <p>Начало</p>
                <input type="date" name="" id="" />
              </label>
              <label className={styles.labelName}>
                <p>Конец</p>
                <input type="date" name="" id="" />
              </label>
            </form>
          </div>
          <div className={`${styles.range} ${styles.menuCategory}`}>
            <h3 className={styles.nameCategory}>Длительность</h3>
            <form action="#"></form>
          </div>
          <div className={`${styles.place} ${styles.menuCategory}`}>
            <h3 className={styles.nameCategory}>Дата поездки</h3>
            <form action="#"></form>
          </div>
          <div className={styles.buttons}></div>
        </div>
      </div>
    </>
  );
}
