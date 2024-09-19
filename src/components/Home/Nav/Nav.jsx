import React from "react";
import { Link } from "react-router-dom";
import { TfiSettings } from "react-icons/tfi";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <nav>
        <Link to="/settings">
          <button>{<TfiSettings />}</button>
        </Link>
      </nav>
      <h2>Pogoda do latania dronem</h2>
    </div>
  );
};

export default Nav;
