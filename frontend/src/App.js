import React, { useEffect, useState } from "react";
import Home from "./components/Container/Home/Home";
import { useHistory } from "react-router-dom";
import { authService } from "./firebase/fb";
import "./css/style.css";
import { useDispatch } from "react-redux";
import { IS_LOGGED_IN_REQUEST } from "./reducers/user";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: IS_LOGGED_IN_REQUEST,
          data: true,
        });
      } else {
        console.log("Not LoggedIn!");
      }
      setInit(true);
    });
  }, []);

  return <>{init ? <Home history={history} /> : "Initializing..."}</>;
}

export default App;
