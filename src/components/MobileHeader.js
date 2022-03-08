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

  const scrollToAnchor = (anchor) => {
    const scrollDistance =
      document.getElementById(anchor).getBoundingClientRect().top +
      window.scrollY;

    window.scroll({
      top: scrollDistance,
      behavior: "smooth",
    });

    toggleMenu();
  };

  return (
    <div className="mobile-header">
      <h1>Adi Vrskic</h1>
      <div className="mobile-header__icon">
        {menuOpen ? (
          <IoClose
            onClick={() => toggleMenu()}
            style={{ stroke: "url(#gradient)", fill: "url(#gradient)" }}
          />
        ) : (
          <IoMenu
            onClick={() => toggleMenu()}
            style={{ stroke: "url(#gradient)" }}
          />
        )}
      </div>
      <nav className={`mobile-header__nav ${menuOpen && "active"}`}>
        <ul>
          {nav.map((item) => (
            <li key={item.key}>
              <a href={item.link} onClick={() => scrollToAnchor(item.link)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="mobile-header__mode"
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {isDarkTheme ? (
            <IoMoonOutline style={{ stroke: "url(#gradient)" }} />
          ) : (
            <IoSunnyOutline style={{ stroke: "url(#gradient)" }} />
          )}
        </div>
      </nav>
    </div>
  );
}

export default MobileHeader;
