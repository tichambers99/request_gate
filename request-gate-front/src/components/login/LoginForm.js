import React, { useState } from "react";
import '../common.css'
import './login.css';

function LoginForm({ Login_htp, error }) {
  // const [details, setDetails] = useState({ name: "", email: "", password: "" });
  // const submitHandler = e => {
  //   e.preventDefault();
  //   Login_htp(details);
  // }
  return (
    // <form onSubmit={submitHandler}>
    //   <div className="form-inner">
    //     <h2>Login</h2>
    //     {(error !== "") ? (<div className="erro"> {error} </div>) : ""}
    //     <div className="form-group">
    //       <label htmlFor="name">Name: </label>
    //       <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email: </label>
    //       <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="password">Password: </label>
    //       <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
    //     </div>
    //     <input type="submit" value="LOGIN"></input>
    //   </div>
    // </form>
    <form className='box login'>
        <fieldset className="login__fieldset">
          <legend className="login__legend">Email</legend>
          <input className="login__input" type="text" id="email" name="email" />
        </fieldset>
        <fieldset className="login__fieldset">
          <legend className="login__legend">Password</legend>
          <input className="login__input" type="password" id="password" name="password" />
        </fieldset>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
        <div>
          <button className='button button--white button__login'>Login</button>
        </div>
        
    </form>
  );
}

export default LoginForm;
