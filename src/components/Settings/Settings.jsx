import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <nav>
        <Link to="/">
          <button>{<FaHome />}</button>
        </Link>
      </nav>

      <h1>Ustawienia</h1>
      <p>W budowie....</p>
    </div>
  );
};

export default Settings;
