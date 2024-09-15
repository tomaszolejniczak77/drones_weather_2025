import React from "react";
import styles from "./WeatherInfo.module.css";

const WeatherInfo = ({ location }) => {
  return (
    <>
      <p className={styles.weatherInfo}>
        {location.name} / {location.country} / {location.localtime}
      </p>
    </>
  );
};

export default WeatherInfo;
