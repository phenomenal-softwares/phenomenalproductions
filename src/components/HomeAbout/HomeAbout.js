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
              <p className={styles.brandName}>(Phenomenal Productions)</p>
            </div>
            
          </div>

          <h4 className={styles.tagline}>
            Accessible Technology.
            <br />
            Exceptional Software.
          </h4>

          <p className={styles.description}>
            We create premium digital experiences that empower businesses,
            organizations, and individuals through modern websites, mobile
            applications, business automation, and innovative software
            solutions.
          </p>

          <div className={styles.services}>
            <span>Websites</span>
            <span>Mobile Apps</span>
            <span>Maintenance</span>
            <span>Business Automation</span>
            <span>Deployment</span>
          </div>

          <Link href="/about" className={styles.readMoreBtn}>
            Learn More →
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
