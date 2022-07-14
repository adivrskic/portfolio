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
  isOpen,
  onClose,
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [open, setOpen] = useState(isOpen ? true : false);

  return (
    <div className="gallery">
      {!isOpen && (
        <>
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
                Live Site
              </a>
            )}
          </div>
        </>
      )}

      {open && (
        <Lightbox
          mainSrc={galleryImages[imageIndex]?.src}
          nextSrc={galleryImages[(imageIndex + 1) % galleryImages.length]?.src}
          prevSrc={
            galleryImages[
              (imageIndex + imageIndex.length - 1) % imageIndex.length
            ]?.src
          }
          onCloseRequest={() => {
            onClose && onClose();
            setOpen(false);
          }}
          onMovePrevRequest={() =>
            setImageIndex(
              (imageIndex + galleryImages.length - 1) % galleryImages.length
            )
          }
          onMoveNextRequest={() =>
            setImageIndex((imageIndex + 1) % galleryImages.length)
          }
          imageTitle={galleryImages[imageIndex]?.imageTitle}
        />
      )}
    </div>
  );
}

export default GalleryContainer;
