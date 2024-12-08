import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";

interface Location {
  lat: number;
  lng: number;
}

function LocationMarker() {
  const [markers, setMarkers] = useState<Location[]>([]);

  useMapEvents({
    click(e) {
      if (markers.length < 2) {
        // Максимум 2 маркера
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

export default LocationMarker;
