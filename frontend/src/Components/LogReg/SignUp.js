import React from "react";
import "./LogReg.css";
import "./tagsinput.css";
import "./bootstrap.css";
import Header from "../Header/Header";
import axios from 'axios'
import { useState } from "react";

const SignUp = () => { 
  const initialState = {
     name:"",
     code:"",
     email: "",
     password: ""
   }
   const [user, setUser] = useState(initialState);
   const [name, setName] = useState();
   const [code, setCode] = useState();
   const [email, setEmail] = useState();
   const [password, setPass] = useState();
   const register = async (formData) => {
     console.log(formData)
     await axios
       .post(`${process.env.REACT_APP_BACKEND_DOMAIN}registerInstitute`, formData)
       .then(function (response) {
         var d = response.data;
         setName(d.name);
         setEmail(d.email);
         setPass(d.password)
         setCode(d.code) 
         console.log(d);
         if(d=='Sign Up Success') {
           window.location.href='http://localhost:3000/ASignIn'
         } else {
           alert(d);
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
     register(formData);
   }
   
   const handleChangeName = (e) => {
     console.log(user)
     setUser({ ...user, [e.target.name]: e.target.value });
   };
 
  
  
 

  return (
    <>
      <Header />
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Registration Form
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="fullname"
                            className="form-control form-control-lg"
                            name="name"
                            onChange={handleChangeName}
                          />
                          <label className="form-label" for="fullname">
                            Institute Name
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="code"
                            className="form-control form-control-lg"
                            name="code"
                            onChange={handleChangeName}
                          />
                          <label className="form-label" for="fullname">
                            Institiute Code
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            onChange={handleChangeName}
                          />
                          <label for="email" className="form-label">
                            Email/Website
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            onChange={handleChangeName}
                          />
                          <label className="form-label" for="password">
                            Password
                          </label>
                        </div>
                      </div>
                      </div>

                     <div className="text-center fs-10">
                      {" "}
                      <a href="/ASignIn">Already Have an Account</a> ?{"  "}
                      <a href="/ASignIn">Login</a>{" "}
                    </div>
                    <div className="mt-4 pt-2">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="SIGN UP"
                        align="center"
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
export default SignUp;
