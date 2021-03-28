import React from "react";
import styles from "../styles/components/SkillCard.module.scss";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoVue,
  IoLogoElectron,
  IoLogoPython,
  IoLogoNodejs,
  IoLogoFirebase,
} from "react-icons/io5";

export const SkillCard = ({
  idx,
  color,
  icon,
  heading,
  subheading,
  progress,
}) => {
  return (
    <div className={styles.skillcard}>
      <div
        className={styles.skillcard__color}
        style={{ backgroundColor: color }}
      >
        <div className={styles.skillcard__logo}>
          {/* Todo: Clean this... */}
          {icon === "IoLogoHtml5" ? <IoLogoHtml5 /> : null}
          {icon === "IoLogoCss3" ? <IoLogoCss3 /> : null}
          {icon === "IoLogoSass" ? <IoLogoSass /> : null}
          {icon === "IoLogoJavascript" ? <IoLogoJavascript /> : null}
          {icon === "IoLogoReact" ? <IoLogoReact /> : null}
          {icon === "IoLogoVue" ? <IoLogoVue /> : null}
          {icon === "IoLogoElectron" ? <IoLogoElectron /> : null}
          {icon === "IoLogoPython" ? <IoLogoPython /> : null}
          {icon === "IoLogoNodejs" ? <IoLogoNodejs /> : null}
          {icon === "IoLogoFirebase" ? <IoLogoFirebase /> : null}
        </div>
      </div>
      <div className={styles.skillcard__content}>
        <h3 className={styles.skillcard__heading}>{heading}</h3>
        <p className={styles.skillcard__subheading}>{subheading}</p>
        <div
          className={styles.skillcard__progress}
          style={{ maxWidth: `${progress}%`, animationDelay: `${0.25 * idx}s` }}
        ></div>
      </div>
    </div>
  );
};
