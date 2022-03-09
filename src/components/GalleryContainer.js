import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../styles/components/gallerycontainer.scss";

function GalleryContainer({
  title,
  description,
  tags,
  demoLink,
  galleryImages,
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  console.log(galleryImages[0].src);
  return (
    <div className="gallery">
      <div className="gallery__image">
        <img
          src={galleryImages[0]?.src}
          alt={title}
          onClick={() => setOpen(true)}
        />
      </div>
      <div className="gallery__description">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
        {tags && (
          <div className="gallery__tags">
            {tags?.map((tag) => (
              <span className="gallery__tag">{tag}</span>
            ))}
          </div>
        )}

        {demoLink && (
          <a
            href={demoLink}
            rel="noreferrer"
            target="_blank"
            className="button"
          >
            Live Demo
          </a>
        )}
      </div>

      {open && (
        <Lightbox
          mainSrc={galleryImages[imageIndex]?.src}
          nextSrc={galleryImages[(imageIndex + 1) % galleryImages.length]?.src}
          prevSrc={
            galleryImages[
              (imageIndex + imageIndex.length - 1) % imageIndex.length
            ]?.src
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setImageIndex(
              (imageIndex + galleryImages.length - 1) % galleryImages.length
            )
          }
          onMoveNextRequest={() =>
            setImageIndex((imageIndex + 1) % galleryImages.length)
          }
        />
      )}
    </div>
  );
}

export default GalleryContainer;
