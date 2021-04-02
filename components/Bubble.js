import React from "react";
import {
  IoPhonePortraitOutline,
  IoMailOutline,
  IoLogoLinkedin,
  IoDocumentText,
  IoReaderOutline,
} from "react-icons/io5";
import styles from "../styles/components/Bubble.module.scss";

export const Bubble = ({ icon, color, backgroundColor, caption, link }) => {
  return (
    <div className={styles.bubbleContainer}>
      <a
        href={link}
        className={styles.bubble}
        style={{ backgroundColor }}
        target="_blank"
        download
      >
        {icon === "IoPhonePortraitOutline" && (
          <IoPhonePortraitOutline style={{ color }} />
        )}
        {icon === "IoMailOutline" && <IoMailOutline style={{ color }} />}
        {icon === "IoLogoLinkedin" && <IoLogoLinkedin style={{ color }} />}
        {icon === "IoDocumentText" && <IoDocumentText style={{ color }} />}
        {icon === "IoReaderOutline" && <IoReaderOutline style={{ color }} />}
      </a>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
};
