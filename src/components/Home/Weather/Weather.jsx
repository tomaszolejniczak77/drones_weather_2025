import React, { useContext } from "react";
import styles from "./Weather.module.css";
import { WeatherContext } from "../../../context/WeatherContext";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherChart from "./WeatherChart/WeatherChart";

const Weather = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) {
    return <p>Pobieranie pogody...</p>;
  }

  const { location, current, forecast } = weatherData;

  const { forecastday } = forecast;

  const today = forecastday[0].hour;

  const data = [];

  // today.map((item, id) => console.log(item.time.slice(11, 13)));

  today.map((item, id) =>
    data.push({
      name: `${item.time.slice(11, 13)}`,
      temperatura: `${item.temp_c}`,
    })
  );

  console.log(data);

  return (
    <>
      <WeatherInfo location={location} />
      <WeatherChart data={data} />
    </>
  );
};

export default Weather;
