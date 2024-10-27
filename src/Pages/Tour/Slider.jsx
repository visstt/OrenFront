import React, { useState } from "react";
import styles from "./Slider.module.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Проверка, что массив изображений не пустой
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.largeImage}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          onError={(e) => {
            // Заменить изображение на заполнитель, если загрузка не удалась
            e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
          }}
        />
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
            onError={(e) => {
              // Заменить миниатюру на заполнитель, если загрузка не удалась
              e.target.src =
                "https://via.placeholder.com/100x100?text=No+Image";
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
