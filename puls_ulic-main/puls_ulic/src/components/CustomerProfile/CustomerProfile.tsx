import React from "react";
import { Link } from "react-router-dom";
import "./CustomerProfile.css";
import OrderHistory from "./OrderHistory";
import Settings from "./Settings";
function CustomerProfile() {
  return (
    <section className="customer-profile">
      <div className="container">
        <div className="profile-content">
          <div className="user-card">
            <div className="avatar">
              <img
                src="https://www.svgrepo.com/show/9695/avatar.svg"
                alt="Аватар"
              />
            </div>
            <div className="user-details">
              <h2>Иван Иванов</h2>
              <p>
                <span className="label">Email:</span> ivan.ivanov@example.com
              </p>
              <p>
                <span className="label">Телефон:</span> +375 (29) 123-45-67
              </p>
              <p>
                <span className="label">Дата регистрации:</span> 15.09.2024
              </p>
            </div>
          </div>
          <div className="profile-links">
            <a className="settings-link">Настройки профиля</a>
          </div>
          <div className="user-stats">
            <h3>Статистика поездок</h3>
            <div className="stat-item">
              <div className="stat-label">Всего поездок:</div>
              <div className="stat-value">3</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Пройдено километров:</div>
              <div className="stat-value">3,456 км</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Средняя оценка:</div>
              <div className="stat-value">4.8</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Любимый маршрут:</div>
              <div className="stat-value">ул. Пушкина, 10 - ТЦ "Галерея"</div>
            </div>
          </div>
          <div className="user-stats">
            <h3>История заказов</h3>
            <OrderHistory></OrderHistory>
          </div>
          <div className="user-stats">
            <h3>Настройки профиля</h3>
            <Settings></Settings>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerProfile;
