import React, { useEffect, useRef, useState } from "react";

const MapComponent = () => {
  const mapRef = useRef(null);
  const [points, setPoints] = useState([]); // Массив для хранения точек маршрута
  const [route, setRoute] = useState(null); // Хранение маршрута

  useEffect(() => {
    const ymaps = window.ymaps;

    const initMap = () => {
      const map = new ymaps.Map(mapRef.current, {
        center: [59.9343, 30.3351], // Центр карты (Санкт-Петербург)
        zoom: 10,
      });

      // Обработчик клика по карте
      map.events.add("click", (event) => {
        const coords = event.get("coords"); // Получаем координаты клика
        setPoints((prevPoints) => {
          const newPoints = [...prevPoints, coords]; // Добавляем координаты в массив точек

          // Если у нас уже есть две точки, строим маршрут
          if (newPoints.length === 2) {
            const userRoute = new ymaps.routing.UserRoute(newPoints);
            if (route) {
              map.geoObjects.remove(route); // Удаляем предыдущий маршрут, если он существует
            }
            map.geoObjects.add(userRoute);
            setRoute(userRoute);
          }
          return newPoints;
        });

        // Добавляем метку на карту
        const placemark = new ymaps.Placemark(coords, {
          balloonContent: `Точка: ${coords}`,
        });
        map.geoObjects.add(placemark);
      });
    };

    // Проверка на загрузку Яндекс.Карт
    if (window.ymaps) {
      initMap();
    } else {
      // Загружаем скрипт Яндекс.Карт
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      script.async = true;
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(initMap);
        }
      };
      document.head.appendChild(script);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = ""; // Очистка карты при размонтировании
      }
    };
  }, [points, route]);

  return (
    <div>
      <h1>Построение маршрута на Яндекс.Картах</h1>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
      {points.length > 0 && (
        <div>
          <h2>Добавленные точки:</h2>
          {points.map((point, index) => (
            <p key={index}>
              Точка {index + 1}: {point.join(", ")}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
