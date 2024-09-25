import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./Settings.module.css";
import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { userWindGust, setUserWindGust, userTemperature, setUserTemperature } =
    useContext(SettingsContext);

  const navigation = useNavigate();

  const { language } = useContext(LanguageContext);

  const translation = {
    title: { 0: "Ustawienia", 1: "Settings" },
    windGust: {
      0: "Ustaw próg ostrzegania dla porywów wiatru m/s",
      1: "Set the warning level for wind gusts in m/s",
    },
    minTemp: {
      0: "Ustaw próg ostrzegania dla minimalnej temperatury otoczenia",
      1: "Set the warning level for the minimum ambient temperature",
    },
    button: { 0: "Ustaw", 1: "Set" },
  };

  function handleSubmit(e) {
    e.preventDefault();
    navigation("/");
  }

  function handleInputGust(e) {
    setUserWindGust(e.target.value);
  }

  function handleInputTemperature(e) {
    setUserTemperature(e.target.value);
  }

  return (
    <div className={styles.settings}>
      <nav>
        <Link to="/">
          <button>{<FaHome />}</button>
        </Link>
      </nav>

      <h1>{translation.title[language]}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.gust}>
          <label>{translation.windGust[language]}</label>
          <div className={styles.inside}>
            <input
              value={userWindGust}
              onChange={(e) => handleInputGust(e)}
              type="number"
              id="windGust"
            />
            <button type="submit">{translation.button[language]}</button>
          </div>
        </div>

        <div className={styles.temperature}>
          <label>{translation.minTemp[language]}</label>
          <div className={styles.inside}>
            <input
              value={userTemperature}
              onChange={(e) => handleInputTemperature(e)}
              type="number"
              id="temperature"
            />
            <button type="submit">{translation.button[language]}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
