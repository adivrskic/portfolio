import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoSteam,
  IoMail,
} from "react-icons/io5";
import "../styles/components/socials.scss";

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
      {/* <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="/steam"
        aria-label="Steam"
      >
        <IoLogoSteam />
      </a> */}
      <a
        className="social-link"
        target="_blank"
        rel="noreferrer"
        href="mailto:adivrskic123@gmail.com"
        aria-label="EMail"
      >
        <IoMail />
      </a>
    </div>
  );
}

export default Socials;
