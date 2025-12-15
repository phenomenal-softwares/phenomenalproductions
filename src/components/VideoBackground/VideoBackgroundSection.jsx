"use client";

import { motion } from "framer-motion";
import styles from "./VideoBackgroundSection.module.css";

export default function VideoBackgroundSection({
  videoSrc = "/videos/coding-bg.mp4",
  headline = "We Build Digital Products That Feel Alive",
  subtext = "Apps. Websites. Systems. Crafted with clarity, precision, and purpose.",
}) {
  return (
    <section className={styles.wrapper}>
      {/* Background Video */}
      <video
        className={styles.video}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Text Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className={styles.headline}
          initial={{ letterSpacing: "0.15em" }}
          animate={{ letterSpacing: "0.05em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {headline}
        </motion.h2>

        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {subtext}
        </motion.p>
      </motion.div>
    </section>
  );
}
