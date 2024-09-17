import React, { useContext, useState } from "react";
import styles from "./Weather.module.css";
import { WeatherContext } from "../../../context/WeatherContext";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherChart from "./WeatherChart/WeatherChart";
import Buttons from "./Buttons/Buttons";

const Weather = () => {
  const { weatherData } = useContext(WeatherContext);

  const [day, setDay] = useState(0);

  if (!weatherData) {
    return <p>Pobieranie pogody...</p>;
  }

  const { location, current, forecast } = weatherData;

  const { forecastday } = forecast;

  const today = forecastday[day].hour;

  const hourNow = current.last_updated.slice(11, 13);

  const data = [];

  // console.log(today);

  today.map((item, id) =>
    data.push({
      name: `${item.time.slice(11, 13)}`,
      ciśnienie: `${item.pressure_mb}`,
      unit: "hPa",
    })
  );

  // console.log(data);

  return (
    <>
      <WeatherInfo location={location} />
      <WeatherChart data={data} hourNow={hourNow} />
      <Buttons setDay={setDay} />
    </>
  );
};

export default Weather;
