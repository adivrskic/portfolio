import React from "react";
import GalleryContainer from "./GalleryContainer";
import { karastanrugsGallery } from "../data/karastanrugsGallery";
import { mohawkfactoryoutletGallery } from "../data/mohawkfactoryoutletGallery";
import "../styles/components/work.scss";

function Work() {
  return (
    <section id="work" className="main-container full-width">
      <h2 className="section-heading">My Work</h2>
      <div className="work-content">
        <GalleryContainer
          galleryImages={karastanrugsGallery}
          title={"Karastan Rugs"}
          demoLink={"https://karastanrugs.com"}
          tags={["Shopify", "Javascript", "jQuery"]}
        />
        <GalleryContainer
          galleryImages={mohawkfactoryoutletGallery}
          title={"Mohawk Factory Outlet"}
          demoLink={"https://mohawkfactoryoutlet.com"}
          tags={["Shopify", "Javascript", "jQuery"]}
        />
      </div>
    </section>
  );
}

export default Work;
