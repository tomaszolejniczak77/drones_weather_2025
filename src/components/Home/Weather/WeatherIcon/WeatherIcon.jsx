import React from "react";
import data from "../../../../data/conditions.json";
import { useState, useEffect } from "react";

const WeatherIcon = ({ current }) => {
  const [icon, setIcon] = useState("");

  const currentWeatherCode = current.condition.code;
  const filteredData = data.filter((item) => item.code === currentWeatherCode);
  const iconCode = filteredData[0].icon;

  useEffect(() => {
    const getIcon = async () => {
      try {
        const image = await import(
          `../../../../image/weather/${
            current.is_day === 1 ? "day" : "night"
          }/${iconCode}.png`
        );
        setIcon(image.default);
      } catch (error) {
        console.error("Błąd podczas ładowania ikony:", error);
      }
    };

    getIcon();
  }, [currentWeatherCode, iconCode, current.is_day]);

  return (
    <>
      <>
        <div>{!icon ? "Chwila!" : <img src={icon} alt="Weather icon" />}</div>
      </>
    </>
  );
};

export default WeatherIcon;
