import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import GalleryContainer from "../GalleryContainer";
import WorkDetail from "./subcomponents/WorkDetail";
import { work } from "../../data/work";
import "./work.scss";

function Work() {
  const [index, setIndex] = useState(0);
  const [transformPercentage, setTransformPercentage] = useState(0);
  const [workDetailActive, setWorkDetailActive] = useState(false);

  const goToPrev = () => {
    const container = document.querySelector(`.work__content`);
    container.style.transform = `translateX(${transformPercentage + 100}%)`;

    setTransformPercentage(transformPercentage + 100);
    setIndex(index - 1);
  };

  const goToNext = () => {
    const container = document.querySelector(`.work__content`);
    container.style.transform = `translateX(${-100 * (index + 1)}%)`;

    setTransformPercentage(-100 * (index + 1));
    setIndex(index + 1);
  };

  const viewMore = (index) => {
    setWorkDetailActive(true);
  };
  return (
    <section id="work" className="work">
      <div className="work__content">
        {work.map(({ title, description, tags, demoLink, gallery }, i) => (
          <div className={`work__item work__item--${i}`}>
            <img
              className="work__item-image"
              src={work[i].images[0].image}
              alt=""
            />
            <div className="work__description">
              <div>
                <h2>{work[i].projectName}</h2>
                <div className="work__description-skills">
                  {work[i].skills.map((skill) => (
                    <span>#{skill}</span>
                  ))}
                </div>
                <button className="button" onClick={() => viewMore(i)}>
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="work__buttons">
        <button
          className="work__prev"
          onClick={() => goToPrev()}
          disabled={index === 0}
        >
          <IoChevronBackOutline />
        </button>
        <button
          className="work__next"
          onClick={() => goToNext()}
          disabled={index >= 3}
        >
          <IoChevronForwardOutline />
        </button>
      </div>

      {workDetailActive && <WorkDetail />}
    </section>
  );
}

export default Work;
