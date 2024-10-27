import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import styles from "./TourPage.module.css";
import axios from "axios";
import mobile from "./mobile.svg";
import energy from "./energy.svg";
import spray from "./spray.svg";
import watch from "./watch.svg";

export default function TourPage() {
  const { id } = useParams(); // Достаем id из параметров маршрута
  const [tour, setTour] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Получение информации о туре
    const fetchTour = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/tours/${id}`);
        setTour(response.data);
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };

    // Получение изображений тура
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/tours/photos/${id}`
        );
        const imageUrls = response.data.map(
          (image) => `http://localhost:8080/${image.photoUrl}`
        );
        console.log("Полученные URL изображений:", imageUrls); // Логирование URL изображений
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchTour();
    fetchImages();
  }, [id]);

  if (!tour) return <p>Loading...</p>;

  return (
    <div className={styles.Tour}>
      <h1>{tour.name}</h1>
      <Slider images={images} /> {/* Отображение слайдера с изображениями */}
      <div className={styles.ContainerTour}>
        <div className={styles.fichContainer}>
          <div className={styles.block}>
            <img src={mobile} alt="mobile" />
            <div className={styles.text}>
              <h2>Мобильное приложение</h2>
              <p>Используйте наше мобильное приложение для отслеживания тура</p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={energy} alt="energy" />
            <div className={styles.text}>
              <h2>Инклюзивный туризм</h2>
              <p>Путешествуйте с друзьями, несмотря на ограничения!</p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={spray} alt="spray" />
            <div className={styles.text}>
              <h2>Без насекомых</h2>
              <p>
                Все места обработаны, и во время тура никто вас не побеспокоит.
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={watch} alt="watch" />
            <div className={styles.text}>
              <h2>Продолжительность {tour.time} часов</h2>
              <p>Время с учётом дороги и посещения места</p>
            </div>
          </div>
        </div>

        <h1>Описание</h1>
        <p>{tour.description}</p>
      </div>
    </div>
  );
}
