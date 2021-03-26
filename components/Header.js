import React from "react";
import styles from "../styles/Header.module.scss";

export const Header = () => {
  return (
    <header className={`${styles.header} ${styles.shadow}`}>
      <nav className={styles.nav}>
        <h1 className={styles.nav__heading}>Adi Vrskic</h1>
        <ul className={styles.nav__links}>
          <li className={styles.nav__link}>
            <a className={styles.active} href="#">
              Home
            </a>
          </li>
          <li className={styles.nav__link}>
            <a href="#">Projects</a>
          </li>
          <li className={styles.nav__link}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
