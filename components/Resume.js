import React from "react";
import styles from "../styles/components/Resume.module.scss";

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <h2 className={styles.heading}>Check out these important documents</h2>
      <p className={styles.subheading}>You won't regret it</p>
      <div className={styles.resume__links}>
        <a
          className={styles.resume__link}
          href="/static/documents/resume.pdf"
          download
        >
          Resume PDF
        </a>
        <a
          className={styles.resume__link}
          href="/static/documents/resume.docx"
          download
        >
          Resume Doc
        </a>
      </div>
    </div>
  );
};
