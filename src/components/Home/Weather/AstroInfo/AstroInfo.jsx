import React from "react";
import styles from "./AstroInfo.module.css";

const AstroInfo = ({ astroData }) => {
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
      <p>Wschód słońca</p>
      <p>{convertTo24Hour(astroData.sunrise)}</p>
      <p className={styles.extraTitle}>Zachód słońca</p>
      <p className={styles.extraValue}>{convertTo24Hour(astroData.sunset)}</p>
    </div>
  );
};

export default AstroInfo;
