import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
    axios
      .post(`${process.env.REACT_APP_API_HOST}/login`, user)
      .then((response) => {
        alert(response.data.message);
        setIsLoggedIn(response.data.loggedIn);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
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
          required={true}
          className="input"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Log In
        </button>
      </form>
      <p className="p">Not a member ? <Link to="/signup">Sign up!</Link></p>
    </div>
  );
};

export default Login;
