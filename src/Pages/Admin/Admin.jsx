import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Admin.module.css";

export default function Admin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      // Создаём параметры в формате URL-кодирования
      const params = new URLSearchParams();
      params.append("login", login);
      params.append("password", password);

      const response = await axios.post(
        "http://localhost:8080/login",
        params, // передаём закодированные параметры
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // используем формат URL-кодирования
          },
        }
      );

      if (response.data === true) {
        navigate("/create");
      } else {
        setErrorMessage("Неверное имя пользователя или пароль.");
      }
    } catch (error) {
      console.error("Ошибка при входе:", error);
      setErrorMessage(
        error.response?.data?.message || "Ошибка сервера, попробуйте позже."
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Вход</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Имя пользователя</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Пароль</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <button type="submit" className={styles.button}>
          Войти
        </button>
      </form>
    </div>
  );
}
