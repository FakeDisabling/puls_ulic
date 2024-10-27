import React, { useState } from "react";
import "./Settings.css";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
}

function Settings() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "Иван Иванов", //  Изначальные значения
    phone: "+7 (999) 123-45-67",
    email: "ivan.ivanov@example.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //  Здесь будет логика отправки данных формы на сервер
    console.log("Данные формы:", formData);
  };

  return (
    <section className="settings-page">
      <div className="container">
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="form-group">
            <label htmlFor="fullName">ФИО:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Пароль:</label>
            <input />
          </div>
          <button type="submit" className="save-button">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default Settings;
