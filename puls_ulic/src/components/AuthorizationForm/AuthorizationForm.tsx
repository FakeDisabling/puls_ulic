import React, { useState } from "react";
import "./AuthorizationForm.css";

function AuthorizationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Здесь можно добавить логику отправки данных на сервер
      console.log("Форма отправлена:", formData);
    }
  };

  return (
    <section className="authorization-form">
      <div className="container">
        <h2>Авторизация</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <button type="submit">Войти</button>
          <div className="links">
            <a href="/forgot-password">Забыли пароль?</a>
            <span> | </span>
            <a href="/registration">Нет аккаунта?</a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthorizationForm;
