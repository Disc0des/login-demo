import React from "react";
import { Link } from "react-router-dom";
import {
  StyledContainer,
  StyledH2,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledP,
} from "./StyledComponents";

const SignUp = () => {
  return (
    <StyledContainer>
      <StyledH2>Sign Up</StyledH2>
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledInput name="name" />
        <label htmlFor="surname">Surname</label>
        <StyledInput name="surname" />
        <label htmlFor="email">Email</label>
        <StyledInput name="email" />
        <StyledButton>Submit</StyledButton>
      </StyledForm>
      <StyledP>
        Already a member? <Link to="/login">Log in</Link>
      </StyledP>
    </StyledContainer>
  );
};

export default SignUp;
