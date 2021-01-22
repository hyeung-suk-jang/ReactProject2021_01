import React, { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AppRouter from "./components/Router";
import { authService } from "./firebase/fb";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory()

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(authService.currentUser);
  // setInterval(() => {
  //   console.log(authService.currentUser);
  // }, 2000);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        history.push('/')
      } else {
        setIsLoggedIn(false);
      }
      // setInit(true);
    });
  }, []);  // 로그인 아웃 여부 판단
  return (
    <div>
      <Layout>
        <Header isLoggedIn={isLoggedIn}/>
        <AppRouter />
        <Main />
      </Layout>
    </div>
  );
}

export default App;
