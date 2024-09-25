import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Info.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

import translationJSON from "../../data/translation.json";

const Info = () => {
  const { language } = useContext(LanguageContext);

  const translation = { title: { 0: "Instrukcja", 1: "Manual" } };

  const translationArray = [];

  for (let [key, value] of Object.entries(translationJSON)) {
    translationArray.push(value);
  }

  return (
    <div className={styles.info}>
      <div>
        <nav>
          <Link to="/">
            <button>{<FaHome />}</button>
          </Link>
        </nav>
      </div>

      <h1>{translation.title[language]}</h1>

      <ul>
        {translationArray.map((item, id) => (
          <li key={id}>{item[language]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
