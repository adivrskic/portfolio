import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

export const Header = () => {
  return (
    <header className={`${styles.header} ${styles.shadow}`}>
      <nav className={styles.nav}>
        <h1 className={styles.nav__heading}>Adi Vrskic</h1>
        <ul className={styles.nav__links}>
          <li className={styles.nav__link}>
            <Link href="/">
              <a className={styles.active}>Home</a>
            </Link>
          </li>
          <li className={styles.nav__link}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className={styles.nav__link}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
