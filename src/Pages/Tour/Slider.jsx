import React, { useState } from "react";
import styles from "./Slider.module.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.largeImage}>
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
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
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
