import React, { useState } from "react";
import "./TaxiDriverSettings.css";
import { TextField, Button, Typography } from "@mui/material";

interface SettingsData {
  email: string;
  password: string;
  login: string;
}

function TaxiDriverSettings() {
  const [formData, setFormData] = useState<SettingsData>({
    email: "driver@example.com",
    password: "",
    login: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика отправки данных на сервер
    console.log("Настройки сохранены:", formData);
  };

  return (
    <div className="taxi-driver-settings-page">
      <div className="container">
        <Typography variant="h4" component="h2">
          Настройки
        </Typography>
        <form onSubmit={handleSubmit} className="settings-form">
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Логин"
            variant="outlined"
            name="login"
            value={formData.login}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Пароль"
            variant="outlined"
            name="password"
            type="password" //  Тип поля - пароль
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          {/*  Добавьте другие поля для настроек */}
          <Button type="submit" variant="contained" color="primary">
            Сохранить
          </Button>
        </form>
      </div>
    </div>
  );
}

export default TaxiDriverSettings;
