import React, { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import "../styles/components/card.scss";

function Card({ bg, gallery, alt }) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const toggleGallery = () => {
    setGalleryOpen(!galleryOpen);
  };

  return (
    <>
      <div className="card" onClick={() => toggleGallery()}>
        {bg ? (
          <img className="card__image" src={bg} alt={alt} />
        ) : (
          <div className="card__image-placeholder"></div>
        )}

        <div className="card__content">
          <h4>{alt}</h4>
          <IoChevronForward />
        </div>
      </div>
    </>
  );
}

export default Card;
