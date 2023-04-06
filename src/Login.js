import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  StyledContainer,
  StyledH2,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledP,
} from "./StyledComponents";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <StyledContainer>
      <StyledH2>Login</StyledH2>
      <StyledForm>
        <label htmlFor="username">Username</label>
        <StyledInput name="username" />
        <label htmlFor="password">Password</label>
        <StyledInput name="password" />
        <StyledButton onClick={handleOnClick}>Submit</StyledButton>
      </StyledForm>
      <StyledP>
        Not a member? <Link to="/sign-up">Sign Up</Link> here
      </StyledP>
      <StyledP>
        Forgot password? <Link to="/reset-password">Reset here</Link>
      </StyledP>
    </StyledContainer>
  );
};

export default Login;
