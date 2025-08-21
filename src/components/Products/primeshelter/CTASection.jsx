"use client";

import styles from "./CTASection.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGlobe, FaCode } from "react-icons/fa";

export default function CTASection() {
  return (
    <motion.section
      className={styles.ctaSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Ready to Take the Next Step?</h2>
      <p>Whether you’re here to explore or to build — we’ve got you covered.</p>

      <div className={styles.buttonGroup}>
        {/* View Product or Download */}
        <motion.div
          className={styles.ctaBox}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p>Check out the live version</p>
          <a
            href="https://primeshelter-properties.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <FaGlobe className={styles.icon} />
            Visit Demo Site
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
