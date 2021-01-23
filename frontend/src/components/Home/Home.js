import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Home = ({ history }) => (
  <>
    <Header history={history} />
    <Main history={history} />
  </>
);

export default Home;
