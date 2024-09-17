import React from "react";
import styles from "./Tiles.module.css";

const Tiles = ({ tilesData, setActiveTile }) => {
  //   console.log(tiles);

  function handleTileName(name) {
    setActiveTile(name);
  }

  return (
    <>
      <div className={styles.tiles}>
        {tilesData.map((item, id) => (
          <div
            className={styles.tile}
            key={id}
            onClick={() => handleTileName(item.title)}
          >
            <p>{item.title}</p>
            <p>
              {item.value} {item.unit}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tiles;
