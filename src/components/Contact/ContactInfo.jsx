"use client";

import { motion } from "framer-motion";
import styles from "./ContactInfo.module.css";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <motion.section
      className={styles.contactInfo}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.heading}>Our Contact</h2>
      <p className={styles.infoText}>
        Feel free to shoot us a message anytime. We’ll get back to you as soon
        as possible.
      </p>

      <div className={styles.emailBox}>
        <FaEnvelope className={styles.icon} />
        <a
          href="mailto:info@phenomenalproductions.com.ng"
          className={styles.emailLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          info@phenomenalproductions.com.ng
        </a>
      </div>

      <p className={styles.infoText}>
        Alternatively, you can chat us on WhatsApp
      </p>

      <div className={styles.emailBox}>
        <FaWhatsapp className={styles.icon} />
        <a
          href="https://wa.me/2348086792440"
          className={styles.emailLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          +234 808 679 2440
        </a>
      </div>
    </motion.section>
  );
}
