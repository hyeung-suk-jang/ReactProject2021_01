import React from "react";
import styles from "./Main.module.css";
import SearchBar from "./MainContents/SearchBar";
import ServiceBar from "./MainContents/ServiceBar";

const Main = () => (
  <div id="container" className={styles.container}>
    <div className={styles.contents}>
      <SearchBar />
      <ServiceBar />
    </div>
  </div>
);

export default Main;
