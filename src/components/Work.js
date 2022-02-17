import React from "react";
import Card from "./Card";
import { karastanrugsGallery } from "../data/karastanrugsGallery";
import { mohawkfactoryoutletGallery } from "../data/mohawkfactoryoutletGallery";
import "../styles/components/work.scss";

function Work() {
  return (
    <section id="work" className="main-container">
      <h2 className="section-heading">My Work</h2>
      <div className="work-content">
        <div className="card-container">
          <Card
            bg={"images/kr1.PNG"}
            gallery={karastanrugsGallery}
            overlayText={"Karastan Rugs"}
            alt="Karastan Rugs"
          />
          <Card
            bg={"images/mfo2.PNG"}
            gallery={mohawkfactoryoutletGallery}
            overlayText={"Mohawk Factory Outlet"}
            alt="Mohawk Factory Outlet"
          />
        </div>
      </div>
    </section>
  );
}

export default Work;
