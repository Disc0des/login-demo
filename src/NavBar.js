import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <NavLink end to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  );
};

export default NavBar;
