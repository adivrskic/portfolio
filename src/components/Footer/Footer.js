import React from "react";
import Socials from "../Socials";
import { scrollToAnchor } from "../../helpers/helpers";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span onClick={() => scrollToAnchor("top")}>Back to Top</span>
        <Socials size="small" margin="margin-sm" />
      </div>
    </footer>
  );
}

export default Footer;
