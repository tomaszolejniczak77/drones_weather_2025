import React from "react";
import data from "../../../../data/conditions.json";
import { useState, useEffect } from "react";

const WeatherIcon = ({ current }) => {
  const [icon, setIcon] = useState("");

  const currentWeatherCode = current.condition.code;
  const condition = data.find(
    (item) => Number(item.code) === Number(currentWeatherCode)
  );
  const iconCode = condition?.icon;
  const apiIcon = current.condition.icon?.startsWith("//")
    ? `https:${current.condition.icon}`
    : current.condition.icon;

  useEffect(() => {
    if (!iconCode) {
      setIcon(apiIcon || "");
      return;
    }

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

    setIcon("");
    getIcon();
  }, [currentWeatherCode, iconCode, current.is_day, apiIcon]);

  return (
    <>
      <>
        <div>{!icon ? "Chwila!" : <img src={icon} alt="Weather icon" />}</div>
      </>
    </>
  );
};

export default WeatherIcon;
