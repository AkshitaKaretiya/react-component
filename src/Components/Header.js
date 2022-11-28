import * as React from "react";
import { useState, useeffect } from "react";
import "./css/Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
      darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
      setDarkMode(!darkMode)
  };

  return (
    <header>
      <div className="theme-icon" onClick={toggleTheme}>
        <span></span>
      </div>
      <div className="user-profile"></div>
    </header>
  );
};

export default Header;
