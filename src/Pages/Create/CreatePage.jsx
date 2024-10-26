import React from "react"
import styles from "./CreatePage.module.css"

export default function CreatePage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.head}>Создать маршрут</h1>
        <div className={styles.inputGrid}>
          <label className={styles.photoLabel}>
            <p>Добавьте фото</p>
            <input type="file" name="" id="" className={styles.photoInput} />
          </label>
          <div className={styles.miniPic}>
            <label className={styles.photoLabel}>
              <input type="file" name="" className={styles.photoInput} />
            </label>
            <label className={styles.photoLabel}>
              <input type="file" name="" className={styles.photoInput} />
            </label>
            <label className={styles.photoLabel}>
              <input type="file" name="" className={styles.photoInput} />
            </label>
            <label className={styles.photoLabel}>
              <input type="file" name="" className={styles.photoInput} />
            </label>
            <label className={styles.photoLabel}>
              <input type="file" name="" className={styles.photoInput} />
            </label>
            <label className={styles.photoLabel}>
              <input type="file" name="" className={styles.photoInput} />
            </label>
          </div>
          <div className={styles.textField}>
            <input
              placeholder="Добавьте название маршрута"
              type="text"
              name=""
              id=""
              className={styles.textInput}
            />
            <textarea
              placeholder="Добавьте описание маршрута"
              name=""
              id=""
              className={styles.textArea}
            />
          </div>
        </div>
      </div>
    </>
  )
}
