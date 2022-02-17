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
          <a className="social-link" href="https://github.com/adivrskic">
            <IoLogoGithub />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/adi-vrskic-48758213b/"
          >
            <IoLogoLinkedin />
          </a>
          <a className="social-link" href="/">
            <IoLogoSteam />
          </a>
          <a className="social-link" href="mailto:adivrskic123@gmail.com">
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
