import React, { useState } from "react";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import styles from "./Map.module.css";

const MyMapComponent = () => {
  const [points, setPoints] = useState([]);

  const handleMapClick = (e) => {
    const coords = e.get("coords");
    setPoints((prevPoints) => [...prevPoints, coords]);
  };

  const handlePlacemarkClick = (index) => {
    setPoints((prevPoints) => prevPoints.filter((_, i) => i !== index));
  };

  const sendRouteToServer = () => {
    if (points.length < 2) {
      alert("Добавьте хотя бы две точки для маршрута!");
      return;
    }

    fetch("https://example.com/api/routes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ route: points }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Маршрут сохранен:", data))
      .catch((error) => console.error("Ошибка:", error));
  };

  return (
    <>
      <h1 style={{ margin: "20px 0" }}>Проложите маршрут</h1>
      <YMaps>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 10 }}
          onClick={handleMapClick}
          style={{ width: "100%", height: "500px" }}
        >
          {points.map((point, index) => (
            <Placemark
              key={index}
              geometry={point}
              onClick={() => handlePlacemarkClick(index)}
              options={{
                preset: "islands#blueCircleDotIcon",
                iconColor: "#0000FF",
              }}
            />
          ))}
          {points.length > 1 && (
            <Polyline
              geometry={points}
              options={{
                strokeColor: "#0000FF",
                strokeWidth: 4,
              }}
            />
          )}
        </Map>
        <button onClick={sendRouteToServer} className={styles.btnConfirm}>
          Отправить
        </button>
      </YMaps>
    </>
  );
};

export default MyMapComponent;
