"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FounderSection.module.css";
import {
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function FounderSection() {
  return (
    <motion.section
      className={styles.founderSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Meet the Founder</h2>

      <div className={styles.founderGrid}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/portrait.png"
            alt="Abiodun Ojo"
            width={400}
            height={400}
            className={styles.founderImage}
            priority
          />
        </div>

        <div className={styles.founderBio}>
          <h3>Abiodun Joseph Obaloluwa Ojo</h3>
          <p className={styles.title}>Software Developer & Tech Entrepreneur</p>
          <p className={styles.bioText}>
            Abiodun is the visionary mind behind Phenomenal Productions. With a
            passion for problem-solving and a deep commitment to accessible
            technology, he has built a career crafting solutions that bridge the
            gap between people and possibility.
          </p>
          <p className={styles.bioText}>
            Whether it’s building intuitive apps or launching platforms that
            make life easier, he brings clarity, speed, and precision — always
            with an eye on excellence.
          </p>
          <p className={styles.bioText}>
            Aside his dedication to the world of softwares, Abiodun is also a
            Laboratory Technologist, Video Editor, Passionate Teacher,
            Multilingual, and Guitarist. He is a lifelong learner and a lover of children.
          </p>

          <a
            href="https://abiodunojo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.portfolioBtn}
          >
            View Portfolio <FaArrowRight style={{ marginLeft: "8px" }} />
          </a>

          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/abiodun-ojo-3970422b2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:abiodunojo453@gmail.com">
              <FaEnvelope />
            </a>
            <a
              href="https://x.com/abiodunojo_"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.xLink}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                width="24"
                height="24"
                fill="currentColor"
                className={styles.xIcon}
              >
                <path d="M1227 0H1005L613 486 221 0H0L464 610 0 1227h222l391-516 391 516h223L763 615 1227 0Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/abiodun.ojo.7505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
