import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { useHistory } from "react-router-dom";
import { authService } from "./firebase/fb";
import "./css/style.css";

function App() {
  const history = useHistory();
  const [me, setMe] = useState();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        console.log("setMe");
        setMe(authService.currentUser.displayName);
      } else {
        console.log("NO USER");
      }
    });
  });

  console.log(me);
  return <Home history={history} me={me} />;
}

export default App;
