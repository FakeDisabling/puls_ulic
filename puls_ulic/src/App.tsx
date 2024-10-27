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
import AuthorizationForm from "./components/AuthorizationForm/AuthorizationForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import CustomerProfile from "./components/CustomerProfile/CustomerProfile";
import NewOrder from "./components/CustomerProfile/NewOrder";
import OrderStatus from "./components/OrderStatus/OrderStatus";
import DriverProfile from "./components/DriverProfile/DriverProfile";
import AcceptedList from "./components/DriverProfile/AcceptedOrder";
import MaintenanceWorker from "./components/MaintenanceWorker/MaintenanceWorker";
import GarageManager from "./components/GarageManager/GarageManager";
import { Warehouse } from "@mui/icons-material";
import WarehouseWorker from "./components/WarehouseWorker/WarehouseWorker";
import FleetManager from "./components/FleetManager/FleetManager";
import WarehouseManager from "./components/WarehouseManager/WarehouseManager";
import RepairWorker from "./components/RepairWorker/RepairWorker";
import TaxiDriver from "./components/TaxiDriver/TaxiDriver";
import Dispatcher from "./components/Dispatcher/Dispatcher";
import DispatcherSettings from "./components/Dispatcher/DispatcherSettings";
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
      <AuthorizationForm />
      <RegistrationForm />
      <CustomerProfile />
      <NewOrder />
      <OrderStatus />
      <DriverProfile />
      <AcceptedList />
      <MaintenanceWorker />
      <GarageManager />
      <WarehouseWorker></WarehouseWorker>
      <FleetManager></FleetManager>
      <WarehouseManager></WarehouseManager>
      <RepairWorker></RepairWorker>
      <TaxiDriver></TaxiDriver>
      <Dispatcher></Dispatcher>
      <DispatcherSettings></DispatcherSettings>
    </div>
  );
}

export default App;
