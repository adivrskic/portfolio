import React from "react";
import Stat from "../components/Stat";
import Tooltip from "../components/Tooltip";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoElectron,
  IoLogoPython,
  IoLogoReact,
} from "react-icons/io5";
import { stats } from "../data/stats";
import "../styles/components/profile.scss";

function Profile() {
  return (
    <section id="profile" className="main-container">
      <h2>Profile</h2>
      <div className="profile-content">
        <div class="profile-content__info">
          <img
            className="profile-content__image"
            src="images/selfie.jfif"
            alt="Headshot of Adi Vrskic"
          />
          <p>
            Several years of front and back end development experience building
            and enhancing both large and small scale eCommerce websites and
            applications. Professional knowledge in multiple different web
            development frameworks and libraries, especially React.
          </p>
        </div>

        <div class="profile-content__stats">
          {stats.map(({ icon, hearts, tooltipHeader, tooltipText }) => (
            <Stat
              icon={icon}
              hearts={hearts}
              tooltipHeader={tooltipHeader}
              tooltipText={tooltipText}
            />
          ))}
        </div>

        <div class="profile-content__logos">
          <img src="/images/shopify-logo.png" alt="Shopify Logo" />
          <img src="/images/squarespace-logo.png" alt="Squarespace Logo" />
        </div>
      </div>
    </section>
  );
}

export default Profile;
