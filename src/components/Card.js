import React, { useState } from "react";
import "../styles/components/card.scss";

function Card({ bg, alt }) {
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
          <h3>{alt}</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
