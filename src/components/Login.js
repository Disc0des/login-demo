import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateUser } from "../utils/validateLogin";

const Login = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUser(user)) {
      alert("Logged in");
      setIsLoggedIn(true);
      navigate("/")
    } else {
      alert("Invalid username or password");
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="container">
      <h2 className="h2">Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          className="input"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="input"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Log In
        </button>
      </form>
      <p className="p">
        Not a member ? <Link to="/signup">Sign up!</Link>
      </p>
    </div>
  );
};

export default Login;
