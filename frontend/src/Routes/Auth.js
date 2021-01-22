import React, { useState } from 'react';
import { authService, firebaseInstance } from '../firebase/fb'
import useInput from '../hooks/useInput';

const Auth = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (e) => {
    const { target: { name } } = e;
    console.log(name);
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder="Email" required value={email} onChange={onChangeEmail} />
        <input name="password" type="password" placeholder="Password" required value={password} onChange={onChangePassword} />
        <input type="submit" value={newAccount ? "Create Account" : "login"} />
        {error}
      </form>
      <span onClick={toggleAccount}> {newAccount ? "Login" : "Sigin in"}</span>
      <div>
        <button type="button" name="google" onClick={onSocialClick}> Continue With Google </button>
      </div>
    </div>

  );
};

export default Auth;
