import React from "react";
import reactLogo from "../Images/react-logo.png";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className="logo-container">
        <img src={reactLogo} alt="React-logo" className="logo-img" />
        <h2 className="logo">React Facts</h2>
      </div>
      <div className="slider-container">
        <span className={props.darkMode?"light":" "}>Light</span>
        <label className="switch">
          <input
            className="toggleBar"
            type="checkbox"
            name="toggle"
            onChange={props.toggleDarkMode}
            checked={props.darkMode}
          />
          <span className="slider round"></span>
        </label>
        <span className={props.darkMode?"":"dark"}>Dark</span>
      </div>
    </nav>
  );
}
