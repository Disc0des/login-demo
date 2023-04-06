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

const ResetPassword = () => {
  return (
    <StyledContainer>
      <StyledH2>Reset Password</StyledH2>
      <StyledForm>
        <label htmlFor="email">Email</label>
        <StyledInput name="email" />
        <StyledButton>Submit</StyledButton>
      </StyledForm>
      <StyledP>
        Know your details? <Link to="/login">Log in</Link>
      </StyledP>
    </StyledContainer>
  );
};

export default ResetPassword;
