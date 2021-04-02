import Head from "next/head";
import { Resume } from "../components/Resume";
import { Bubble } from "../components/Bubble";
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
          <div className="flex-container">
            <Bubble
              icon="IoPhonePortraitOutline"
              backgroundColor="#778da9"
              color="#fff"
              caption="Call/Text"
              link="tel:+16782306936"
            />
            <Bubble
              icon="IoMailOutline"
              backgroundColor="#778da9"
              color="#fff"
              caption="Email"
              link="mailto:adivrskic123@gmail.com"
            />
            <Bubble
              icon="IoLogoLinkedin"
              backgroundColor="#778da9"
              color="#fff"
              caption="LinkedIn"
              link="https://www.linkedin.com/in/adi-vrskic-48758213b"
            />
          </div>
        </section>
        <section className={styles.section}>
          <Resume />
        </section>
      </main>
    </>
  );
}
