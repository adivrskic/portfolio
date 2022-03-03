import React, { useEffect } from "react";
import Scrollspy from "react-scrollspy";
import { nav } from "../data/nav";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { StateContext } from "../context/StateProvider";
import "../styles/components/header.scss";

function Header() {
  const [{ isDarkTheme }, dispatch] = React.useContext(StateContext);

  useEffect(() => {
    if (!isDarkTheme) {
      document.body.classList.add("lightmode");
    } else {
      document.body.classList.remove("lightmode");
    }
  }, [isDarkTheme]);

  // Doesn't work on Chrome??
  const scrollToAnchor = (anchor) => {
    const section = document.getElementById(anchor);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  };

  return (
    <header className="header">
      <div className="header__content">
        <h2>Adi Vrskic</h2>
        <div className="header__nav-container">
          <nav aria-label="Site navigation" role="navigation">
            <ul>
              <Scrollspy
                items={nav.map((item) => item.key)}
                currentClassName="active"
                offset={-250}
              >
                {nav.map((item) => (
                  <li>
                    <a
                      href={item.link}
                      onClick={() => scrollToAnchor(item.link)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </Scrollspy>
            </ul>
          </nav>
          <div
            className="header__mode"
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
          >
            {isDarkTheme ? <IoMoonOutline /> : <IoSunnyOutline />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
