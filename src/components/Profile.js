import React, { useState } from "react";
import Stat from "../components/Stat";
import {
  stats,
  frontendStats,
  backendStats,
  gameStats,
  techStats,
} from "../data/stats";
import { statButtons } from "../data/buttons";
import "../styles/components/profile.scss";

function Profile() {
  const [renderedStats, setRenderedStats] = useState(frontendStats);
  const [active, setActive] = useState("frontendStats");

  const stringToData = {
    stats: stats,
    frontendStats: frontendStats,
    backendStats: backendStats,
    gameStats: gameStats,
    techStats: techStats,
  };

  const filterStats = (e, filter) => {
    setRenderedStats(stringToData[filter]);
    setActive(e.target.id);
  };

  return (
    <section id="profile" className="main-container">
      <h2>Profile</h2>
      <div className="profile-content">
        <div className="profile-content__info">
          <img
            className="profile-content__image"
            src="images/selfie.webp"
            alt="Headshot of Adi Vrskic"
          />
          <p>
            Several years of front and back end development experience building
            and enhancing both large and small scale eCommerce websites and
            applications. Professional knowledge in multiple different web
            development frameworks and libraries, especially React.
          </p>
        </div>

        <div className="profile-content__filters">
          {statButtons.map(({ id, displayName }) => (
            <button
              id={id}
              className={`button button--inverse ${
                active === id ? "active" : ""
              }`}
              onClick={(e) => filterStats(e, id)}
            >
              {displayName}
            </button>
          ))}
        </div>

        <div className="profile-content__stats">
          {renderedStats.map(({ icon, hearts, tooltipHeader, tooltipText }) => (
            <Stat
              icon={icon}
              hearts={hearts}
              tooltipHeader={tooltipHeader}
              tooltipText={tooltipText}
            />
          ))}
        </div>

        <div className="profile-content__logos">
          <img src="/images/shopify-logo.webp" alt="Shopify Logo" />
          <img src="/images/squarespace-logo.webp" alt="Squarespace Logo" />
        </div>
      </div>
    </section>
  );
}

export default Profile;
