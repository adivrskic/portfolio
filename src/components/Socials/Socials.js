import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import "./socials.scss";

function Socials({ size, color, margin }) {
  return (
    <div className={`social-links ${size} ${color} ${margin}`}>
      <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/adivrskic"
        aria-label="GitHub"
      >
        <IoLogoGithub />
      </a>
      <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/adi-vrskic-48758213b/"
        aria-label="LinkedIn"
      >
        <IoLogoLinkedin />
      </a>
    </div>
  );
}

export default Socials;
