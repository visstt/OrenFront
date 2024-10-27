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
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [images, setImages] = useState([]);
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/tours/${id}`);
        setTour(response.data);
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/tours/photos/${id}`
        );
        const imageUrls = response.data.map(
          (image) => `http://localhost:8080/${image.photoUrl}`
        );
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchTour();
    fetchImages();
  }, [id]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setSubmissionMessage("");

    try {
      const formData = new URLSearchParams();
      formData.append("phone", phone);
      formData.append("fullName", fullName);
      formData.append("tour", tour?.name);

      const response = await axios.post(
        "http://localhost:8080/tours/record",
        formData,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      if (response.status === 200) {
        setSubmissionMessage("Заявка успешно отправлена!");
        setPhone("");
        setFullName("");
      }
    } catch (error) {
      console.error("Ошибка при отправке заявки:", error);
      setSubmissionMessage("Не удалось отправить заявку. Попробуйте позже.");
    }
  };

  if (!tour) return <p>Загрузка данных...</p>;

  return (
    <div className={styles.Tour}>
      <h1>{tour.name}</h1>
      <Slider images={images} />
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

        <h2 className={styles.fomH2}>Остались вопросы? С вами свяжутся в близжайшее время</h2>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <label>
            Номер телефона:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={styles.input}
            />
          </label>
          <label>
            ФИО:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className={styles.input}
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            Отправить заявку
          </button>
        </form>
        {submissionMessage && (
          <p className={styles.message}>{submissionMessage}</p>
        )}
      </div>
    </div>
  );
}
