import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login";
import Detail from "../Detail";
import SignUp from "../SignUp/SignUp";
import MyLibrary from "../MyLibrary";
import Footer from "../Footer/Footer";

const Home = ({ history, me }) => {
  return (
    <>
      <Header history={history} me={me} />
      <Switch>
        {/* container --> */}
        <Route
          exact
          path="/"
          render={() => <Main me={me} history={history} />}
        />
        <Route exact path="/login" render={() => <Login me={me} />} />
        <Route exact path="/detail:product" component={Detail} />
        <Route
        exact
          path="/signup"
          render={() => <SignUp history={history} me={me} />}
        />
        <Route
        exact
          path="/mylib"
          render={() => <MyLibrary history={history} me={me} />}
        />
        {/* <-- container*/}
      </Switch>
      <Footer />
    </>
  );
};

export default Home;
