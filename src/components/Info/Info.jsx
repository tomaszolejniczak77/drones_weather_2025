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
        <li>Dane pogodowe pobierane są na podstawie lokalizacji.</li>
        <li>
          Jeśli chcesz zobaczyć dane dla innej lokalizacji, to należy
          przeciągnąc ikonę położenia na mapie w oczekiwane miejsce.
        </li>
        <li>
          Kafelki poniżej mapy pokazują dane pogodowe dla aktualnej godziny.
        </li>
        <li>
          5 kafelków służy do przełączania danych prezentowanych na wykresie, a
          domyślnie jest to temperatura.
        </li>
        <li>
          Po wybraniu odpowiedniego kafelka zmienia on kolor, a wykres
          prezentuje wybrane dane dla całej doby wskzanego dnia.
        </li>
        <li>
          Przyciskami pod wykresem możesz akywować dane dla kolejnych dni.
        </li>
        <li>
          Przemieszczając się po wykresie możesz zobaczyć dane dla każdej
          godziny.
        </li>
        <li>
          Klikając na ikonę ustawień masz możliwość wybrania odpowiedniego dla
          Twojego drona poziomu siły maksymalnego bezpieczego wiatru w m/s.
        </li>
        <li>
          Domyślnie ostrzeganie ustawione jest dla wiatru powyżej 8 m/s i wtedy
          kafelek z informacją o porywach wiatru zmieni kolor na czerwony.
        </li>
        <li>
          Dane o odporności na wiatr Twojegp drona znajdziesz w specyfikacji
        </li>
      </ul>
    </div>
  );
};

export default Info;
