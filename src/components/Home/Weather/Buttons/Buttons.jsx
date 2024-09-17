import React, { useState } from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ setDay }) => {
  const dayNumber = new Date().getDay();

  function handleDayName(day) {
    if (day > 6) {
      day = 0;
    } else if (day === 8) {
      day = 1;
    }

    switch (day) {
      case 0:
        return "Niedziela";
      case 1:
        return "Ponidziałek";
      case 2:
        return "Wtorek";
      case 3:
        return "Środa";
      case 4:
        return "Czwartek";
      case 5:
        return "Piątek";
      case 6:
        return "Sobota";
    }
  }

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
            {item.id === 0 ? "Dziś" : item.name(dayNumber)}
          </button>
        ))}
      </div>
    </>
  );
};

export default Buttons;
