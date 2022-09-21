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
        <h1 className="banner__content-heading">adi vrskic</h1>
        <p className="banner__content-subheading">
          react and ecommerce developer
        </p>
        <p className="banner__content-subheading">
          i'm a software engineer specializing in front-end design and
          development with react, shopify and squarespace.
        </p>

        <div className="banner__socials">
          <Socials size="small" color="light" />
        </div>

        <div className="banner__buttons">
          <button className="button" onClick={() => scrollToAnchor("profile")}>
            learn more
          </button>
          <a className="button" href="mailto:adivrskic123@gmail.com">
            let's work together
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
