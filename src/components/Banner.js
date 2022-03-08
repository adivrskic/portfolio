import React from "react";
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
        <h2>eCommerce + React Development</h2>
        <p>
          I'm a software engineer with a passion for front-end development, and
          with experience designing and developing eCommerce websites with
          React, Shopify and Squarespace.
        </p>
        <a className="button" href="mailto:adivrskic123@gmail.com">
          Let's work together
        </a>
      </div>
    </div>
  );
}

export default Banner;
