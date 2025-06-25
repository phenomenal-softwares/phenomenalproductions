// components/Testimonials/FeaturedQuote.jsx
"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

export default function FeaturedQuote() {
  return (
    <section className={styles.featuredQuote}>
      <motion.blockquote
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          “Working with Phenomenal Productions was the best decision we made all year. They didn't just build an app — they built our brand's future.”
        </p>
        <footer>— Tolu Adebayo, Founder of BizLink</footer>
      </motion.blockquote>
    </section>
  );
}
