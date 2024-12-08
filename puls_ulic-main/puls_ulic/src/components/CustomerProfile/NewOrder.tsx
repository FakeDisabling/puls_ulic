import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
  InputAdornment,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PetsIcon from "@mui/icons-material/Pets";
import "./NewOrder.css";

interface Location {
  lat: number;
  lng: number;
}

function LocationMarker() {
  const [markers, setMarkers] = useState<Location[]>([]);

  useMapEvents({
    click(e) {
      if (markers.length < 2) {
        setMarkers([...markers, e.latlng]);
      }
    },
  });

  return markers.map((marker, index) => (
    <Marker
      key={index}
      position={marker}
      icon={L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })}
    >
      <Popup>
        {index === 0 ? "Откуда" : "Куда"}: <br /> {marker.lat}, {marker.lng}
      </Popup>
    </Marker>
  ));
}

function NewOrder() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffSelect = (tariff: string) => {
    setSelectedTariff(tariff);
  };

  const estimatedWaitingTimes = {
    Эконом: "5-10 мин.",
    Комфорт: "3-5 мин.",
    Бизнес: "1-2 мин.",
  };

  return (
    <div className="new-order-page">
      <div className="container">
        <div className="company-info">
          <img
            src="https://i.ibb.co/6J4cQ2H/logo.png"
            alt="Логотип компании"
            className="company-logo"
          />
        </div>

        <h2>Новый заказ</h2>

        <div className="map-container">
          <MapContainer
            center={[55.75, 37.57]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "400px" }}
          >
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
        </div>

        <div className="order-form">
          <div className="location-input">
            <TextField
              label="Откуда"
              variant="outlined"
              fullWidth
              className="location-input-field" /*  Добавляем класс */
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" className="icon-adornment">
                    {/*  Добавляем класс */}
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="location-input">
            <TextField
              label="Куда"
              variant="outlined"
              fullWidth
              className="location-input-field" /*  Добавляем класс */
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" className="icon-adornment">
                    {/*  Добавляем класс */}
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="tariff-selection">
            <h3>Тариф</h3>
            <ul>
              <li
                className={`tariff-item ${
                  selectedTariff === "Эконом" ? "active" : ""
                }`}
                onClick={() => handleTariffSelect("Эконом")}
              >
                <div className="tariff-info">
                  <span className="tariff-name">Эконом</span>
                  <span className="tariff-price">~ 2.5 руб.</span>
                </div>
              </li>
              <li
                className={`tariff-item ${
                  selectedTariff === "Комфорт" ? "active" : ""
                }`}
                onClick={() => handleTariffSelect("Комфорт")}
              >
                <div className="tariff-info">
                  <span className="tariff-name">Комфорт</span>
                  <span className="tariff-price">~ 3.8 руб.</span>
                </div>
              </li>
              <li
                className={`tariff-item ${
                  selectedTariff === "Бизнес" ? "active" : ""
                }`}
                onClick={() => handleTariffSelect("Бизнес")}
              >
                <div className="tariff-info">
                  <span className="tariff-name">Бизнес</span>
                  <span className="tariff-price">~ 6 руб.</span>
                </div>
              </li>
            </ul>
            {selectedTariff && (
              <p className="estimated-waiting-time">
                Примерное время ожидания:{" "}
                {estimatedWaitingTimes[selectedTariff]}
              </p>
            )}
          </div>

          <FormControl component="fieldset" className="payment-method">
            <FormLabel component="legend">Способ оплаты</FormLabel>
            <RadioGroup
              aria-label="payment-method"
              name="paymentMethod"
              defaultValue="cash"
            >
              <FormControlLabel
                value="cash"
                control={<Radio />}
                label="Наличные"
              />
              <FormControlLabel
                value="card"
                control={<Radio />}
                label="Карта"
              />
            </RadioGroup>
          </FormControl>

          <div className="additional-options">
            <h3>Дополнительные опции</h3>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    <ChildCareIcon /> Детское кресло
                  </>
                }
              />
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    <PetsIcon /> Перевозка животных
                  </>
                }
              />
              {/* ... (другие опции) ... */}
            </FormGroup>
          </div>

          <button className="order-button">
            <LocalTaxiIcon /> Заказать
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
