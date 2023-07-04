import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="container">
      <h2 className="h2">Reset Password</h2>
      <form className="form">
        <label htmlFor="email">Email</label>
        <input className="input" name="email" />
        <button className="button">Submit</button>
      </form>
      <p className="p">
        Know your details? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
