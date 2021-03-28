import Head from "next/head";
import { Resume } from "../components/Resume";
import styles from "../styles/pages/Contact.module.scss";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Adi Vrskic - Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Contact me if you're not a robot</h2>
          <div className={styles.contact__form}>
            <form>
              <input type="text" required />
              <input type="text" />
              <input type="email" required />
              <input type="tel" />
              <input type="text" />
              <button type="submit">Get in Touch</button>
            </form>
          </div>
        </section>
        <section className={styles.section}>
          <Resume />
        </section>
      </main>
    </>
  );
}
