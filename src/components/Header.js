import React, { useEffect, useContext } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { StateContext } from "../context/StateProvider";
import { Link } from "react-router-dom";
import "../styles/components/header.scss";

function Header() {
  const [{ isDarkTheme }, dispatch] = useContext(StateContext);

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

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <div className="header__logo">adivrskic.dev</div>
        </Link>
        <nav className="header__nav">
          <ul>
            <Link to="/profile">
              <li>profile</li>
            </Link>
            <Link to="/work">
              <li>work</li>
            </Link>
            {/* <Link to="/games"><li>Games</li></Link> */}
            <Link to="/contact" className="header__button">
              <li c>contact</li>
            </Link>
            <li
              className="header__mode"
              onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            >
              {isDarkTheme ? <IoMoonOutline /> : <IoSunnyOutline />}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
