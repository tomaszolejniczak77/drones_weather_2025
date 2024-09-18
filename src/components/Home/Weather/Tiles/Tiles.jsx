import React from "react";
import styles from "./Tiles.module.css";

const Tiles = ({ tilesData, activeTile, setActiveTile, setTilesData }) => {
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
      </div>
    </>
  );
};

export default Tiles;
