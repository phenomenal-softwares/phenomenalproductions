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
          <h3>ABIODUN OJO</h3>
          <p className={styles.title}>
            Director, Phenomenal Softwares Nig. Ltd
          </p>
          <p className={styles.bioText}>
            Abiodun is the founder and visionary mind behind PHENOMENAL®. With a
            passion for problem-solving and a deep commitment to accessible
            technology, he has built a career crafting solutions that bridge the
            gap between people and possibility.
          </p>

          <p className={styles.bioText}>
            Aside his dedication to the world of softwares, he is a Laboratory
            Technologist, registered with the Nigerian Institute of Science
            Laboratory Technology (NISLT), conducting research and practical
            experiments in the university. He is also a 3D animator, an
            educator, and a preacher.
          </p>

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
