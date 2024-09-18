import React, { useContext, useState } from "react";
import styles from "./Weather.module.css";
import { WeatherContext } from "../../../context/WeatherContext";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherChart from "./WeatherChart/WeatherChart";
import Buttons from "./Buttons/Buttons";
import TilesData from "./TilesData/TilesData";

const Weather = () => {
  const { weatherData } = useContext(WeatherContext);
  const [tilesData, setTilesData] = useState([]);
  const [activeTile, setActiveTile] = useState("Temperatura");

  const [day, setDay] = useState(0);

  if (!weatherData) {
    return <p className={styles.fetchingWeather}>Pobieranie pogody...</p>;
  }

  const { location, current, forecast } = weatherData;

  const { forecastday } = forecast;

  const chosenDayForecast = forecastday[day].hour;

  const astroData = forecastday[day].astro;

  const hourNow = current.last_updated.slice(11, 13);

  return (
    <>
      <WeatherInfo location={location} />
      <TilesData
        setTilesData={setTilesData}
        tilesData={tilesData}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
        astroData={astroData}
      />
      {weatherData && (
        <WeatherChart
          hourNow={hourNow}
          activeTile={activeTile}
          tilesData={tilesData}
          chosenDayForecast={chosenDayForecast}
          day={day}
        />
      )}
      <Buttons setDay={setDay} />
    </>
  );
};

export default Weather;
