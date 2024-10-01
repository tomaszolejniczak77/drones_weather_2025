import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </p>
      <p>® Tomasz Olejniczak {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
