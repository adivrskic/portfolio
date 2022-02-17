import React, { useState } from "react";
import { IoImages } from "react-icons/io5";
import GalleryContainer from "./GalleryContainer";
import "../styles/components/card.scss";

function Card({ bg, gallery, overlayText, alt }) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const toggleGallery = () => {
    setGalleryOpen(!galleryOpen);
  };

  return (
    <>
      <div className="card">
        <div className="card__overlay"></div>
        <img className="card__image" src={bg} alt={alt} />
        <div className="card__content">
          {overlayText && <p className="card__text">{overlayText}</p>}
          {gallery?.length && (
            <button className="button" onClick={() => toggleGallery()}>
              <IoImages className="card__gallery icon" />
              View Gallery
            </button>
          )}
        </div>
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
