"use client";

import styles from "./HomeAbout.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import eagleLogo from "../../../public/logo.png";

export default function HomeAbout() {
  return (
    <motion.section
      className={styles.aboutSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.aboutContent}>
        <div className={styles.logo}>
          <Image src={eagleLogo} className={styles.eagleLogo} alt="Phenomenal Productions Logo" />
        </div>
        <div>
          <div className={styles.headingRow}>
            <h2>Who We Are</h2>
          </div>
          <p>
            At <strong>Phenomenal Productions</strong>, we believe in standing
            out — in doing work that commands attention and earns respect. With
            the eagle as our symbol, we embody vision, speed, and strength —
            building powerful technology that works for everyone.
          </p>
          <p className={styles.slogan}>
            Preeminence is not just our motto — it’s our mindset.
          </p>
          <Link href="/about" className={styles.readMoreBtn}>
            Learn More
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
