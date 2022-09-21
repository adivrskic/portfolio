import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import GalleryContainer from "./GalleryContainer";
import { StateContext } from "../context/StateProvider";
import { pictures } from "../data/pictures";
import { Link } from "react-router-dom";
import "../styles/components/header.scss";

function Header() {
  const [{ isDarkTheme }, dispatch] = React.useContext(StateContext);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.remove("lightmode");
      document.getElementById("favicon").href = "/favicon.ico";
    } else {
      document.body.classList.add("lightmode");
      document.getElementById("favicon").href = "/favicon-lightmode.ico";
    }

    localStorage.setItem("IS_DARK_THEME", isDarkTheme);
  }, [isDarkTheme]);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <div className="header__logo">adivrskic.dev</div>
        </Link>
        <nav className="header__nav">
          <ul>
            <Link to="/profile">
              <li>Profile</li>
            </Link>
            <Link to="/work">
              <li>Work</li>
            </Link>
            {/* <Link to="/games"><li>Games</li></Link> */}
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <li
              className="header__mode"
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            >
              {isDarkTheme ? (
                <IoMoonOutline style={{ stroke: "url(#gradient)" }} />
              ) : (
                <IoSunnyOutline style={{ stroke: "url(#gradient)" }} />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
