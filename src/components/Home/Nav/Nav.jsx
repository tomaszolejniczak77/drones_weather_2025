import React from "react";
import { Link } from "react-router-dom";
import { TfiSettings } from "react-icons/tfi";
import { FaCircleInfo } from "react-icons/fa6";
import styles from "./Nav.module.css";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";

const Nav = () => {
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
      <h2>Pogoda do latania dronem</h2>
    </div>
  );
};

export default Nav;
