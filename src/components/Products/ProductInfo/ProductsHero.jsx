"use client";

import styles from "./ProductsHero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

export default function ProductsHero({ product }) {
  const isGame = product.type === "game";

  return (
    <section className={styles.heroSection}>
      {product.imagePrimary && (
        <Image
          src={product.imagePrimary}
          alt={`${product.name} background`}
          className={styles.bgImage}
          fill
          priority
        />
      )}

      <div className={styles.heroWrapper}>
        {product.imagePhone && (
          <motion.div
            className={styles.heroImagePhoneWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Image
              src={product.imagePhone}
              alt={`${product.name} preview`}
              width={360 / 1.75}
              height={780 / 1.75}
              className={styles.imagePhone}
            />
          </motion.div>
        )}
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.subtitle}>{product.description}</p>

          {product.url && (
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
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <FaGlobe className={styles.icon} />
                {isGame ? "Play Game" : "Visit Site"}
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
