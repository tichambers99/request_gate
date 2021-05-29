import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { useHistory, useLocation } from 'react-router-dom';

import '../common.css'
import './login.css';

function LoginForm() {
  const [ account, setAccount ] = useState({
    email: "",
    password: ""
  });
  const auth = useContext(AuthContext);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/request" } };
  let login = () => {
    console.log(account);
    auth.signIn(() => {
      history.replace(from);
    });
  };

  return (
    <div className='box login'>
        <fieldset className="login__fieldset">
          <legend className="login__legend">Email</legend>
          <input
            onChange={(e)=>{
              setAccount({...account, email: e.target.value})
            }}
            className="login__input"
            type="text" id="email"
            name="email" 
          />
        </fieldset>
        <fieldset className="login__fieldset">
          <legend className="login__legend">Password</legend>
          <input
            onChange={(e)=>{
              setAccount({...account, password: e.target.value})
            }}
            className="login__input"
            type="password"
            id="password"
            name="password" />
        </fieldset>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
        <div>
          <button 
            className='button button--white button__login'
            onClick={login}
          >
            Login
          </button>
        </div>
        
    </div>
  );
}

export default LoginForm;
