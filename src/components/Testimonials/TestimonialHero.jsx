"use client";

import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";

export default function TestimonialsHero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>What Our Clients Are Saying</h1>
        <p className={styles.subtitle}>
          We’ve worked with brands big and small, delivering outstanding digital products and unforgettable experiences.
        </p>
      </motion.div>
    </section>
  );
}
