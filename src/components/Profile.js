import React, { useState } from "react";
import Stat from "../components/Stat";
import { stats, frontendStats, backendStats, gameStats } from "../data/stats";
import "../styles/components/profile.scss";

function Profile() {
  const [renderedStats, setRenderedStats] = useState(stats);
  const [active, setActive] = useState("stats");

  const filterStats = (e, filter) => {
    console.log(filter, e.target.id);
    setRenderedStats(filter);
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
          <button
            id="stats"
            className={`button button--inverse ${
              active === "stats" ? "active" : ""
            }`}
            onClick={(e) => filterStats(e, stats)}
          >
            All
          </button>
          <button
            id="frontendStats"
            className={`button button--inverse ${
              active === "frontendStats" ? "active" : ""
            }`}
            onClick={(e) => filterStats(e, frontendStats)}
          >
            Frontend
          </button>
          <button
            id="backendStats"
            className={`button button--inverse ${
              active === "backendStats" ? "active" : ""
            }`}
            onClick={(e) => filterStats(e, backendStats)}
          >
            Backend
          </button>
          <button
            id="gameStats"
            className={`button button--inverse ${
              active === "gameStats" ? "active" : ""
            }`}
            onClick={(e) => filterStats(e, gameStats)}
          >
            Games
          </button>
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
