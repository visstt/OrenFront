import React, { useState } from "react";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";

const MyMapComponent = () => {
  const [points, setPoints] = useState([]);

  const handleMapClick = (e) => {
    const coords = e.get("coords");
    setPoints((prevPoints) => [...prevPoints, coords]);
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
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 10 }}
        onClick={handleMapClick}
        style={{ width: "100%", height: "500px" }}
      >
        {points.map((point, index) => (
          <Placemark key={index} geometry={point} />
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
      <button onClick={sendRouteToServer} style={{ marginTop: "10px" }}>
        Отправить маршрут на сервер
      </button>
    </YMaps>
  );
};

export default MyMapComponent;
