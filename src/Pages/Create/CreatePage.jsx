import React, { useState } from "react";
import styles from "./CreatePage.module.css";
import axios from "axios";
import MapComponent from "../../Components/Map/Map";
export default function CreatePage() {
  const [mainImage, setMainImage] = useState(null);
  const [miniImages, setMiniImages] = useState(Array(6).fill(null));
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  // Функция для обработки главного фото
  const handleMainImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMainImage(file); // Сохраняем файл, а не URL
    }
  };

  // Функция для обработки мини-фотографий
  const handleMiniImageChange = (index) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedImages = [...miniImages];
      updatedImages[index] = file; // Сохраняем файл, а не URL
      setMiniImages(updatedImages);
    }
  };

  // Функция для отправки данных на сервер
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      // Добавляем главное фото
      if (mainImage) {
        formData.append("photo", mainImage);
      }

      // Добавляем мини-фотографии
      miniImages.forEach((image, index) => {
        if (image) {
          formData.append(`photo${index + 1}`, image);
        }
      });

      // Добавляем остальные поля
      formData.append("name", name);
      formData.append("description", description);
      formData.append("time", time);

      // Логируем данные перед отправкой
      console.log(Array.from(formData.entries()));

      // Отправка данных
      await axios.post("http://localhost:8080/tours/addTour", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Сброс полей формы после успешной отправки
      setMainImage(null);
      setMiniImages(Array(6).fill(null));
      setName("");
      setDescription("");
      setTime("");
      alert("Тур успешно добавлен!");
    } catch (error) {
      console.error("Ошибка при добавлении тура:", error.response.data);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Создать маршрут</h1>
      <div className={styles.inputGrid}>
        {/* Главное фото */}
        <label className={styles.photoLabel}>
          {mainImage ? (
            <img
              src={URL.createObjectURL(mainImage)}
              alt="Main preview"
              className={styles.previewImage}
            />
          ) : (
            <p>Добавьте фото</p>
          )}
          <input
            type="file"
            onChange={handleMainImageChange}
            className={styles.photoInput}
          />
        </label>

        {/* Мини-фотографии */}
        <div className={styles.miniPic}>
          {miniImages.map((image, index) => (
            <label key={index} className={styles.photoLabel}>
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  className={styles.previewImage}
                />
              ) : (
                <p>Добавьте фото</p>
              )}
              <input
                type="file"
                onChange={handleMiniImageChange(index)}
                className={styles.photoInput}
              />
            </label>
          ))}
        </div>

        <div className={styles.textField}>
          <input
            placeholder="Добавьте название маршрута"
            type="text"
            className={styles.textInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Добавьте описание маршрута"
            className={styles.textArea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Добавьте время маршрута"
            type="text"
            className={styles.textInput}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <button className={styles.btnConfirm} onClick={handleSubmit}>
        Добавить
      </button>
      <MapComponent/>
    </div>
  );
}
