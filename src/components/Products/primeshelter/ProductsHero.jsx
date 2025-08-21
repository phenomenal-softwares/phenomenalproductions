"use client";

import styles from "./ProductsHero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import heroImg from "../../../../public/products/primeshelter/shot1.jpeg";

export default function ProductsHero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src={heroImg}
        alt="primeshelter Background"
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
            src="/products/primeshelter/hero-device.png"
            alt="App Showcase"
            width={230}
            height={480}
            className={styles.image}
            placeholder="blur"
            blurDataURL="/products/primeshelter/hero-device.png"
          />
        </motion.div>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            Primeshelter: <span className={styles.highlight}>Real Estate</span>
          </h1>
          <p className={styles.subtitle}>
            A nice platform for buying, selling, and renting properties across the country with ease.
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
              href="https://primeshelter-properties.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <FaGlobe className={styles.icon} />
              Visit Demo Site
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
