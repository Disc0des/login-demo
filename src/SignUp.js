import React from "react";

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
      <p>Already a member? <a href="/login">Log in</a></p>
    </div>
  );
};

export default SignUp;
