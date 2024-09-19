import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Kp.module.css";

const Kp = () => {
  const [kp, setKp] = useState();

  const baseURL =
    "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const currentData = response.data.length - 1;
      const kpData = response.data[currentData][1];
      setKp(kpData);
    });
  }, []);
  return (
    <div className={styles.kp}>
      <p>Kp</p>
      <p>{kp}</p>
    </div>
  );
};

export default Kp;
