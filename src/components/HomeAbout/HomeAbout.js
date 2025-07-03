"use client";

import styles from "./HomeAbout.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import eagleLogo from "../../../public/images/logo2.png";

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
          <Image
            src={eagleLogo}
            className={styles.eagleLogo}
            alt="Phenomenal Productions Logo"
          />
        </div>
        <div>
          <div className={styles.headingRow}>
            <h2>Who We Are</h2>
          </div>
          <p>
            At <strong>Phenomenal Productions</strong>, we believe in standing
            out — in doing work that commands attention and earns respect. With
            the eagle as our symbol, we embody preeminence in flight, vision,
            and strength — building powerful technology that works for everyone.
          </p>
          <p className={styles.slogan}>
            We build digital products on the <strong>Web</strong> and Mobile (
            <strong>Android</strong> + <strong>iOS</strong>) platforms!
          </p>
          <Link href="/about" className={styles.readMoreBtn}>
            Learn More
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
