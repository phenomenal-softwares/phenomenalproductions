"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./HomeCTA.module.css";
import Image from "next/image";
import bgImage from "/public/images/hero-cta.jpg";

export default function HomeCTA() {
  return (
    <section className={styles.ctaSection}>
      <Image
        src={bgImage}
        alt="Background"
        fill
        className={styles.bgImage}
        priority
      />
      <div className={styles.overlay}></div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let&apos;s Build Your Dream App or Website
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Over <strong>5.6 billion</strong> people browse the internet daily and nearly <strong>4.7 billion</strong> use mobile apps.
          Isn’t it time your brand joined the global conversation?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/client-form">
            <button className={styles.ctaButton}>Start Your Project</button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
