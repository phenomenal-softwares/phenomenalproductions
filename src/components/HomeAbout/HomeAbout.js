"use client";

import styles from "./HomeAbout.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import eagleLogo from "../../../public/images/logo2.png";
import { FaRegistered } from "react-icons/fa";

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
            At <strong>Phenomenal <FaRegistered /></strong>, we believe in standing
            out — building powerful technology that works for everyone.
          </p>
          <p className={styles.slogan}>
            We build softwares for the <strong>Web</strong> and Mobile (
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
