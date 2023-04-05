import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  
  const handleOnClick = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input name="username" />
        <label htmlFor="password">Password</label>
        <input name="password" />
        <button onClick={handleOnClick}>Submit</button>
      </form>
      <p>
        Not a member? <a href="/sign-up">Sign Up</a> here
      </p>
      <p>
        Forgot password? <a href="/reset-password">Reset here</a>
      </p>
    </div>
  );
};

export default Login;
