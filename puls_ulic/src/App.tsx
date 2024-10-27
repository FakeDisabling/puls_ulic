import React, { useRef, useLayoutEffect } from "react";
import { Link, Element } from "react-scroll";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import BookingForm from "./components/BookingForm/BookingForm";
import AboutUs from "./components/AboutUs/AboutUs";
import NumbersSpeak from "./components/NumbersSpeak/NumbersSpeak";
import CallToAction from "./components/CallToAction/CallToAction";
import ChooseTaxi from "./components/ChooseTaxi/ChooseTaxi";
import RouteMap from "./components/RouteMap/RouteMap";
import "./App.css";

function App() {
  const numbersSpeakRef = useRef<HTMLElement>(null);

  const scrollToNumbersSpeak = () => {
    if (numbersSpeakRef.current) {
      numbersSpeakRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      <Navigation />
      <Hero onLearnMoreClick={scrollToNumbersSpeak} />
      <BookingForm />
      <ChooseTaxi />
      <RouteMap />
      <Element name="numbersSpeak">
        <CallToAction />
      </Element>
      <AboutUs />
      <NumbersSpeak ref={numbersSpeakRef} />
    </div>
  );
}

export default App;
