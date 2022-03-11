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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [menuOpen]);

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
    <>
      <div className="mobile-header">
        <div className="mobile-header__logo">
          <div>a</div>
        </div>
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
      </div>
      <nav className={`mobile-header__nav ${menuOpen && "active"}`}>
        <ul>
          {nav.map((item) => (
            <li key={item.key}>
              <a href={item.link} onClick={() => scrollToAnchor(item.key)}>
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
    </>
  );
}

export default MobileHeader;
