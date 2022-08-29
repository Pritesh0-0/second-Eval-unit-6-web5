import React, { useState } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = () => {
      const payload = { email, password };
      fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            navigate("/Product");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
  return (
    <div>
      <input data-cy="login-email" placeholder="Enter your Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <input data-cy="login-password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br />
      <br />
      <button data-cy="login-submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
