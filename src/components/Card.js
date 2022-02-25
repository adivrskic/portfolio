import React, { useState } from "react";
import GalleryContainer from "./GalleryContainer";
import "../styles/components/card.scss";

function Card({ bg, gallery, alt }) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const toggleGallery = () => {
    setGalleryOpen(!galleryOpen);
  };

  return (
    <>
      <div className="card" onClick={() => toggleGallery()}>
        <img className="card__image" src={bg} alt={alt} />
        <div className="card__content"></div>
      </div>

      <GalleryContainer
        title={alt}
        galleryImages={gallery}
        galleryOpen={galleryOpen}
        onGalleryClose={() => toggleGallery()}
      />
    </>
  );
}

export default Card;
