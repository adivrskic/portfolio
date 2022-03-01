import React from "react";
import Scrollspy from "react-scrollspy";
import { nav } from "../data/nav";
import "../styles/components/header.scss";

function Header() {
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
        <nav aria-label="Site navigation" role="navigation">
          <ul>
            <Scrollspy
              items={nav.map((item) => item.key)}
              currentClassName="active"
              offset={-250}
            >
              {nav.map((item) => (
                <li>
                  <a href={item.link} onClick={() => scrollToAnchor(item.link)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </Scrollspy>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
