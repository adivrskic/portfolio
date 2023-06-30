import React, { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import GalleryContainer from "../GalleryContainer";
import { scrollToAnchor } from "../../helpers/helpers";
import { pictures } from "../../data/pictures";
import Socials from "../Socials";

import "./header.scss";

function Header() {
  const [count, setCount] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const displayPicture = () => {
    setCount(count + 1);
    if (count >= 5) {
      setImageVisible(true);
    }
  };

  const resetPicture = () => {
    setCount(0);
    setImageVisible(false);
  };

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <div className={`image ${imageVisible ? "image-visible" : ""}`}>
        {imageVisible && (
          <GalleryContainer
            galleryImages={pictures.gallery}
            isOpen={true}
            onClose={() => {
              resetPicture();
            }}
          />
        )}
      </div>
      <div className="header__content">
        <div className="header__logo" onClick={() => scrollToAnchor("top")}>
          adivrŠkiĆ
        </div>
        <div className="header__buttons">
          <a href="/assets/AdiVrskicResume.pdf" download>
            Resume
          </a>
          <button className="button" onClick={() => scrollToAnchor("contact")}>
            Contact Me
          </button>
        </div>
        <div className="header__mobile" onClick={() => toggleMobileMenu()}>
          <IoMenuOutline />
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="/assets/AdiVrskicResume.pdf" download>
          Resume
        </a>

        <Socials size="small" color="light" />
      </div>
    </header>
  );
}

export default Header;
