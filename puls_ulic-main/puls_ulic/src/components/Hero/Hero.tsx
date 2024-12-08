import React, { useState, useEffect, forwardRef } from "react";
import { Link } from "react-scroll";
import "./Hero.css";

interface HeroProps {
  onLearnMoreClick: () => void;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ onLearnMoreClick }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }, []);

    return (
      <div className={`hero-text ${isVisible ? "visible" : ""}`}>
        <h1 className="main-title">дешево и надежно</h1>
        <h1 className="main-title">заказывай такси у нас</h1>
        <p className="hero-description">
          наслаждайтесь комфортной поездкой с Пульс Улиц
        </p>
        <Link
          to="numbersSpeak"
          spy={true}
          smooth={true}
          duration={800}
          offset={150}
        >
          <button className="learn-more-button" onClick={onLearnMoreClick}>
            узнать больше
          </button>
        </Link>
      </div>
    );
  }
);

export default Hero;
