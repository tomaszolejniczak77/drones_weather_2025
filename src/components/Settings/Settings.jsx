import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./Settings.module.css";
import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { userWindGust, setUserWindGust } = useContext(SettingsContext);

  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigation("/");
  }

  function handleInput(e) {
    setUserWindGust(e.target.value);
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
        <label>Ustaw próg ostrzegania dla porywów wiatru m/s</label>
        <input
          value={userWindGust}
          onChange={(e) => handleInput(e)}
          type="number"
          id="windGust"
        />
        <button type="submit">Ustaw</button>
      </form>
    </div>
  );
};

export default Settings;
