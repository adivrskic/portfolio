import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.scss";

export const Header = () => {
  const router = useRouter();

  return (
    <header className={`${styles.header} ${styles.shadow}`}>
      <nav className={styles.nav}>
        <Link href="/">
          <h1 className={styles.nav__heading}>Adi Vrskic</h1>
        </Link>

        <ul className={styles.nav__links}>
          <li className={styles.nav__link}>
            <Link href="/">
              <a className={router.asPath == "/" ? styles.active : ""}>About</a>
            </Link>
          </li>
          <li className={styles.nav__link}>
            <Link href="/projects">
              <a className={router.asPath == "/projects" ? styles.active : ""}>
                Projects
              </a>
            </Link>
          </li>
          <li className={styles.nav__link}>
            <Link href="/contact">
              <a className={router.asPath == "/contact" ? styles.active : ""}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
