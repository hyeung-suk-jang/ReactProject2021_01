import React from "react";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Detail from "./components/Detail";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/detail/:product" component={Detail} />
    </Switch>
  );
}

export default App;
