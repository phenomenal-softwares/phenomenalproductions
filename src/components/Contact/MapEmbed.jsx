"use client";

import { motion } from "framer-motion";
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
      <h2 className={styles.heading}>Find Us</h2>
      <p className={styles.subtext}>
        Based in Agunbelewo, Osogbo, Nigeria. You’re welcome anytime!
      </p>
      <div className={styles.mapContainer}>
        <iframe
          title="Agunbelewo Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31775.32433993912!2d4.617633175915956!3d7.847617758496059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104790a6df40d1ef%3A0x35c29c460bb73f0d!2sAgunbelewo%2C%20Osogbo!5e0!3m2!1sen!2sng!4v1716542236985!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.mapFrame}
        ></iframe>
      </div>
    </motion.section>
  );
}
