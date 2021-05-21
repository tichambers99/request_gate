import React, { useState } from "react";
import LoginForm from "./LoginForm";
import './Login_css.css'
function Login() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const Login_htp = (details) => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    }
    else{
      console.log("Details do not match");
      setError("Details do not match")
    }
  };

  const Logout = () => {
    setUser({
      name:"",
      email: ""
    })
  };
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="Welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login_htp} error={error}></LoginForm>
      )}
    </div>
  );
}

export default Login;
