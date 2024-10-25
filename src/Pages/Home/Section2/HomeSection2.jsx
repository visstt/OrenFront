import React from "react";
import styles from "./HomeSection2.module.css";
import photo from "./photoSection2.png";
import photo2 from "./photoSection2.2.png";
export default function HomeSection2() {
  return (
    <div className={styles.Section2}>
      <div className={styles.TextBlock}>
        <h2>САЙТ И МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</h2>
        <h1>
          <b>Возможности</b> проекта “Доступное <b>Оренбуржье”</b>
        </h1>
        <ul>
          <li>Интерактивная карта с доступными маршрутами</li>
          <li>Поиск попутчиков</li>
          <li>Отзывы по маршрутам</li>
          <li>Видеогид маршрутов</li>
          <li>Игра “Активный турист”</li>
        </ul>
      </div>
      <div className={styles.ImgBlock}>
        <img src={photo} alt="people" className={styles.photo1}/>
        <img src={photo2} alt="people"  className={styles.photo2}/>
      </div>
    </div>
  );
}
