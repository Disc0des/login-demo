import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <h2>Reset Password</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input name="email" />
        <button>Submit</button>
      </form>
      <p>Know your details? <a href="/login">Log in</a></p>
    </div>
  );
};

export default ResetPassword;
