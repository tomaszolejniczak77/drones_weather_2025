import React, { useEffect } from "react";
import styles from "./Tiles.module.css";
import WindIcon from "../WindIcon/WindIcon";
import AstroInfo from "../AstroInfo/AstroInfo";
import Kp from "../Kp/Kp";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

const Tiles = ({
  tilesData,
  setActiveTile,
  setTilesData,
  current,
  astroData,
  activeTile,
}) => {
  function handleTileName(name) {
    setActiveTile(name);
  }

  return (
    <>
      <div className={styles.tiles}>
        <div className={styles.icon}>
          {/* <img src={current.condition.icon} alt="Weather Icon" /> */}
          <WeatherIcon current={current} />
        </div>

        {tilesData.map((item, id) => (
          <div
            className={`${styles.tile} ${
              item.isNotSafe ? styles.notSafe : ""
            } ${item.isActive ? styles.active : ""}`}
            key={id}
            onClick={() => handleTileName(item.title)}
          >
            {item.isExtended ? (
              <>
                <p className={styles.title}>{item.title}</p>
                <p>
                  {item.value} {item.unit}
                </p>
                <p className={styles.extraTitle}>{item.extraTitle}</p>
                <p className={styles.extraValue}>
                  {item.extraValue} {item.extraUnit}
                </p>
              </>
            ) : (
              <>
                <p className={styles.title}>{item.title}</p>
                <p>
                  {item.value} {item.unit}
                </p>
              </>
            )}
          </div>
        ))}

        <div className={styles.icon}>
          <p>Kierunek wiatru</p>
          <WindIcon current={current} />
          <p className={styles.extraValue}>{current.wind_dir}</p>
        </div>

        <AstroInfo astroData={astroData} />
        <Kp />
      </div>
    </>
  );
};

export default Tiles;
