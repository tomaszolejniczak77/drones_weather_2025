import React from "react";
import styles from "./AstroInfo.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";

const AstroInfo = ({ astroData }) => {
  const { language } = useContext(LanguageContext);

  const translation = {
    sunrise: { 0: "Wschód słońca", 1: "Sunrise" },
    sunset: { 0: "Zachód słońca", 1: "Sunset" },
  };

  const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(" "); // Rozdzielenie czasu i AM/PM
    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  return (
    <div className={styles.astro}>
      <p>{translation.sunrise[language]}</p>
      <p>{convertTo24Hour(astroData.sunrise)}</p>
      <p className={styles.extraTitle}>{translation.sunset[language]}</p>
      <p className={styles.extraValue}>{convertTo24Hour(astroData.sunset)}</p>
    </div>
  );
};

export default AstroInfo;
