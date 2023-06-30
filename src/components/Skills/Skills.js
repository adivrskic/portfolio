import React from "react";
import { skills } from "../../data/skills";
import "./skills.scss";

function Profile() {
  const mobileWidth = 767;

  const renderSkills = () => {
    return (
      <section id="skills" className="skills">
        {skills.map((skill, index) => (
          <div key={skill.id} className="skills__item">
            {skill.icon}
            <div className="skills__item-content">
              <h3 className="skills__item-header">{skill.displayText}</h3>
              <p className="skills__item-subheader">{skill.displaySubtext}</p>
            </div>
          </div>
        ))}
      </section>
    );
  };

  const renderSkillsMobile = () => {
    return (
      <section id="skills" className="skills">
        {skills.slice(0, 8).map((skill, index) => (
          <div key={skill.id} className="skills__item">
            {skill.icon}
            <div className="skills__item-content">
              <h3 className="skills__item-header">{skill.displayText}</h3>
              <p className="skills__item-subheader">{skill.displaySubtext}</p>
            </div>
          </div>
        ))}
      </section>
    );
  };

  const renderRemainingSkills = () => {};

  return window.innerWidth <= mobileWidth
    ? renderSkillsMobile()
    : renderSkills();
}

export default Profile;
