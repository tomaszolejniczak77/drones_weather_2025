import React, { useContext } from "react";
import styles from "./Home.module.css";
import Nav from "./Nav/Nav";
import Map from "./Map/Map";
import Weather from "./Weather/Weather";
import GetWeather from "./GetWeather/GetWeather";
import Footer from "./Footer/Footer";
import { LocationContext } from "../../context/LocationContext";

const Home = () => {
  const { position } = useContext(LocationContext);

  if (!position.latitude || !position.longitude) {
    return <p className={styles.fetching}>Pobieranie lokalizacji...</p>;
  }

  return (
    <>
      <div className={styles.home}>
        <Map />
        <Nav />
        <GetWeather position={position} />
        <Weather />
        <Footer />
      </div>
    </>
  );
};

export default Home;
