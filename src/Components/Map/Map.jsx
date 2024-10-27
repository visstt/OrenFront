import React, { useEffect, useRef, useState } from "react";

const MapWithRoute = () => {
  const mapRef = useRef(null);
  const [routePoints, setRoutePoints] = useState([]);

  useEffect(() => {
    const ymapsScript = document.createElement("script");
    ymapsScript.src =
      "https://api-maps.yandex.ru/2.1/?apikey=d6d405e7-1289-4a56-a33d-bf41fa4cf919&lang=ru_RU";
    ymapsScript.async = true;

    ymapsScript.onload = () => {
      window.ymaps.ready(initMap);
    };

    document.head.appendChild(ymapsScript);

    return () => {
      document.head.removeChild(ymapsScript);
    };
  }, []);

  const initMap = () => {
    const map = new window.ymaps.Map(mapRef.current, {
      center: [55.76, 37.64], // Москва
      zoom: 10,
    });

    map.events.add("click", (event) => {
      const coords = event.get("coords");
      setRoutePoints((prev) => {
        const newPoints = [...prev, coords];

        // Если у нас уже есть 2 или более точек, строим маршрут
        if (newPoints.length > 1) {
          const userRoute = new window.ymaps.Route(newPoints);
          map.geoObjects.removeAll();
          map.geoObjects.add(userRoute);
        }

        return newPoints;
      });
    });
  };

  const handleSendRoute = () => {
    const points = routePoints.map((point) => ({
      latitude: point[0],
      longitude: point[1],
    }));

    fetch("https://yourserver.com/api/routes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ route: points }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Route sent successfully:", data);
      })
      .catch((error) => {
        console.error("Error sending route:", error);
      });
  };

  return (
    <div>
      <h1>Строительство маршрутов на Яндекс.Картах</h1>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
      <button onClick={handleSendRoute} disabled={routePoints.length < 2}>
        Отправить маршрут на сервер
      </button>
      {routePoints.length > 0 && (
        <div>
          <h2>Добавленные точки:</h2>
          {routePoints.map((point, index) => (
            <p key={index}>
              Точка {index + 1}: {point.join(", ")}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapWithRoute;
