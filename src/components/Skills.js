import React, { useState } from "react";
import Stat from "./Stat";
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

function Skills() {
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
      <div className="profile-content">
        <div className="container">
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
            {renderedStats.map(
              ({ icon, hearts, tooltipHeader, tooltipText }) => (
                <Stat
                  icon={icon}
                  hearts={hearts}
                  tooltipHeader={tooltipHeader}
                  tooltipText={tooltipText}
                  tooltipId={tooltipHeader}
                />
              )
            )}
          </div>
        </div>
        {/* 
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
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
