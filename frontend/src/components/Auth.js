import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";
import { LOG_IN_REQUEST } from "../reducers/user";

const Auth = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user)
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");


  if(me){
    history.push("/");
  }
  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginRequestAction({ email, password }));
    dispatch({ type: LOG_IN_REQUEST, data:{email:email, password:password} });
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  // const onSocialClick = async (e) => {
  //   const {
  //     target: { name },
  //   } = e;
  //   console.log(name);
  //   let provider;
  //   if (name === "google") {
  //     provider = new firebaseInstance.auth.GoogleAuthProvider();
  //   }
  //   const data = await authService.signInWithPopup(provider);
  //   console.log(data);
  // };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChangeEmail}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChangePassword}
        />
        <input type="submit" value={newAccount ? "Create Account" : "login"} />
        {error}
      </form>
      <span onClick={toggleAccount}> {newAccount ? "Login" : "Sigin in"}</span>
      <div>
        <button type="button" name="google" onClick={()=>{alert('준비중..')}}>
          {" "}
          Continue With Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Auth;
