import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Detail from "./components/Detail";
import SignUp from "./components/SignUp/SignUp";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authService } from "./firebase/fb";
import "./css/style.css";
import MyLibrary from "./components/MyLibrary";

function App() {
  const history = useHistory();
  const [me, setMe] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log("setMe");
        console.log(authService.currentUser.displayName);
        setMe(authService.currentUser.displayName);
        setIsLoggedIn(true);
      } else {
        console.log("NO USER");
        setIsLoggedIn(false);
      }
    });
  });

  console.log(me);
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Home isLoggedIn={isLoggedIn} me={me} />}
      />
      <Route
        exact
        path="/login"
        render={() => <Login isLoggedIn={isLoggedIn} me={me} />}
      />
      <Route
        path="/detail:product"
        render={() => <Detail isLoggedIn={isLoggedIn} me={me} />}
      />
      <Route
        path="/signup"
        render={() => (
          <SignUp history={history} isLoggedIn={isLoggedIn} me={me} />
        )}
      />
      <Route
        path="/mylib"
        render={() => <MyLibrary isLoggedIn={isLoggedIn} me={me} />}
      />
    </Switch>
  );
}

export default App;
