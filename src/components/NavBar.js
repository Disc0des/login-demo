import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LightDarkToggle from "./LightDarkToggle";
import Context from "../utils/Context";

const NavBar = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const { mode } = useContext(Context);

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
    <div className={`navbar ${mode}`}>
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
