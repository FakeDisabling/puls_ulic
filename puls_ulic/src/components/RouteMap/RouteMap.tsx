import React, { useState } from "react";
import "./RouteMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { motion } from "framer-motion";

function RouteMap() {
  const customIcon = L.icon({
    iconUrl:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png",
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  const customIcon2 = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/25/25613.png",
    iconSize: [38, 38],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return (
    <section className="route-map">
      <div className="container">
        <h2 className="section-title">выберите маршрут</h2>
        <MapContainer
          center={[52.4345, 30.9754]}
          zoom={13}
          className="map-container"
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[52.4345, 30.9754]} icon={customIcon}>
            <Popup>Место посадки</Popup>
          </Marker>
          <Marker position={[52.4145, 30.9854]} icon={customIcon2}>
            <Popup>Место высадки</Popup>
          </Marker>
        </MapContainer>
        <div className="button-container">
          <motion.button
            className="book-taxi-button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            оформить заказ
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default RouteMap;
