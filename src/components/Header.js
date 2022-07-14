import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import GalleryContainer from "./GalleryContainer";
import { StateContext } from "../context/StateProvider";
import { pictures } from "../data/pictures";
import "../styles/components/header.scss";

function Header() {
  const [count, setCount] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
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

  console.log(imageVisible, count);

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
        <div className="header__logo" onClick={() => displayPicture(count)}>
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
