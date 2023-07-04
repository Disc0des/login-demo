import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/Global.css";

//* Component Imports
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import ResetPassword from "./ResetPassword";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="login" element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
};
export default App;
