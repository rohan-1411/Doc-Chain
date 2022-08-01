import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import axios from 'axios'
const SignIn = () => { 
 const initialState = {
    uid: "",
    password: ""
  }
  const [user, setUser] = useState(initialState);
  const [uid, setUid] = useState();
  const [password, setPass] = useState();
  const login = async (formData) => {
    console.log(formData)
    await axios
      .post(`${process.env.REACT_APP_BACKEND_DOMAIN}/loginStudent`, formData)
      .then(function (response) {
        var d = response.data;
        if(d == 'Login Success') {
          setUid(d.uid);
          setPass(d.password) //user logged in and user's email saved in email
          
          window.location.href = "http://localhost:3001/student/dashboard";
        } else {
          alert('Login Failed');
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
      <Header />
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Student Login</h3>
                  <form onSubmit={handleSubmit} >
                    <label className="form-label" for="UID" >
                      UID:
                    </label>
                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="uid"
                            className="form-control form-control-lg"
                            name="uid"
                            onChange={handleChange}
                          />
                          <br/>
                        </div>
                        </div>
                      
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label" for="password" >
                              Password
                            </label>

                            <input
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                              name="password"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    

                    
                    <div className="mt-4 pt-2" align="center">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
