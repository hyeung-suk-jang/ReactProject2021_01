import React, { useEffect, useState } from "react";
import { authService } from "../../firebase/fb";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Home = ({ history }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      // setInit(true);
    });
  }, []); // 로그인 아웃 여부 판단
  return(
  <>
    <Header history={history} isLoggedIn={isLoggedIn}/>
    <Main history={history} />
  </>)
};

export default Home;
