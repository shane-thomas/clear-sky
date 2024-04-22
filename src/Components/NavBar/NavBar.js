import React from "react";
import "./NavBar.css";
import toggle_dark from "../../assets/dark.png";
import toggle_light from "../../assets/light.png";

function NavBar({ theme, setTheme }) {
  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <div className={`navbar ${theme}`}>
        <img src="" alt="logo" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <img
          onClick={() => {
            toggle_mode();
          }}
          src={theme === "light" ? toggle_dark : toggle_light}
          alt="dark-mode-on"
          className="theme"
        />
      </div>
    </>
  );
}
export default NavBar;
