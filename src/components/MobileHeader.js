import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
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
          <li>
            <a href="#profile" onClick={() => toggleMenu()}>
              Profile
            </a>
          </li>
          <li>
            <a href="#work" onClick={() => toggleMenu()}>
              Work
            </a>
          </li>
          <li>
            <a href="#games" onClick={() => toggleMenu()}>
              Games
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => toggleMenu()}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileHeader;
