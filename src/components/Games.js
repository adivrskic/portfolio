import React from "react";
import GalleryContainer from "./GalleryContainer";
import "../styles/components/games.scss";

function Games() {
  return (
    <section id="games" className="main-container full-width">
      <h2 className="section-heading">My Games</h2>
      <div className="games-content"></div>
    </section>
  );
}

export default Games;
