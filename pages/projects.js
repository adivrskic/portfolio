import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section>
          <h2>Projects</h2>
        </section>
      </main>
    </div>
  );
}
