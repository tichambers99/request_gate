import React, { useState } from "react";
import LoginForm from "./LoginForm";
import './login.css'
function Login() {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123",
  // };
  // const [user, setUser] = useState({ name: "", email: "", password: "" });
  // const [error, setError] = useState("");
  // const Login_htp = (details) => {
  //   console.log(details);
  //   if (details.email === adminUser.email && details.password === adminUser.password){
  //     console.log("Logged in");
  //     setUser({
  //       name: details.name,
  //       email: details.email
  //     })
  //   }
  //   else{
  //     console.log("Details do not match");
  //     setError("Details do not match")
  //   }
  // };

  // const Logout = () => {
  //   setUser({
  //     name:"",
  //     email: ""
  //   })
  // };
  return (
    <div className="loginPage">
      <LoginForm />
    </div>
  );
}

export default Login;
