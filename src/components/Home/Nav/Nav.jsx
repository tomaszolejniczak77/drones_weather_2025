import React from "react";
import { Link } from "react-router-dom";
import { TfiSettings } from "react-icons/tfi";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/settings">
          <button>{<TfiSettings />}</button>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
