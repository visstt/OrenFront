import styles from "./Catalog.module.css";
import React from "react";

export default function Catalog() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.date}></div>
          <div className={styles.range}></div>
          <div className={styles.place}></div>
          <div className={styles.buttons}></div>
        </div>
      </div>
    </>
  );
}
