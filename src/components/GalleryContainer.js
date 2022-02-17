import React from "react";
import { IoClose } from "react-icons/io5";
import Gallery from "react-grid-gallery";
import "../styles/components/gallerycontainer.scss";

function GalleryContainer({
  galleryOpen,
  title,
  onGalleryClose,
  galleryImages,
}) {
  return (
    <div className={`gallery ${galleryOpen ? "open" : ""}`}>
      <div className="gallery__header">
        <h3>{title}</h3>
        <IoClose className="gallery__close" onClick={() => onGalleryClose()} />
      </div>
      <div className="gallery__grid">
        <Gallery
          images={galleryImages}
          enableImageSelection={false}
          rowHeight={350}
          margin={4}
          backdropClosesModal={true}
        />
      </div>
    </div>
  );
}

export default GalleryContainer;
