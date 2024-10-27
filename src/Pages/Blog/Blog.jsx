import React from "react";
import styles from "./Blog.module.css";
export default function Blog() {
  return (
    <div className={styles.blog}>
      <h1>Блог Оренбуржья</h1>
      <div className={styles.post}>
        <p>
          Дорогие путешественники, спешим сообщить вам, о нашем новом маршруте!
        </p>
        <p>
          С 30 октября стартует новый маршрут Оренбург - Уфа. Благодаря нашему
          маршруту вы посетите одни из самый красивых мест по данному пути.
          Скорее переходите в маршруты и взгляните на новый, супер интересный
          путь.
        </p>
        <p>
          Так же напоминаем, что первые 10 человек, которые выполнят квест по
          данному маршруту получат 200 баллов, вместо привычных 100 баллов.
          Скорее собирайте друзей и проходите задания все вместе!
        </p>
      </div>
    </div>
  );
}
