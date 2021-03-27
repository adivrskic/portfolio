import Head from "next/head";
import { Resume } from "../components/Resume";
import { SkillCards } from "../components/SkillCards";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adi Vrskic</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.section__container}>
            <h2 className={styles.heading}>Hey, I'm Adi</h2>
            <p className={styles.subheading}>
              I'm a frontend developer - I love creating applications with
              React, and I specialize in building eCommerce websites.
            </p>
          </div>
        </section>
        <section className={styles.section}>
          <SkillCards />
        </section>
        <section className={styles.section}>
          <Resume />
        </section>
      </main>
    </div>
  );
}
