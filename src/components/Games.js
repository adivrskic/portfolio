import React from "react";
import Card from "./Card";
import "../styles/components/games.scss";

function Games() {
  return (
    <section id="games" className="main-container">
      <h2 className="section-heading">My Games</h2>
      <div className="games-content">
        <div className="card-container">
          <Card bg={null} gallery={null} alt="Lorem Ipsum" />
          <Card bg={null} gallery={null} alt="Lorem Ipsum" />
          <Card bg={null} gallery={null} alt="Lorem Ipsum" />
        </div>
      </div>
    </section>
  );
}

export default Games;
