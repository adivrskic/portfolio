import Head from "next/head";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section>
          <h2>Contact</h2>
        </section>
      </main>
    </div>
  );
}
