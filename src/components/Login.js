import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h2 className="h2">Login</h2>
      
      <p className="p">
        Not a member? <Link to="/sign-up">Sign Up</Link> here
      </p>
      <p className="p">
        Forgot password? <Link to="/reset-password">Reset here</Link>
      </p>
    </div>
  );
};

export default Login;
