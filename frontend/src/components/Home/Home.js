import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login";
import Detail from "../Detail";
import SignUp from "../SignUp/SignUp";
import MyLibrary from "../MyLibrary";

const Home = ({ history, me }) => {
  return (
    <>
      <Header history={history} me={me} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Main me={me} history={history} />}
        />
        <Route exact path="/login" render={() => <Login me={me} />} />
        <Route path="/detail:product" render={() => <Detail me={me} />} />
        <Route
          path="/signup"
          render={() => <SignUp history={history} me={me} />}
        />
        <Route
          path="/mylib"
          render={() => <MyLibrary history={history} me={me} />}
        />
      </Switch>
    </>
  );
};

export default Home;
