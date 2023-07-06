import React from "react";
import { scrollToAnchor } from "../../helpers/helpers";
import Socials from "../Socials";
import "./banner.scss";

function Banner() {
  return (
    <div id="banner" className="banner">
      <i id="top" />
      <div className="banner__content">
        <h1 className="banner__content-heading">React & eCommerce Developer</h1>
        <p className="banner__content-subheading">
          Hello! I'm an ecommerce website developer specializing in Shopify,
          Squarespace, and React. I'm passionate about crafting visually
          appealing and user-friendly online stores. With my industry expertise
          in these platforms, I can create a stunning website that aligns with
          your business goals. Let's elevate your online presence!
        </p>

        <div className="banner__content-buttons">
          <button className="button" onClick={() => scrollToAnchor("work")}>
            View Projects
          </button>
          <button className="button" onClick={() => scrollToAnchor("contact")}>
            Let's work together
          </button>
        </div>
        <div className="banner__content-socials">
          <Socials size="small" color="light" />
        </div>
      </div>
      <img
        className="banner__background"
        src="/images/test.jpg"
        alt="geometric green background"
      />
      <div className="banner__background-fade"></div>
    </div>
  );
}

export default Banner;
