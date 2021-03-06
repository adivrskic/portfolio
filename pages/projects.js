import Head from "next/head";
import Image from "next/image";
import { Resume } from "../components/Resume";
import Carousel from "react-multi-carousel";
import styles from "../styles/pages/Projects.module.scss";
import "react-multi-carousel/lib/styles.css";

export default function Projects() {
  const carouselResponsiveProp = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };
  return (
    <>
      <Head>
        <title>Adi Vrskic - Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.heading}>My projects</h2>
          <div className={`${styles.side} ${styles.side__left}`}></div>
          <div className={`${styles.side} ${styles.side__right}`}></div>
          <Carousel
            responsive={carouselResponsiveProp}
            showDots={false}
            arrows={false}
            autoPlay={false}
            customTransition="all .5s"
            containerClass={styles.projects}
            itemClass={styles.project}
            keyBoardControl={true}
            partialVisible
          >
            <div
              className={styles.project__item}
              style={{ backgroundColor: "skyblue" }}
            >
              <h3>A title</h3>
              <p>A description</p>
            </div>

            <div
              className={styles.project__item}
              style={{ backgroundColor: "coral" }}
            >
              <h3>A title</h3>
              <p>A description</p>
            </div>

            <div
              className={styles.project__item}
              style={{ backgroundColor: "lightseagreen" }}
            >
              <h3>A title</h3>
              <p>A description</p>
            </div>
          </Carousel>
        </section>
        <section className={styles.section}>
          <Resume />
        </section>
      </main>
    </>
  );
}
