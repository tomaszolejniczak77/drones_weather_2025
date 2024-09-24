import React, { useState } from "react";
import styles from "./Buttons.module.css";
import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";

const Buttons = ({ setDay }) => {
  const dayNumber = new Date().getDay();

  const { language } = useContext(LanguageContext);

  const translate = { dayName: { 0: "Dziś", 1: "Today" } };

  function handleDayName(day) {
    if (day === 7) {
      day = 0;
    } else if (day === 8) {
      day = 1;
    }

    switch (day) {
      case 0:
        return ["Niedziela", "Sunday"];
      case 1:
        return ["Poniedziałek", "Monday"];
      case 2:
        return ["Wtorek", "Tuesday"];
      case 3:
        return ["Środa", "Wednesday"];
      case 4:
        return ["Czwartek", "Thursday"];
      case 5:
        return ["Piątek", "Friday"];
      case 6:
        return ["Sobota", "Saturday"];
    }
  }

  console.log(language);

  const buttonsData = [
    { id: 0, name: (day) => handleDayName(day), isActive: true },
    { id: 1, name: (day) => handleDayName(day + 1), isActive: false },
    { id: 2, name: (day) => handleDayName(day + 2), isActive: false },
  ];

  const [buttonsState, setButtonsState] = useState(buttonsData);

  function handleDay(e) {
    const dayValue = +e.target.value;
    const updatedButtons = buttonsState.map((item) =>
      item.id === dayValue
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setDay(dayValue);
    setButtonsState(updatedButtons);
  }
  return (
    <>
      <div className={styles.buttons}>
        {buttonsState.map((item, id) => (
          <button
            key={id}
            className={item.isActive ? styles.active : ""}
            value={item.id}
            onClick={handleDay}
          >
            {item.id === 0
              ? translate.dayName[language]
              : item.name(dayNumber)[language]}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
