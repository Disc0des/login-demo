import React from "react";
import css from "./NavBarStyles";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Gallery", to: "/gallery" },
  ];

  return (
    <ul style={css.container}>
      {links.map((link) => {
        return (
          <NavLink style={css.link} to={link.to}>
            {link.name}
          </NavLink>
        );
      })}
      <button style={css.button} onClick={handleOnClick}>Logout</button>
    </ul>
  );
};

export default NavBar;
