import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./Settings.module.css";
import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { userWindGust, setUserWindGust, userTemperature, setUserTemperature } =
    useContext(SettingsContext);

  const navigation = useNavigate();

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

      <h1>Ustawienia</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.gust}>
          <label>Ustaw próg ostrzegania dla porywów wiatru m/s</label>
          <div className={styles.inside}>
            <input
              value={userWindGust}
              onChange={(e) => handleInputGust(e)}
              type="number"
              id="windGust"
            />
            <button type="submit">Ustaw</button>
          </div>
        </div>

        <div className={styles.temperature}>
          <label>
            Ustaw próg ostrzegania dla minimalnej temperatury otoczenia
          </label>
          <div className={styles.inside}>
            <input
              value={userTemperature}
              onChange={(e) => handleInputTemperature(e)}
              type="number"
              id="temperature"
            />
            <button type="submit">Ustaw</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
