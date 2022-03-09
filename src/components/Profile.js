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
import { StateContext } from "../context/StateProvider";
import "../styles/components/profile.scss";

function Profile() {
  const [{ isDarkTheme }] = React.useContext(StateContext);

  const stringToData = {
    stats: stats,
    frontendStats: frontendStats,
    backendStats: backendStats,
    gameStats: gameStats,
    techStats: techStats,
  };

  const [renderedStats, setRenderedStats] = useState(
    stringToData[localStorage.getItem("ACTIVE_STAT") || "frontendStats"]
  );
  const [active, setActive] = useState(
    localStorage.getItem("ACTIVE_STAT") || "frontendStats"
  );

  const filterStats = (e, filter) => {
    setRenderedStats(stringToData[filter]);
    setActive(e.target.id);
    localStorage.setItem("ACTIVE_STAT", e.target.id);
  };

  return (
    <section id="profile" className="main-container">
      <h2 class="section-heading">Profile</h2>
      <div className="profile-content">
        <p className="profile-content__info">
          Several years of front and back end development experience building
          and enhancing both large and small scale eCommerce websites and
          applications. Professional knowledge in multiple different web
          development frameworks and libraries, especially React.
        </p>

        <div className="profile-content__resume">
          <a href="/images/AdiVrskicResume.pdf" download>
            Download Resume PDF
          </a>
          <a href="/images/AdiVrskicResume.doc" download>
            Download Resume Doc
          </a>
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
              tooltipId={tooltipHeader}
            />
          ))}
        </div>

        <div className="profile-content__logos">
          <img
            src={
              isDarkTheme
                ? "/images/shopify-darkmode.webp"
                : "/images/shopify-lightmode.webp"
            }
            alt="Shopify Logo"
          />
          <img
            src={
              isDarkTheme
                ? "/images/squarespace-darkmode.webp"
                : "/images/squarespace-lightmode.webp"
            }
            alt="Squarespace Logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
