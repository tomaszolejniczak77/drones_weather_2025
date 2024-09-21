import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <div>
        <nav>
          <Link to="/">
            <button>{<FaHome />}</button>
          </Link>
        </nav>
      </div>

      <h1>Instrukcja</h1>

      <ul>
        <ul>
          <li>Dane pogodowe pobierane są na podstawie lokalizacji.</li>
          <li>
            Jeśli chcesz zobaczyć dane dla innej lokalizacji, należy przeciągnąć
            ikonę położenia na mapie w oczekiwane miejsce.
          </li>
          <li>
            Kafelki poniżej mapy pokazują dane pogodowe dla aktualnej godziny.
          </li>
          <li>
            5 kafelków służy do przełączania danych prezentowanych na wykresie;
            domyślnie jest to temperatura.
          </li>
          <li>
            Po wybraniu odpowiedniego kafelka, zmienia on kolor, a wykres
            prezentuje wybrane dane dla doby wskazanego dnia.
          </li>
          <li>
            Przyciskami pod wykresem możesz aktywować dane dla kolejnych dni.
          </li>
          <li>
            Przemieszczając się po wykresie, możesz zobaczyć dane dla każdej
            godziny.
          </li>
          <li>
            Klikając na ikonę ustawień, masz możliwość wybrania odpowiedniego
            dla Twojego drona poziomu maksymalnej bezpiecznej siły wiatru w m/s
            oraz minimalnej bezpiecznej temperatury otoczenia w °C.
          </li>
          <li>
            Domyślnie ostrzeganie ustawione jest dla wiatru powyżej 8 m/s i
            temperatury poniżej 0°C; wtedy dany kafelek z informacją zmienia
            kolor na czerwony.
          </li>
          <li>
            Dane o odporności na wiatr i temperaturę drona znajdziesz w jego
            specyfikacji.
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Info;
