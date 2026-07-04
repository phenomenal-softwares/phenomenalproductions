"use client";

import styles from "./about.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import FounderSection from "@/components/FounderSection/FounderSection";
import eagleLogo from "../../../public/images/logo2.png";
import {
  FaGlobe,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
  FaWrench,
  FaCloudUploadAlt,
  FaUserFriends,
  FaCertificate,
} from "react-icons/fa";

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
        className={styles.aboutSection}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.aboutContent}>
          {/* Logo */}
          <motion.div
            className={styles.logoCard}
            whileHover={{
              y: -8,
              rotate: -2,
              scale: 1.03,
            }}
            transition={{ duration: 0.35 }}
          >
            <Image
              src={eagleLogo}
              alt="Phenomenal Logo"
              className={styles.eagleLogo}
              priority
            />
          </motion.div>

          {/* Company Identity */}
          <div className={styles.companyInfo}>
            <div className={styles.companyHeader}>
              <div className={styles.rcBadge}>RC&nbsp;9615166</div>
              <div className={styles.companyDetails}>
                <h2 className={styles.companyName}>PHENOMENAL</h2>
                <h3 className={styles.companyType}>Softwares Nig. Ltd</h3>
                <p className={styles.brandName}>A.K.A Phenomenal Productions</p>
                <p className={styles.address}>
                  <FaLocationArrow className={styles.detailsIcon} />
                  Ido-Ijesa, Ilesa, Osun State, Nigeria.
                </p>
                <p className={styles.address}>
                  <FaEnvelope className={styles.detailsIcon} />
                  info@phenomenalproductions.com.ng
                </p>
              </div>
            </div>

            <div className={styles.services}>
              <span>
                <FaGlobe className={styles.detailsIcon} />
                Websites
              </span>
              <span>
                <FaMobileAlt className={styles.detailsIcon} />
                Mobile Apps
              </span>
              <span>
                <FaWrench className={styles.detailsIcon} />
                Maintenance
              </span>
              <span>
                <FaCloudUploadAlt className={styles.detailsIcon} />
                Deployment
              </span>
              <span>
                <FaUserFriends className={styles.detailsIcon} />
                Consultancy
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Our Mission</h2>
        <p>
          We believe that everyone should have access to high-quality,
          affordable softwares that empower them to achieve their
          goals. Our mission therefore is to create accessible, user-friendly,
          and cost-effective digital products that help individuals and
          businesses thrive in the digital age.
        </p>
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

      {/* Registration */}
      <motion.section
        className={styles.sectionAlt}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <FaCertificate className={styles.icon} />
        <h2>We are a Registered Company</h2>
        <p>
          PHENOMENAL SOFTWARES NIG. LTD is registered as a Private Company
          Limited by Shares under the Companies and Allied Matters Act (CAMA) 2020,
          Federal Republic of Nigeria. The company is duly registered with the
          Corporate Affairs Commission (CAC) and operates in compliance with all
          relevant laws and regulations governing companies and businesses in Nigeria.
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
