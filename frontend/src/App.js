import React from "react";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout/Layout";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/detail/:product" component={Detail} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
