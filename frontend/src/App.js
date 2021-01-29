import React from "react";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Detail from "./components/Detail";
import SignUp from "./components/SignUp/SignUp";
import "./css/style.css";
import MyLibrary from "./components/MyLibrary";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/detail/:product" component={Detail} />
      <Route path="/signup" component={SignUp} />
      <Route path="/mylib" component={MyLibrary} />
    </Switch>
  );
}

export default App;
