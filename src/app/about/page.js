"use client";

import styles from "./about.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import FounderSection from "@/components/FounderSection/FounderSection";
import eagleLogo from "../../../public/logo.png";
import { FaEye, FaBolt, FaGlobeAfrica } from "react-icons/fa";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  return (
    <main className={styles.aboutMain}>
      {/* Hero Banner */}
      <motion.section
        className={styles.hero}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Image
          src={eagleLogo}
          alt="Eagle soaring"
          fill
          className={styles.bgImage}
        />
      </motion.section>

      {/* Philosophy */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Our Philosophy</h2>
        <p>
          We exist to create solutions that are bold, reliable, accessible, and
          transformative. Like the eagle, we rise above the noise, choosing
          excellence over convenience and vision over trends.
        </p>
      </motion.section>

      {/* Why Us */}
      <motion.section
        className={styles.sectionAlt}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>What Sets Us Apart</h2>
        <ul className={styles.iconList}>
          <li>
            <FaEye className={styles.icon} />
            <span>Clarity of Vision</span>
          </li>
          <li>
            <FaBolt className={styles.icon} />
            <span>Speed & Precision</span>
          </li>
          <li>
            <FaGlobeAfrica className={styles.icon} />
            <span>Solutions for Everyone</span>
          </li>
        </ul>
      </motion.section>

      {/* Values */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Our Core Values</h2>
        <p>
          Innovation, Integrity, Accessibility, and Preeminence. These core
          values guide how we build, how we serve, and how we grow.
        </p>
      </motion.section>

      {/* Vision */}
      <motion.section
        className={styles.sectionAlt}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>The Future We See</h2>
        <p>
          We’re not just making apps and websites. We’re building tools for
          people to live better, work smarter, and reach farther — using tech
          that’s powerful yet simple.
        </p>
      </motion.section>

      {/* Founder Section */}
      <FounderSection />

      {/* CTA */}
      <motion.section
        className={styles.cta}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3>
          Have an idea?{" "}
          <Link href="/client-form" className={styles.ctaLink}>
            Let’s build it together.
          </Link>
        </h3>
      </motion.section>
    </main>
  );
}
