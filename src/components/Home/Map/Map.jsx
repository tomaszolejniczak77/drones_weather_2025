import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const [position, setPosition] = useState([52.22, 19.34]);
  const [draggable, setDraggable] = useState(true);

  const DefaultIcon = L.icon({
    iconUrl: iconUrl,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const updatePosition = (e) => {
    const marker = e.target;
    setPosition(marker.getLatLng());
  };

  return (
    <>
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: 200 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={DefaultIcon}
          draggable={draggable}
          eventHandlers={{
            dragend: updatePosition,
          }}
        >
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
