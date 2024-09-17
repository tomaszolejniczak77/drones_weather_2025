import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import Tiles from "../Tiles/Tiles";

const TilesData = ({ setTilesData, tilesData, setActiveTile }) => {
  const { weatherData } = useContext(WeatherContext);

  const { current } = weatherData;

  //   console.log(current);

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
      isActive: true,
    },
    {
      id: 2,
      title: "Zachmurzenie",
      value: `${current.cloud}`,
      dataName: "cloud",
      unit: "%",
      isActive: false,
    },
  ];

  useEffect(() => {
    setTilesData(tiles);
  }, []);

  return (
    <>
      <Tiles tilesData={tilesData} setActiveTile={setActiveTile} />
    </>
  );
};

export default TilesData;
