"use client";

import styles from "./ProductsHero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import heroImg from "../../../../public/products/abbeycal/hero-bg.jpg";

export default function ProductsHero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src={heroImg}
        alt="abbeycal Background"
        className={styles.bgImage}
        placeholder="blur"
        fill
      />

      <div className={styles.heroWrapper}>
        {/* Image Side */}
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/products/abbeycal/hero-device.jpg"
            alt="App Showcase"
            width={230}
            height={480}
            className={styles.image}
            placeholder="blur"
            blurDataURL="/products/abbeycal/hero-device.jpg"
          />
        </motion.div>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            AbbeyCal:{" "}
            <span className={styles.highlight}>Scientific Calculator</span>
          </h1>
          <p className={styles.subtitle}>
            Perform simple and complex calculations with ease using AbbeyCal, the
            scientific calculator that combines functionality with a sleek neomorphism interface.
          </p>

          <motion.div
            className={styles.ctaWrapper}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <a
              href="https://phenomenal-softwares.github.io/abbeycal/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <FaGlobe className={styles.icon} />
              Visit App
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
