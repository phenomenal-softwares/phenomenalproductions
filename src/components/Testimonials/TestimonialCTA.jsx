// components/Testimonials/TestimonialCTA.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

export default function TestimonialCTA() {
  return (
    <section className={styles.testimonialCTA}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={styles.ctaContent}
      >
        <h2>Ready to be our next success story?</h2>
        <p>Join our growing list of satisfied clients and take your project to the next level.</p>
        <Link href="/client-form" className={styles.ctaBtn}>
          Get Started
        </Link>
      </motion.div>
    </section>
  );
}
