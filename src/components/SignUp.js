import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_HOST}/users`, newUser)
      .then((response) => {
        console.log(response);
        alert(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="container">
      <h2 className="h2">Sign Up</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="username">
          Username
        </label>
        <input
          onChange={handleChange}
          value={newUser.username}
          className="input"
          name="username"
        />
        <label className="label" htmlFor="password">
          Paswword
        </label>
        <input
          type="password"
          required={true}
          onChange={handleChange}
          value={newUser.password}
          className="input"
          name="password"
        />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          onChange={handleChange}
          value={newUser.email}
          className="input"
          name="email"
        />
        <button className="button">Submit</button>
      </form>
      <p className="p">Already a member ? <Link to="/login">Log in</Link></p>
    </div>
  );
};

export default SignUp;
