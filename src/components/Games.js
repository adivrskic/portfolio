import React from "react";
import Card from "./Card";
import { IoCodeWorking } from "react-icons/io5";
import "../styles/components/games.scss";

function Games() {
  return (
    <section id="games" className="main-container">
      <h2 className="section-heading">My Games</h2>

      <IoCodeWorking className="UNDER-CONSTRUCTION" />
      {/* <div className="games-content">
        <div className="card-container">
          <Card bg={null} hasGallery overlayText={"Hello world"} />
          <Card bg={null} overlayText={"Hello world"} />
          <Card bg={null} hasGallery overlayText={"Hello world"} />
          <Card bg={null} overlayText={"Hello world"} />
        </div>
      </div> */}
    </section>
  );
}

export default Games;
