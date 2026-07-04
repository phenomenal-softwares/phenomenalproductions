"use client";

import { motion } from "framer-motion";
import { FaSearchLocation } from "react-icons/fa";
import styles from "./MapEmbed.module.css";

export default function MapEmbed() {
  return (
    <motion.section
      className={styles.mapSection}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.heading}>
        <FaSearchLocation style={{ marginRight: "0.5em" }} />
        Find Us
      </h2>
      <p className={styles.subtext}>
        Based in Ilesa, Osun, Nigeria. You’re welcome anytime!
      </p>
      <div className={styles.mapContainer}>
        <iframe
          title="Ilesa Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31637.088249999335!2d4.6941178151604985!3d7.614524151312953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10381864e6a92e51%3A0x7d0b50fcef2f8ccf!2sIlesa%2C%20Osun!5e0!3m2!1sen!2sng!4v1783150585925!5m2!1sen!2sng"
          className={styles.mapFrame}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </motion.section>
  );
}
