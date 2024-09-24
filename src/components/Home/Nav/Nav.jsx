import React from "react";
import { Link } from "react-router-dom";
import { TfiSettings } from "react-icons/tfi";
import { FaCircleInfo } from "react-icons/fa6";
import styles from "./Nav.module.css";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext";

const Nav = () => {
  const { language } = useContext(LanguageContext);

  const translations = {
    0: { title: "Pogoda do latania dronem" },
    1: { title: "Weather for flying a drone" },
  };

  return (
    <div className={styles.nav}>
      <nav>
        <div>
          <LanguageSelector />
        </div>

        <div>
          <Link to="/info">
            <button>{<FaCircleInfo />}</button>
          </Link>

          <Link to="/settings">
            <button>{<TfiSettings />}</button>
          </Link>
        </div>
      </nav>
      <h2>{translations[language].title}</h2>
    </div>
  );
};

export default Nav;
