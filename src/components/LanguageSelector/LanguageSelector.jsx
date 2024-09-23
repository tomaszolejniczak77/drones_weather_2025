import React from "react";
import plFlag from "../../assets/flags/pl.svg";
import gbFlag from "../../assets/flags/gb.svg";
import styles from "./LanguageSelector.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const LanguageSelector = () => {
  const { setLanguage, language } = useContext(LanguageContext);

  function handleValue(e) {
    setLanguage(e.target.dataset.value);
  }

  console.log(language);

  return (
    <div className={styles.flags}>
      <img
        onClick={handleValue}
        data-value={"pl"}
        src={plFlag}
        alt="Polish"
        width="50"
        height="32"
      />
      <img
        onClick={handleValue}
        data-value={"eng"}
        src={gbFlag}
        alt="English"
        width="50"
        height="32"
      />
    </div>
  );
};

export default LanguageSelector;
