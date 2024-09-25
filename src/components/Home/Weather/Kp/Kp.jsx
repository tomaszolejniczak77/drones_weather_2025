import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Kp.module.css";

const Kp = () => {
  const [kp, setKp] = useState();
  const [error, setError] = useState(null);

  const baseURL =
    "https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL);
        const currentData = response.data.length - 1;
        const kpData = response.data[currentData][1];
        setKp(kpData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.kp}>
      <p>Kp</p>
      {!error ? <p>{kp}</p> : <p>{error}</p>}
    </div>
  );
};

export default Kp;
