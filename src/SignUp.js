import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input name="name" />
        <label htmlFor="surname">Surname</label>
        <input name="surname" />
        <label htmlFor="email">Email</label>
        <input name="email" />
        <button>Submit</button>
      </form>
      <p>
        Already a member? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
