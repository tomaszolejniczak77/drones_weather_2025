import React from "react";
import styles from "./Home.module.css";
import Nav from "./Nav/Nav";
import Map from "./Map/Map";

const Home = () => {
  return (
    <>
      <main className={styles.home}>
        <Map />
        <Nav />
      </main>
    </>
  );
};

export default Home;
