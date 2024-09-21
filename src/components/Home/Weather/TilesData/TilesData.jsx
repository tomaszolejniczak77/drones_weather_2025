import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import { SettingsContext } from "../../../../context/SettingsContext";
import Tiles from "../Tiles/Tiles";

const TilesData = ({
  setTilesData,
  tilesData,
  setActiveTile,
  activeTile,
  astroData,
}) => {
  const { weatherData } = useContext(WeatherContext);

  const { userWindGust, userTemperature } = useContext(SettingsContext);

  const { current } = weatherData;

  const tiles = [
    {
      id: 1,
      title: "Temperatura",
      value: `${current.temp_c}`,
      dataName: "temp_c",
      unit: "°C",
      isExtended: true,
      extraTitle: "Odczuwalna",
      extraValue: `${current.feelslike_c}`,
      extraUnit: "°C",
      isNotSafe: current.temp_c < `${userTemperature}` ? true : false,
      isActive: true,
    },
    {
      id: 2,
      title: "Zachmurzenie",
      value: `${current.cloud}`,
      dataName: "cloud",
      unit: "%",
      isExtended: true,
      extraTitle: "Opady",
      extraValue: `${current.precip_mm}`,
      extraUnit: "mm",
      isNotSafe: current.precip_mm > 0 ? true : false,
      isActive: false,
    },
    {
      id: 3,
      title: "Wiatr",
      value: `${(current.wind_kph / 3.6).toFixed(1)}`,
      dataName: "wind_kph",
      unit: "m/s",
      isExtended: true,
      extraTitle: "",
      extraValue: `${current.wind_kph}`,
      extraUnit: "km/h",
      isNotSafe: current.wind_kph > 30 ? true : false,
      isActive: false,
    },
    {
      id: 4,
      title: "Ciśnienie",
      value: `${current.pressure_mb}`,
      dataName: "pressure_mb",
      unit: "hPa",
      isExtended: false,
      extraTitle: "",
      extraValue: "",
      extraUnit: "",
      isActive: false,
    },
    {
      id: 5,
      title: "Porywy wiatru",
      value: `${((current.gust_kph * 1000) / 3600).toFixed(1)}`,
      dataName: "gust_kph",
      unit: "m/s",
      isExtended: true,
      extraTitle: "",
      extraValue: `${current.gust_kph}`,
      extraUnit: "km/h",
      isNotSafe: current.gust_kph / 3.6 > `${userWindGust}` ? true : false,
      isActive: false,
    },
  ];

  useEffect(() => {
    const updatedTilesdata = tiles.map((item) =>
      item.title === activeTile
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setTilesData(updatedTilesdata);
  }, [current, activeTile]);

  return (
    <>
      <Tiles
        current={current}
        tilesData={tilesData}
        setTilesData={setTilesData}
        setActiveTile={setActiveTile}
        activeTile={activeTile}
        astroData={astroData}
      />
    </>
  );
};

export default TilesData;
