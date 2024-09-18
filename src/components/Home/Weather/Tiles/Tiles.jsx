import React from "react";
import styles from "./Tiles.module.css";
import WindIcon from "../WindIcon/WindIcon";
import AstroInfo from "../AstroInfo/AstroInfo";

const Tiles = ({
  tilesData,
  activeTile,
  setActiveTile,
  setTilesData,
  current,
  astroData,
}) => {
  function handleTileName(name) {
    setActiveTile(name);
    const updatedTilesdata = tilesData.map((item) =>
      item.title === name
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setTilesData(updatedTilesdata);
  }

  return (
    <>
      <div className={styles.tiles}>
        <div className={styles.icon}>
          <img src={current.condition.icon} alt="Weather Icon" />
        </div>

        {tilesData.map((item, id) => (
          <div
            className={`${styles.tile} ${item.isActive ? styles.active : ""}`}
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
      </div>
    </>
  );
};

export default Tiles;
