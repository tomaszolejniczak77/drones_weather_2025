import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import Tiles from "../Tiles/Tiles";

const TilesData = ({
  setTilesData,
  tilesData,
  setActiveTile,
  activeTile,
  astroData,
}) => {
  const { weatherData } = useContext(WeatherContext);

  const { current } = weatherData;

  // console.log(current);

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
      isActive: false,
    },
    {
      id: 3,
      title: "Wiatr",
      value: `${current.wind_kph}`,
      dataName: "wind_kph",
      unit: "km/h",
      isExtended: true,
      extraTitle: "",
      extraValue: `${((current.wind_kph * 1000) / 3600).toFixed(2)}`,
      extraUnit: "m/s",
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
      value: `${current.gust_kph}`,
      dataName: "gust_kph",
      unit: "km/h",
      isExtended: true,
      extraTitle: "",
      extraValue: `${((current.gust_kph * 1000) / 3600).toFixed(2)}`,
      extraUnit: "m/s",
      isActive: false,
    },
  ];

  useEffect(() => {
    setTilesData(tiles);
  }, [current]);

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
