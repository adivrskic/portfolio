import React from "react";
import "../styles/components/banner.scss";

function Banner() {
  return (
    <div id="banner" className="banner">
      <div className="banner__content">
        <h2>eCommerce Development Specialist</h2>
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
