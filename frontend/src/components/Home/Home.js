import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login";
import Detail from "../Detail";
import SignUp from "../SignUp/SignUp";
import MyLibrary from "../MyLibrary";
import Footer from "../Footer/Footer";

const Home = ({ history, isLoggedIn }) => {
  return (
    <>
      <Header history={history} isLoggedIn={isLoggedIn} />
      <Switch>
        {/* container --> */}
        <Route
          exact
          path="/"
          render={() => <Main history={history} />}
        />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/detail:product" component={Detail} />
        <Route
        exact
          path="/signup"
          render={() => <SignUp history={history} />}
        />
        <Route
        exact
          path="/mylib"
          render={() => <MyLibrary history={history} />}
        />
        {/* <-- container*/}
      </Switch>
      <Footer />
    </>
  );
};

export default Home;
