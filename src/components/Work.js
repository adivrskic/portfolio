import React from "react";
import GalleryContainer from "./GalleryContainer";
import { work } from "../data/work";
import "../styles/components/work.scss";

function Work() {
  return (
    <section id="work" className="main-container">
      <h2 className="section-heading">My Work</h2>
      <div className="work-content">
        {work.map(({ title, description, tags, demoLink, gallery }, index) => (
          <GalleryContainer
            galleryImages={gallery}
            title={title}
            demoLink={demoLink}
            tags={tags}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
