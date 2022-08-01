import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Components/LogReg/SignIn";
import SignUp from "./Components/LogReg/SignUp";
import ASignIn from "./Components/LogReg/ASignIn";
import Home from "./Components/Pages/Home";
import CompanySignIn from "./Components/LogReg/CompanySignIn";
import CompanySignUp from "./Components/LogReg/CompanySignUp";




const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/ASignIn" element={<ASignIn />} />
          <Route path="/companySignIn" element={<CompanySignIn />} />
          <Route path="/companySignUp" element={<CompanySignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
