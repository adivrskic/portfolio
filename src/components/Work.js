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
            bg={"images/kr1.webp"}
            gallery={karastanrugsGallery}
            alt="Karastan Rugs"
          />
          <Card
            bg={"images/mfo2.webp"}
            gallery={mohawkfactoryoutletGallery}
            alt="Mohawk Factory Outlet"
          />
          <Card bg={null} gallery={null} alt="Lorem Ipsum" />
        </div>
      </div>
    </section>
  );
}

export default Work;
