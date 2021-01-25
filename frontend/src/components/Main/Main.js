import React from "react";
import SearchBar from "./MainContents/SearchBar";
import ServiceBar from "./MainContents/ServiceBar";
import Covid from "./MainContents/Covid";
import Sites from "./MainContents/Sites";
import Public from "./MainContents/Public";

const Main = () => (
  <div id="container" className="container">
    <div className="contents">
      <SearchBar />
      <ServiceBar />
      <Covid />
      <Sites />
      <Public />
    </div>
  </div>
);

export default Main;
