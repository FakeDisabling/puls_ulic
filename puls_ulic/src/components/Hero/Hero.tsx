import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <div className={`hero-text ${isVisible ? 'visible' : ''}`}> 
      <h1 className="main-title">дешево и надежно</h1>
      <h1 className="main-title">заказывай такси у нас</h1>
      <p className="hero-description">
        наслаждайтесь комфортной поездкой с Пульс Улиц
      </p>
      <button className="learn-more-button">узнать больше</button> 
    </div>
  );
}

export default Hero;