import React from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./WindIcon.module.css";

const WindIcon = ({ current }) => {
  const windDegree = current.wind_degree;

  return (
    <div
      className={styles.windIcon}
      style={{ transform: `rotate(${windDegree + 180}deg)` }}
    >
      {<FaArrowUp />}
    </div>
  );
};

export default WindIcon;
