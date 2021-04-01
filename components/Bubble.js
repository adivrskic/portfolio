import React from "react";
import {
  IoPhonePortraitOutline,
  IoMailOutline,
  IoLogoLinkedin,
} from "react-icons/io5";
import styles from "../styles/components/Bubble.module.scss";

export const Bubble = ({ icon, color, backgroundColor }) => {
  return (
    <div className={styles.bubble} style={{ backgroundColor }}>
      {icon === "IoPhonePortraitOutline" && (
        <IoPhonePortraitOutline style={{ color }} />
      )}
      {icon === "IoMailOutline" && <IoMailOutline style={{ color }} />}
      {icon === "IoLogoLinkedin" && <IoLogoLinkedin style={{ color }} />}
    </div>
  );
};
