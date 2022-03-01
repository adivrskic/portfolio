import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { nav } from "../data/nav";
import "../styles/components/mobileheader.scss";

function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      </nav>
    </div>
  );
}

export default MobileHeader;
