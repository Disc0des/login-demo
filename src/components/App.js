import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import "../styles/Global.css";
import Login from "./Login";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Context from "../utils/Context"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState("light-mode");

  const value = {setMode, mode}
  return (
    <div className={`app ${mode}`}>
      <Router>
        <Context.Provider value={value}>
        {isLoggedIn && (
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        )}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
        </Context.Provider>
      </Router>
    </div>
  );
};
export default App;
