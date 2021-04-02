import React from "react";
import { Bubble } from "../components/Bubble";
import styles from "../styles/components/Resume.module.scss";

export const Resume = () => {
  return (
    <div className={styles.resume}>
      <h2 className={styles.heading}>Check out these important documents</h2>
      <div className={styles.resume__links}>
        <Bubble
          icon="IoReaderOutline"
          backgroundColor="#778da9"
          color="#fff"
          caption="Resume PDF"
          link={"/static/documents/resume.pdf"}
          download
        />
        <Bubble
          icon="IoDocumentText"
          backgroundColor="#778da9"
          color="#fff"
          caption="Resume Docx"
          link={"/static/documents/resume.docx"}
          download
        />
      </div>
    </div>
  );
};
