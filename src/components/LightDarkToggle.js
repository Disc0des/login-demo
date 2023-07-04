import React, { useContext } from "react";
import Context from "../utils/Context";

const LightDarkToggle = () => {
  const { setMode } = useContext(Context);

  const handleCheck = (event) => {
    if (event.target.checked) {
      setMode("dark-mode");
    } else {
      setMode("light-mode");
    }
  };
  return (
    <div className="toggle">
      <input
        className="input"
        name="toggle"
        type="checkbox"
        onChange={handleCheck}
      />
      <label className="label" htmlFor="toggle">
        Dark Mode
      </label>
    </div>
  );
};

export default LightDarkToggle;
