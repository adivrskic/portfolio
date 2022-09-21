import React from "react";
import GalleryContainer from "./GalleryContainer";
import { work } from "../data/work";
import "../styles/components/work.scss";

function Work() {
  return (
    <section id="work" className="main-container">
      <div className="work-content">
        {work.map(({ title, description, tags, demoLink, gallery }, index) => (
          <div className="work-content__description">
            {title && <h3>{title}</h3>}
            {description && <p>{description}</p>}

            {/* {demoLink && (
              <a
                href={demoLink}
                rel="noreferrer"
                target="_blank"
                className="button"
              >
                Live Site
              </a>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
