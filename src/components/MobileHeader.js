import React, { useState, useEffect } from "react";
import {
  IoMenu,
  IoClose,
  IoSunnyOutline,
  IoMoonOutline,
} from "react-icons/io5";
import { nav } from "../data/nav";
import { StateContext } from "../context/StateProvider";

import "../styles/components/mobileheader.scss";

function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [{ isDarkTheme }, dispatch] = React.useContext(StateContext);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.remove("lightmode");
    } else {
      document.body.classList.add("lightmode");
    }

    localStorage.setItem("IS_DARK_THEME", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="mobile-header">
      <h1>Adi Vrskic</h1>
      <div className="mobile-header__icon">
        {menuOpen ? (
          <IoClose onClick={() => toggleMenu()} />
        ) : (
          <IoMenu onClick={() => toggleMenu()} />
        )}
      </div>
      <nav className={`mobile-header__nav ${menuOpen && "active"}`}>
        <ul>
          {nav.map((item) => (
            <li key={item.key}>
              <a href={item.link} onClick={() => toggleMenu()}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="mobile-header__mode"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {isDarkTheme ? <IoMoonOutline /> : <IoSunnyOutline />}
        </div>
      </nav>
    </div>
  );
}

export default MobileHeader;
