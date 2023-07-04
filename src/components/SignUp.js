import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <h2 className="h2">Sign Up</h2>
      <form className="form">
        <label htmlFor="name">Name</label>
        <input className="input" name="name" />
        <label htmlFor="surname">Surname</label>
        <input className="input" name="surname" />
        <label htmlFor="email">Email</label>
        <input className="input" name="email" />
        <button className="button">Submit</button>
      </form>
      <p className="p">
        Already a member? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
