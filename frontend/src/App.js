import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(authService.currentUser);
  // setInterval(() => {
  //   console.log(authService.currentUser);
  // }, 2000);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        history.push("/");
      } else {
        setIsLoggedIn(false);
      }
      // setInit(true);
    });
  }, []); // 로그인 아웃 여부 판단
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
