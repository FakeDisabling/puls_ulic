import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="main-menu">
      <div className="container">
        <ul>
          <li>
            <a href="#" className="active">ДОМОЙ</a>
          </li>
          <li>
            <a href="#">О НАС</a>
          </li>
          <li>
            <a href="#">ЗАКАЗАТЬ ТАКСИ</a>
          </li>
          <li>
            <a href="#">НОВОСТИ</a>
          </li>
          <li>
            <a href="#">КОНТАКТЫ</a>
          </li>
        </ul>
      </div>
    </nav> 
  );
}

export default Navigation;