import React from "react";
import Slider from "./Slider";
import styles from "./TourPage.module.css";
import mobile from "./mobile.svg";
import energy from "./energy.svg";
import spray from "./spray.svg";
import watch from "./watch.svg";
export default function TourPage() {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+5",
    "https://via.placeholder.com/600x400?text=Image+4",
  ];

  return (
    <div className={styles.Tour}>
      <h1>Оренбург - Парк Луна</h1>
      <Slider images={images} />
      <div className={styles.ContainerTour}>
        <div className={styles.fichContainer}>
          <div className={styles.block}>
            <img src={mobile} alt="mobile" />
            <div className={styles.text}>
              <h2>Мобильное приложение</h2>
              <p>Используйте наше мобильное приложения для отслеживания тура</p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={energy} alt="energy" />
            <div className={styles.text}>
              <h2>Инклюзивный туризм</h2>
              <p>Путишествуйте с друзьями, не смотря на ограничения!</p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={spray} alt="spray" />
            <div className={styles.text}>
              <h2>Без насекомых</h2>
              <p>
                Все места обработаны и во время тура никто вас не побеспокоит
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={watch} alt="watch" />
            <div className={styles.text}>
              <h2>Продолжительность 5 часов</h2>
              <p>Время с учётом дороги и посещения места</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
