"use client";

import styles from "./ProductsHero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import heroImg from "../../../../public/products/pick-a-card-game/shot1.jpeg";

export default function ProductsHero() {
  return (
    <section className={styles.heroSection}>
      <Image
        src={heroImg}
        alt="molecule-visualizer Background"
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
            src="/products/pick-a-card-game/hero-device.png"
            alt="App Showcase"
            width={225}
            height={480}
            className={styles.image}
            placeholder="blur"
            blurDataURL="/products/pick-a-card-game/hero-device.png"
          />
        </motion.div>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className={styles.title}>
            Pick-A-Card <span className={styles.highlight}>Game</span>
          </h1>
          <p className={styles.subtitle}>
            Simple, fun, and challenging brain-training card picking game.
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
              href="https://pick-a-card-game.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <FaGlobe className={styles.icon} />
              Play Game
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
