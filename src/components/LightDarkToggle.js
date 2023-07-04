import React from "react";

const LightDarkToggle = () => {
  return (
    <div className="toggle">
      <input className="input" name="toggle" type="checkbox" />
      <label className="label" htmlFor="toggle">Dark Mode</label>
    </div>
  );
};

export default LightDarkToggle;
