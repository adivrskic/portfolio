import { React, useEffect, useState } from "react";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { MobileMenu } from "../components/MobileMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMenuOutline } from "react-icons/io5";
import styles from "../styles/layout/Header.module.scss";

export const Header = () => {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className={`${styles.header} ${styles.shadow}`}>
        <div className={styles.headerContainer}>
          <Link href="/">
            <h1 className={styles.nav__heading}>Adi Vrskic</h1>
          </Link>

          <div className={styles.mobile} onClick={() => toggleMobileMenu()}>
            <IoMenuOutline />
          </div>

          <nav className={styles.nav}>
            <ul className={styles.nav__links}>
              <li className={styles.nav__link}>
                <Link href="/">
                  <a className={router.asPath == "/" ? styles.active : ""}>
                    About
                  </a>
                </Link>
              </li>
              <li className={styles.nav__link}>
                <Link href="/projects">
                  <a
                    className={
                      router.asPath == "/projects" ? styles.active : ""
                    }
                  >
                    Projects
                  </a>
                </Link>
              </li>
              <li className={styles.nav__link}>
                <Link href="/contact">
                  <a
                    className={router.asPath == "/contact" ? styles.active : ""}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <ScrollIndicator />
      {mobileMenuOpen && <MobileMenu />}
    </>
  );
};
