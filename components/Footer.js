import React from "react";
import styles from "../styles/Footer.module.scss";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <small>&copy; Copyright 2021, Adi Vrskic</small>
        <div>
          <ul className={styles.footer__links}>
            <li className={styles.footer__link}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/adi-vrskic-48758213b/"
                rel="noopener noreferrer"
              >
                <IoLogoLinkedin className={styles.linkedin} />
              </a>
            </li>
            <li className={styles.footer__link}>
              <a
                target="_blank"
                href="https://github.com/adivrskic"
                rel="noopener noreferrer"
              >
                <IoLogoGithub className={styles.github} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
