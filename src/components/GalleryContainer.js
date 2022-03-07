import React from "react";
import "../styles/components/gallerycontainer.scss";

function GalleryContainer({ title, demoLink, galleryImages }) {
  return (
    <div className="gallery">
      <div className="gallery__header">
        {/* <h3>{title}</h3>
        {demoLink && (
          <a
            href={demoLink}
            rel="noreferrer"
            target="_blank"
            className="button"
          >
            Live Demo
          </a>
        )} */}
      </div>

      <img src={galleryImages[0]?.src} alt={title} />
    </div>
  );
}

export default GalleryContainer;
