import React, { useState, useEffect, useRef } from "react";
import styles from "./CatalogPage.module.css";
import CatalogItem from "../../Components/CatalogItem/CatalogItem";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CatalogPage() {
  const [tours, setTours] = useState([]); // Все доступные туры
  const [filteredTours, setFilteredTours] = useState([]); // Отфильтрованные туры
  const [durationFilter, setDurationFilter] = useState(""); // Состояние фильтра по длительности

  const [activeIndex, setActiveIndex] = useState(null); // хранит индекс активного аккордеона
  const contentRef = useRef(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // переключаем состояние
  };
  // Функция для загрузки туров с сервера
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/tours/getAllTours"
        );
        setTours(response.data); // Сохраняем полученные данные в состояние
        setFilteredTours(response.data); // Изначально показываем все туры
      } catch (error) {
        console.error("Ошибка при загрузке туров:", error);
      }
    };

    fetchTours();
  }, []);

  // Функция для обработки изменения фильтра по длительности
  const handleDurationChange = (e) => {
    const value = e.target.value;
    setDurationFilter(value);

    if (value) {
      const filtered = tours.filter((tour) => tour.time === parseInt(value));
      setFilteredTours(filtered);
    } else {
      setFilteredTours(tours); // Если фильтр пустой, показываем все туры
    }
  };
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;

    const truncated = description.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    return lastSpaceIndex > 0
      ? truncated.substring(0, lastSpaceIndex) + "..."
      : truncated + "...";
  };
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
            <button className={styles.button}>Применить</button>
            <button className={styles.button}>Сбросить</button>
          </div>
        </div>
        <div className={styles.catalog}>
          {filteredTours.map((tour) => (
            <CatalogItem
              key={tour.id}
              id={tour.id}
              name={tour.name}
              time={tour.time}
              photo={`http://localhost:8080${tour.photoUrl}`}
              description={truncateDescription(tour.description, 100)}
              rateCount={25}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
