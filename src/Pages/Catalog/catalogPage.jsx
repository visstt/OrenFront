import styles from "./catalogPage.module.css";
import React from "react";

export default function Catalog() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={`${styles.menuCategory} ${styles.date}`}>
            <h3 className={styles.nameCategory}>Дата поездки</h3>
            <form className={styles.dateForm} action="#">
              <label className={styles.labelName}>
                <p>Начало</p>
                <input className={styles.dateInput} type="date" name="" id="" />
              </label>
              <label className={styles.labelName}>
                <p>Конец</p>
                <input className={styles.dateInput} type="date" name="" id="" />
              </label>
            </form>
          </div>
          <div className={`${styles.range} ${styles.menuCategory}`}>
            <div className={styles.categoryHead}>
              <h3 className={styles.nameCategory}>Длительность</h3>
              <img src="public\ant-design_caret-down-outlined.svg" alt="" />
            </div>

            <form action="#" className={styles.rangeForm}>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                0-3 часов
              </label>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                3-5 часов
              </label>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                5-7 часов
              </label>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                Целый день(7+ часов)
              </label>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                Многодневный
              </label>
            </form>
          </div>
          <div className={`${styles.place} ${styles.menuCategory}`}>
            <div className={styles.categoryHead}>
              <h3 className={styles.nameCategory}>Дата поездки</h3>
              <img src="public\ant-design_caret-down-outlined.svg" alt="" />
            </div>

            <form action="#" className={styles.rangeForm}>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                Чёрный Отрог
              </label>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                Меловые горы
              </label>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                Каменное озеро
              </label>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                Тугустемир
              </label>
              <label className={`${styles.labelName} ${styles.checkbox}`}>
                <input type="checkbox" name="" />
                Село Угольное
              </label>
            </form>
          </div>
          <div className={styles.buttons}> </div>
        </div>
      </div>
    </>
  );
}
