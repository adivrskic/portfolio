import React, { useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { StateContext } from "../context/StateProvider";
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
        <div className="header__logo" onClick={() => scrollTop()}>
          <div>a</div>
        </div>
        <div className="header__nav-container">
          <div
            className="header__mode"
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          >
            {isDarkTheme ? (
              <IoMoonOutline style={{ stroke: "url(#gradient)" }} />
            ) : (
              <IoSunnyOutline style={{ stroke: "url(#gradient)" }} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
