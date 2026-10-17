"use client";

import { useEffect, useRef } from "react";
import styles from "./ProductsHero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

export default function ProductsHero({ product, onReady, onError }) {
  const isGame = product.type === "game";
  const imageCount = Number(Boolean(product.imagePrimary)) +
    Number(Boolean(product.imagePhone));
  const loadedImages = useRef(new Set());

  useEffect(() => {
    if (imageCount === 0) onReady?.();
  }, [imageCount, onReady]);

  function handleImageLoad(imageName) {
    loadedImages.current.add(imageName);
    if (loadedImages.current.size === imageCount) onReady?.();
  }

  function handleImageError(imageName) {
    onError?.(new Error(`Failed to load product ${imageName} image.`));
  }

  return (
    <section className={styles.heroSection}>
      {product.imagePrimary && (
        <Image
          src={product.imagePrimary}
          alt={`${product.name} background`}
          className={styles.bgImage}
          fill
          priority
          onLoad={() => handleImageLoad("primary")}
          onError={() => handleImageError("primary")}
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
              onLoad={() => handleImageLoad("phone")}
              onError={() => handleImageError("phone")}
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
