import React from "react";
import { useNavigate, Link } from "react-router-dom";

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
        Not a member? <Link to="/sign-up">Sign Up</Link> here
      </p>
      <p>
        Forgot password? <Link to="/reset-password">Reset here</Link>
      </p>
    </div>
  );
};

export default Login;
