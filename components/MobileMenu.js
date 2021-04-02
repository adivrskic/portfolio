import React from "react";
import styles from "../styles/components/MobileMenu.module.scss";

export const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
  );
};
