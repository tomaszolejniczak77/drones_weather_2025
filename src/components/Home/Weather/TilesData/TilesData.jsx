import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../../../context/WeatherContext";
import { SettingsContext } from "../../../../context/SettingsContext";
import { LanguageContext } from "../../../../context/LanguageContext";
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

  const { language } = useContext(LanguageContext);

  const { current } = weatherData;

  const [isTileOn, setIsTileOn] = useState(false);

  const tiles = [
    {
      id: 1,
      title: ["Temperatura", "Temperature"],
      value: `${current.temp_c}`,
      dataName: "temp_c",
      unit: "°C",
      isExtended: true,
      extraTitle: ["Odczuwalna", "Feels like"],
      extraValue: `${current.feelslike_c}`,
      extraUnit: "°C",
      isNotSafe: current.temp_c < `${userTemperature}` ? true : false,
      isActive: isTileOn,
    },
    {
      id: 2,
      title: ["Zachmurzenie", "Cloud cover"],
      value: `${current.cloud}`,
      dataName: "cloud",
      unit: "%",
      isExtended: true,
      extraTitle: ["Opady", "Precipitation"],
      extraValue: `${current.precip_mm}`,
      extraUnit: "mm",
      isNotSafe: current.precip_mm > 0 ? true : false,
      isActive: isTileOn,
    },
    {
      id: 3,
      title: ["Wiatr", "Wind"],
      value: `${(current.wind_kph / 3.6).toFixed(1)}`,
      dataName: "wind_kph",
      unit: "m/s",
      isExtended: true,
      extraTitle: "",
      extraValue: `${current.wind_kph}`,
      extraUnit: "km/h",
      isNotSafe: current.wind_kph > 30 ? true : false,
      isActive: isTileOn,
    },
    {
      id: 4,
      title: ["Ciśnienie", "Pressure"],
      value: `${current.pressure_mb}`,
      dataName: "pressure_mb",
      unit: "hPa",
      isExtended: false,
      extraTitle: "",
      extraValue: "",
      extraUnit: "",
      isActive: isTileOn,
    },
    {
      id: 5,
      title: ["Porywy wiatru", "Wind gusts"],
      value: `${((current.gust_kph * 1000) / 3600).toFixed(1)}`,
      dataName: "gust_kph",
      unit: "m/s",
      isExtended: true,
      extraTitle: "",
      extraValue: `${current.gust_kph}`,
      extraUnit: "km/h",
      isNotSafe: current.gust_kph / 3.6 > `${userWindGust}` ? true : false,
      isActive: isTileOn,
    },
  ];

  useEffect(() => {
    const updatedTilesdata = tiles.map((item) =>
      item.title[language] === activeTile
        ? { ...item, isActive: !isTileOn }
        : item
    );

    setTilesData(updatedTilesdata);
  }, [current, activeTile]);

  useEffect(() => {
    if (language == 0) {
      setActiveTile("Temperatura");
    } else if (language == 1) {
      setActiveTile("Temperature");
    }
  }, [language]);

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
