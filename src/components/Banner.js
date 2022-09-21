import React from "react";
import { scrollToAnchor } from "../helpers/helpers";
import { StateContext } from "../context/StateProvider";
import Socials from "./Socials";
import "../styles/components/banner.scss";

function Banner() {
  const [{ isDarkTheme }] = React.useContext(StateContext);

  return (
    <div id="banner" className="banner">
      <div className="banner__content">
        <h1 className="banner__content-heading">Adi Vrskic</h1>
        <p className="banner__content-subheading">
          React and eCommerce Developer
        </p>
        <p>
          I'm a software engineer specializing in front-end design and
          development with React, Shopify and Squarespace.
        </p>

        <div className="banner__socials">
          <Socials size="small" color="light" />
        </div>

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
