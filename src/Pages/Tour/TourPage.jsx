import React from "react";
import Slider from "./Slider";
import styles from "./TourPage.module.css";
import mobile from "./mobile.svg";
import energy from "./energy.svg";
import spray from "./spray.svg";
import watch from "./watch.svg";
export default function TourPage() {
  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+4",
  ];

  return (
    <div className={styles.Tour}>
      <h1>Оренбург - Парк Луна</h1>
      <Slider images={images} />
      <div className={styles.ContainerTour}>
        <div className={styles.fichContainer}>
          <div className={styles.block}>
            <img src={mobile} alt="mobile" />
            <div className={styles.text}>
              <h2>Мобильное приложение</h2>
              <p>Используйте наше мобильное приложения для отслеживания тура</p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={energy} alt="energy" />
            <div className={styles.text}>
              <h2>Инклюзивный туризм</h2>
              <p>Путишествуйте с друзьями, не смотря на ограничения!</p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={spray} alt="spray" />
            <div className={styles.text}>
              <h2>Без насекомых</h2>
              <p>
                Все места обработаны и во время тура никто вас не побеспокоит
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <img src={watch} alt="watch" />
            <div className={styles.text}>
              <h2>Продолжительность 5 часов</h2>
              <p>Время с учётом дороги и посещения места</p>
            </div>
          </div>
        </div>

        <h1>Описание</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, in
          impedit. Repellat velit sunt, optio quam ipsam veritatis quos atque
          mollitia cumque consequuntur, exercitationem assumenda consequatur?
          Non nobis quas accusamus pariatur veritatis dolore labore rem ullam
          aperiam incidunt adipisci, aspernatur culpa, architecto voluptate
          sequi repudiandae repellendus. Impedit veritatis temporibus iure minus
          dolorem odio quibusdam laudantium id earum incidunt, quam minima
          libero, totam omnis repellat at enim nulla aperiam? Amet eaque dolor
          nihil nam error? Consectetur quo tempore porro atque unde molestiae
          quibusdam animi expedita, totam odio! Repellat quam aliquam obcaecati
          soluta illum impedit hic ratione nemo suscipit, esse voluptas deleniti
          odio facere modi provident nostrum quos repellendus ipsam quod saepe
          officiis possimus maxime ipsa! Corporis, dolore, laboriosam
          perspiciatis voluptatem dolorum deserunt sit est, ipsa expedita nemo
          officia dignissimos inventore iusto nisi? Veritatis repudiandae ullam
          reprehenderit minus commodi, vero tempore quod consequuntur non
          aliquam corporis natus nesciunt. Architecto quibusdam, quasi quod
          assumenda explicabo earum laudantium impedit accusamus iusto ex
          pariatur nam eveniet, mollitia, deserunt molestias quia excepturi rem?
          Ut necessitatibus voluptate voluptas saepe, non vero amet quia,
          distinctio quam dolore illum, aliquid tempora rem et explicabo numquam
          mollitia ducimus similique. Fugit provident impedit placeat maiores
          eum rem commodi beatae magni quae!
        </p>
      </div>
    </div>
  );
}
