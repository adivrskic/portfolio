import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoSteam,
  IoMail,
  IoLogoReact,
} from "react-icons/io5";
import "../styles/components/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#top">Back to Top</a>
        <div className="social-links">
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
          <a
            className="social-link"
            target="_blank"
            rel="noreferrer"
            href="/steam"
            aria-label="Steam"
          >
            <IoLogoSteam />
          </a>
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
        <p>
          Created with <IoLogoReact />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
