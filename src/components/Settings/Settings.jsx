import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Settings = () => {
  return (
    <>
      <h1>Ustawienia</h1>
      <p>
        <Link to="/">
          <button>{<FaHome />}</button>
        </Link>
      </p>
    </>
  );
};

export default Settings;
