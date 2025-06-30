"use client";

import styles from "./CTASection.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGooglePlay, FaAppStoreIos, FaCode } from "react-icons/fa";

export default function CTASection() {
  return (
    <motion.section
      className={styles.ctaSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Coming soon to Android and iOS!</h2>
      <p>
        The game will be laucnhed very soon on Google Play and App Store for
        downloads.
      </p>

      <div className={styles.buttonGroup}>
        {/* View Product or Download */}
        <motion.div
          className={styles.ctaBox}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p>Download Game Now</p>
          <a
            href="#"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <FaGooglePlay className={styles.icon} />
            <FaAppStoreIos className={styles.icon} />
            COMING SOON!
          </a>
        </motion.div>

        {/* Build Similar Product */}
        <motion.div
          className={styles.ctaBox}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p>Want to build something like this?</p>
          <Link href="/client-form" className={styles.ctaBtn}>
            <FaCode className={styles.icon} />
            Let’s Work Together
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
