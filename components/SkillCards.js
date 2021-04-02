import React from "react";
import { SkillCard } from "./SkillCard";
import styles from "../styles/components/SkillCards.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skillCardData from "../public/static/json/skillCards.json";

export const SkillCards = () => {
  const carouselResponsiveProp = {
    desktop: {
      breakpoint: { max: 3000, min: 1080 },
      items: 4,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1080, min: 768 },
      items: 3,
      partialVisibilityGutter: 20,
    },
    smallTablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <div className={styles.skillcards}>
      <div class="heading-container">
        <h2 className={styles.heading}>In a nutshell...</h2>
        <p className={styles.subheading}>
          My goal is to use these technologies - and more - to create modern,
          responsive, and accessible applications.
        </p>
      </div>

      <div className={`${styles.side} ${styles.side__left}`}></div>
      <div className={`${styles.side} ${styles.side__right}`}></div>

      <Carousel
        responsive={carouselResponsiveProp}
        showDots={false}
        arrows={false}
        autoPlay={false}
        customTransition="all .5s"
        keyBoardControl={true}
        containerClass={styles.carousel}
        itemClass={styles.carouselCard}
        partialVisible
      >
        {skillCardData.map((item, i) => (
          <>
            <SkillCard
              key={item.key}
              idx={i}
              color={item.cardColor}
              icon={item.cardIcon}
              heading={item.cardHeading}
              subheading={item.cardSubheading}
              progress={item.cardProgress}
            />
          </>
        ))}
      </Carousel>
    </div>
  );
};
