import React, { useState } from "react";
import Stat from "./Stat";
import {
  stats,
  frontendStats,
  backendStats,
  gameStats,
  techStats,
} from "../data/stats";
import { StateContext } from "../context/StateProvider";
import "../styles/components/profile.scss";

function Profile() {
  const [{ isDarkTheme }] = React.useContext(StateContext);

  console.log(stats);
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
        <div className="profile-content__info">
          <p>
            i have several years of front and back end development experience
            building and enhancing both large and small scale ecommerce websites
            and applications. professional knowledge in multiple different web
            development frameworks and libraries, especially react.
          </p>

          <div className="profile-content__resume">
            <a
              className={`button ${isDarkTheme ? "dark" : "light"}`}
              href="/docs/AdiVrskicResume.pdf"
              download
            >
              download resume pdf
            </a>
            <a
              className={`button ${isDarkTheme ? "dark" : "light"}`}
              href="/docs/AdiVrskicResume.doc"
              download
            >
              download resume doc
            </a>
          </div>
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
      </div>
    </section>
  );
}

export default Profile;
