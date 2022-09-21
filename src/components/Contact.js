import React from "react";
import "../styles/components/contact.scss";

function Contact() {
  return (
    <section id="contact" className="main-container theme-bg">
      <div className="contact-content">
        <p>
          Don't be shy, email me if you have a cool website or game idea. <br />
          Let's make something amazing together!
        </p>
        <a href="mailto:adivrskic123@gmail.com" className="button">
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;

{
  /* 

<div className="profile-content__resume">
<a
  className={`button ${isDarkTheme ? "dark" : "light"}`}
  href="/docs/AdiVrskicResume.pdf"
  download
>
  Download Resume PDF
</a>
<a
  className={`button ${isDarkTheme ? "dark" : "light"}`}
  href="/docs/AdiVrskicResume.doc"
  download
>
  Download Resume Doc
</a>
</div> */
}
