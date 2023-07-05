import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import "../styles/Global.css";
import Login from "./Login";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Context from "../utils/Context"
import { data } from "../utils/data";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState("light-mode");
  const [users, setUsers] = useState(data)

  const value = {setMode, mode, users, setUsers}
  
  return (
    <div className={`app ${mode}`}>
      <Router>
        <Context.Provider value={value}>
        {isLoggedIn && (
          <Navbar setIsLoggedIn={setIsLoggedIn} />
        )}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
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
