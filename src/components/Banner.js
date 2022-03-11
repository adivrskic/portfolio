import React from "react";
import { scrollToAnchor } from "../helpers/helpers";
import { StateContext } from "../context/StateProvider";

import "../styles/components/banner.scss";

function Banner() {
  const [{ isDarkTheme }] = React.useContext(StateContext);

  return (
    <div id="banner" className="banner">
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop stopColor={isDarkTheme ? "#1ddecb" : "#1793ff"} offset="0%" />
          <stop stopColor={isDarkTheme ? "#2ebacd" : "#762ecd"} offset="100%" />
        </linearGradient>
      </svg>
      <div className="banner__content">
        <h1 className="banner__content-heading">Adi Vrskic</h1>
        <h2 className="banner__content-subheading">
          React and eCommerce Developer
        </h2>
        <p>
          I'm a software engineer with a passion for front-end development, and
          with experience designing and developing eCommerce websites with
          React, Shopify and Squarespace.
        </p>
        {/* <Socials size="sm" /> */}
        <div className="banner__buttons">
          <button className="button" onClick={() => scrollToAnchor("profile")}>
            Learn More
          </button>
          <a className="button" href="mailto:adivrskic123@gmail.com">
            Let's work together
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
