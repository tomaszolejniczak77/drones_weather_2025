import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Airspace.module.css";

const Airspace = () => {
  const { language } = useContext(LanguageContext);
  const copy =
    Number(language) === 0
      ? {
          back: "← Wróć do pogody",
          title: "Strefy lotnicze PAŻP",
          source: "Oficjalna mapa DroneMap PAŻP",
          open: "Otwórz DroneMap w nowej karcie ↗",
          frameTitle: "Oficjalna mapa stref lotniczych PAŻP",
        }
      : {
          back: "← Back to weather",
          title: "PANSA airspace zones",
          source: "Official PANSA DroneMap",
          open: "Open DroneMap in a new tab ↗",
          frameTitle: "Official PANSA airspace zones map",
        };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.backLink} to="/">
          {copy.back}
        </Link>
        <h1>{copy.title}</h1>
      </header>

      <p className={styles.source}>{copy.source}</p>

      <iframe
        className={styles.mapFrame}
        src="https://dronemap.pansa.pl/"
        title={copy.frameTitle}
        allow="geolocation"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <a
        className={styles.externalLink}
        href="https://dronemap.pansa.pl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {copy.open}
      </a>
    </main>
  );
};

export default Airspace;
