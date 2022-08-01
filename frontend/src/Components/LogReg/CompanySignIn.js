import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import "./asignin.css";
import axios from 'axios'
  const CompanySignIn = () => {
    const initialState = {
      code: "",
      password: ""
    }
    const [user, setUser] = useState(initialState);
    const [code, setCode] = useState();
    const [password, setPass] = useState();
    const login = async (formData) => {
      console.log(formData)
      await axios
        .post(`${process.env.REACT_APP_BACKEND_DOMAIN}loginCompany`, formData)
        .then(function (response) {
          var d = response.data;
          setCode(d.code);
          setPass(d.password) 
          console.log(d);
          if(d == 'Login Success') {
            window.location.href = "http://localhost:3001/company/dashboard"
          } else {
            alert('Login Failed!')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      e.target.reset();
      let formData = user;
      setUser(initialState);
      login(formData);
    }
    
    const handleChange = (e) => {
      console.log(user)
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
  return ( 
    <>
    <Header/>
      <div className="parent clearfix">
    <div className="bg-illustration">
      <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo"/>

      <div className="burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
    
    <div className="login">
      <div className="container">
        <h1>   Company Login </h1>
    
        <div className="login-form">
          <form action="" onSubmit={handleSubmit}>
            <input type="text" name="code" onChange={handleChange} placeholder="Company Code"/>
            <input type="password" name="password" onChange={handleChange} placeholder="Password"/>

           
            <div className="forget-pass">
              <a href="#">Forgot Password ?</a>
            </div>

            <button type="submit">LOG-IN</button>

          </form>
        </div>
    
      </div>
      </div>
  </div> 
    
    </>
  );
};

export default CompanySignIn;
