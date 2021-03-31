import React, { useState, useEffect } from "react";
import styles from "../styles/components/ScrollIndicator.module.scss";

export const ScrollIndicator = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollAmount(scrolled);
    };
  }, []);

  const getVerticalScrollPercentage = () => {
    return (
      (window.scrollTop / (window.scrollHeight - window.clientHeight)) * 100
    );
  };

  return (
    <div className={styles.progress}>
      <div
        className={styles.progress__bar}
        style={{ width: `${scrollAmount}%` }}
      ></div>
    </div>
  );
};
