import React from "react";
import Scrollspy from "react-scrollspy";
import "../styles/components/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h2>Adi Vrskic</h2>
        <nav aria-label="Site navigation" role="navigation">
          <ul>
            <Scrollspy
              items={["profile", "work", "games", "contact"]}
              currentClassName="active"
              offset={-250}
            >
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#games">Games</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </Scrollspy>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
