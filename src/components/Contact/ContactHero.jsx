"use client";

import { motion } from "framer-motion";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Let&apos;s Talk</h1>
        <p className={styles.subtitle}>
          We’re just an email away. Whether you have questions, ideas, or you’re ready to get started—reach out and let’s build something amazing together.
        </p>
      </motion.div>
    </section>
  );
}
