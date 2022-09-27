import React from "react";
import Socials from "./Socials";
import { Link } from "react-router-dom";
import "../styles/components/banner.scss";

function Banner() {
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
          <Link to="/skills">
            <button className="button">learn more</button>
          </Link>
          <a className="button" href="mailto:adivrskic123@gmail.com">
            let's work together
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
