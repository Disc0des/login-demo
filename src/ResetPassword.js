import React from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  
  return (
    <div>
      <h2>Reset Password</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" />
        <button>Submit</button>
      </form>
      <p>
        Know your details? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
