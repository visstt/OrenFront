import styles from "./catalogPage.module.css";
import React, { useState, useRef } from "react";
import CatalogItem from "../../Components/CatalogItem/CatalogItem";

export default function Catalog() {
  const [activeIndex, setActiveIndex] = useState(null); // хранит индекс активного аккордеона
  const contentRef = useRef(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // переключаем состояние
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sort}>
          Сортировка по:
          <select className={styles.sortBy} name="" id="">
            <option value="">Что то</option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className={styles.main}>
          <div className={styles.menu}>
            <div className={`${styles.range} ${styles.menuCategory}`}>
              <div
                className={styles.categoryHead}
                onClick={() => handleToggle(0)}
              >
                <h3 className={styles.nameCategory}>Длительность</h3>
                <img src="public\ant-design_caret-down-outlined.svg" alt="" />
              </div>

              <form
                action="#"
                className={styles.rangeForm}
                style={{
                  height:
                    activeIndex === 0
                      ? `${contentRef.current.scrollHeight}px`
                      : "0",
                  overflow: "hidden",
                  transition: "height 0.3s ease-in-out",
                }}
                ref={contentRef}
              >
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
              <div
                className={styles.categoryHead}
                onClick={() => handleToggle(1)}
              >
                <h3 className={styles.nameCategory}>Дата поездки</h3>
                <img src="public\ant-design_caret-down-outlined.svg" alt="" />
              </div>

              <form
                action="#"
                className={styles.rangeForm}
                style={{
                  height:
                    activeIndex === 1
                      ? `${contentRef.current.scrollHeight}px`
                      : "0",
                  overflow: "hidden",
                  transition: "height 0.3s ease-in-out",
                }}
                ref={contentRef}
              >
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
            <div className={styles.buttons}>
              <button>Применить</button>
              <button>Сбросить</button>
            </div>
          </div>
          <div className={styles.catalog}>
            <CatalogItem
              head={"Село Угольное - Меловые горы"}
              range={4}
              img={"public/Rectangle.png"}
              rateCount={539}
            />
            <CatalogItem
              head={"Село Угольное - Меловые горы"}
              range={4}
              img={"public/Rectangle.png"}
              rateCount={539}
            />
            <CatalogItem
              head={"Село Угольное - Меловые горы"}
              range={4}
              img={"public/Rectangle.png"}
              rateCount={539}
            />
            <CatalogItem
              head={"Село Угольное - Меловые горы"}
              range={4}
              img={"public/Rectangle.png"}
              rateCount={539}
            />
            <CatalogItem
              head={"Село Угольное - Меловые горы"}
              range={4}
              img={"public/Rectangle.png"}
              rateCount={539}
            />
            <CatalogItem
              head={"Село Угольное - Меловые горы"}
              range={4}
              img={"public/Rectangle.png"}
              rateCount={539}
            />
            <CatalogItem
              head={"Село Угольное - Меловые горы"}
              range={4}
              img={"public/Rectangle.png"}
              rateCount={539}
            />
          </div>
        </div>
      </div>
    </>
  );
}
