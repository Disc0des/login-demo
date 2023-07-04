import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LightDarkToggle from "./LightDarkToggle";

const NavBar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <div className="navbar">
      <LightDarkToggle />
      <ul clasName="nav-container">
        {links.map((link) => {
          return (
            <NavLink className="nav-link" to={link.path}>
              {link.name}
            </NavLink>
          );
        })}
        <button className="nav-button" onClick={handleOnClick}>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default NavBar;
