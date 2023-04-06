import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
`;

export const StyledContainer = styled.div`
  border-radius: 10px;
  margin-top: 6rem;
  min-width: 20rem;
  max-width: 30rem;
  background-color: rgba(251, 248, 248, 0.8);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const StyledH2 = styled.h2`
  min-width: 15rem;
  width: 100%;
  height: 4rem;
  color: var(--third);
  background-image: linear-gradient(blue, aqua);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
  padding: 1rem 0;
  font-size: 2em;
  margin-bottom: 1rem;
  text-align: center;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid black;
  height: 2rem;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 2rem;
  & > label {
    align-self: flex-start;
    font-size: 0.8em;
  }
`

export const StyledButton = styled.button`
  width: 102%;
  height: 2.5rem;
  margin-top: 1rem;
  color: var(--third);
  background-color: var(--primary);
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1em;
  transition: ease-in-out all 0.1s;
  transform: scale(1);
  &:hover {
    background-color: var(--third);
    color: var(--primary);
    border: solid var(--primary) 2px;
  }
  &:active {
    transform: scale(0.8);
  }
`;

export const StyledP = styled.p`
  margin: 0 0 0.5rem 2rem;
`
