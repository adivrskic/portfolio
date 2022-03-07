import React from "react";
import GalleryContainer from "./GalleryContainer";
import { karastanrugsGallery } from "../data/karastanrugsGallery";
import { mohawkfactoryoutletGallery } from "../data/mohawkfactoryoutletGallery";
import "../styles/components/games.scss";

function Games() {
  return (
    <section id="games" className="main-container full-width">
      <h2 className="section-heading">My Games</h2>
      <div className="games-content">
        <GalleryContainer
          galleryImages={karastanrugsGallery}
          title={"Karastan Rugs"}
          demoLink={"https://karastanrugs.com"}
        />
        <GalleryContainer
          galleryImages={mohawkfactoryoutletGallery}
          title={"Mohawk Factory Outlet"}
          demoLink={"https://mohawkfactoryoutlet.com"}
        />
      </div>
    </section>
  );
}

export default Games;
