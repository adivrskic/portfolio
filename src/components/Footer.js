import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoSteam,
  IoMail,
  IoLogoReact,
} from "react-icons/io5";
import Socials from "./Socials";
import "../styles/components/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#top">Back to Top</a>
        <Socials size="small" margin="margin-sm" />
        <div className="resume">
          <a href="/docs/AdiVrskicResume.pdf" download>
            Resume PDF
          </a>
          <a href="/docs/AdiVrskicResume.doc" download>
            Resume Doc
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
