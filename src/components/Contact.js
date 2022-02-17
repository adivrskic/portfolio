import React from "react";
import { IoCodeWorking } from "react-icons/io5";
import "../styles/components/contact.scss";

function Contact() {
  return (
    <section id="contact" className="main-container">
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-content">
        <p>
          Don't be shy, email me if you have a cool website or game idea. <br />
          Let's make something cool together!
        </p>
        <a href="mailto:adivrskic123@gmail.com" className="button">
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
