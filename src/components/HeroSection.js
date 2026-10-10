import Link from "next/link";
import styles from "./HeroSection.module.css";

const capabilities = [
  "Websites & web applications",
  "Mobile applications",
  "Maintenance & support",
  "E-commerce platforms",
  "Cloud & API engineering",
  "IT Consulting & strategy",
  "Product strategy & discovery",
  "Ongoing growth & support",
];

function CapabilityLoop() {
  return (
    <>
      <ul className={styles.srOnly}>
        {capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
      <div className={styles.marqueeWindow} aria-hidden="true">
        <div className={styles.focusBand} />
        <div className={styles.marqueeTrack}>
          {[0, 1].map((copy) => (
            <div className={styles.marqueeSet} key={copy}>
              {capabilities.map((capability, index) => (
                <div className={styles.capability} key={capability}>
                  <span className={styles.capabilityIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.capabilityDot} />
                  <span>{capability}</span>
                  <span className={styles.capabilityArrow}>↗</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.copy}>
          <Link className={styles.announcement} href="/products">
            <span className={styles.announcementTag}>NOW BUILDING</span>
            <span>Digital products made for real-world impact</span>
            <span className={styles.announcementArrow} aria-hidden="true">
              →
            </span>
          </Link>

          <h1 className={styles.heading} id="hero-title">
            We build software <span>that moves you forward.</span>
          </h1>

          <p className={styles.lead}>
            Your next big idea deserves more than code. It deserves a digital
            experience people love to use.
          </p>
          <p className={styles.supporting}>
            From first sketch to launch and beyond, we turn ambitious ideas into
            phenomenal websites, apps, and products.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryCta} href="/client-form">
              Start a project <span aria-hidden="true">↗</span>
            </Link>
            <Link className={styles.secondaryCta} href="/products">
              Explore our work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.showcase}>
          <div className={styles.showcaseHeader}>
            <span className={styles.liveMark} aria-hidden="true" />
            <span>ONE TEAM. EVERY DIGITAL LAYER.</span>
            <span className={styles.showcaseMeta}>01 — 08</span>
          </div>
          <CapabilityLoop />
          <div className={styles.showcaseFooter}>
            <span>Thoughtfully engineered.</span>
            <span>Built around your ambition.</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomNote} aria-hidden="true">
        <span>PHENOMENAL SOFTWARES</span>
        <span>IDEAS INTO IMPACT</span>
      </div>
    </section>
  );
}
