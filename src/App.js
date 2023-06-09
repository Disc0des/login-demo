import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//* Component Imports
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import ResetPassword from "./ResetPassword";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn && <NavBar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
};
export default App;
