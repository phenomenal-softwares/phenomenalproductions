"use client";

import styles from "./about.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import FounderSection from "@/components/FounderSection/FounderSection";
import eagleLogo from "../../../public/images/logo2.png";
import phenomenalLogo from "../../../public/images/logo3.png";
import { FaGlobe, FaAndroid, FaApple, FaEye } from "react-icons/fa";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
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
          width={350}
          className={styles.logo}
        />
        <Image
          src={phenomenalLogo}
          alt="phenomenal"
          width={350}
          className={styles.logo}
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
          excellence over convenience and vision over trends. We believe that
          anyone can fly high and stand out with the right tools and support.
        </p>
      </motion.section>

      <motion.section
        className={styles.sectionAlt}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Services we proudly offer:</h2>
        <ul className={styles.iconList}>
          <li>
            <FaGlobe className={styles.icon} />
            <span>Websites</span>
          </li>
          <li>
            <FaAndroid className={styles.icon} />
            <span>Android Apps</span>
          </li>
          <li>
            <FaApple className={styles.icon} />
            <span>iOS Apps</span>
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
        <FaEye className={styles.icon} />
        <h2>The Future We See</h2>
        <p>
          We’re not just making apps and websites. We’re building tools for
          people to live better, work smarter, and reach farther, making them
          stand out in their fields — using tech that’s powerful yet simple and
          accessible.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "#ffe3b3",
          color: "#0a6b8b",
          padding: "1rem 1.25rem",
          borderLeft: "5px solid #92de8b",
          borderRadius: "8px",
          fontSize: "0.95rem",
          lineHeight: "1.6",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <p>
          For a clearer understanding of your rights and our obligations as a
          service provider, we encourage you to review our{" "}
          <Link
            href="/terms-of-service"
            style={{
              color: "#028174",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            style={{
              color: "#028174",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </Link>
          .
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
