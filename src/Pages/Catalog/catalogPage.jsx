import styles from "./catalogPage.module.css";
import React, { useState, useEffect, useRef } from "react";
import CatalogItem from "../../Components/CatalogItem/CatalogItem";

export default function Catalog() {
  const [tours, setTours] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/tours/getAllTours",
          {
            method: "GET",
          }
        );

        if (response.ok) {
          const data = await response.json();
          // Исключаем поле rateCount
          const filteredData = data.map(({ rateCount, ...rest }) => rest);
          setTours(filteredData);
        } else {
          console.error("Ошибка при загрузке данных:", response.statusText);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
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
              <img src="public/ant-design_caret-down-outlined.svg" alt="" />
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
              {/* Filter options */}
            </form>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button}>Применить</button>
            <button className={styles.button}>Сбросить</button>
          </div>
        </div>

        <div className={styles.catalog}>
          {tours.map((tour, index) => (
            <CatalogItem
              key={index}
              name={tour.name}
              time={tour.time}
              photo={tour.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
