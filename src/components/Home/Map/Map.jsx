import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";
import { useContext } from "react";
import { LocationContext } from "../../../context/LocationContext";

const Map = () => {
  const { position, setPosition } = useContext(LocationContext);
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
    const { lat, lng } = marker.getLatLng();
    setPosition({ latitude: lat, longitude: lng });
  };

  if (!position.latitude || !position.longitude) {
    return <p className={styles.fetchingLocation}>Fetching location...</p>;
  }

  return (
    <>
      <MapContainer
        center={[position.latitude, position.longitude]}
        zoom={10}
        scrollWheelZoom={false}
        style={{ height: 150 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[position.latitude, position.longitude]}
          icon={DefaultIcon}
          draggable={draggable}
          eventHandlers={{
            dragend: updatePosition,
          }}
        >
          {/* <Popup></Popup> */}
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
