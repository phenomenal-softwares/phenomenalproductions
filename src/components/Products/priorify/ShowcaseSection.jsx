"use client";

import styles from "./ShowcaseSection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const imagePaths = [
  "/products/priorify/shot1.jpg",
  "/products/priorify/shot2.jpg",
  "/products/priorify/shot3.jpg",
  "/products/priorify/shot4.jpg",
  "/products/priorify/shot5.jpg",
  "/products/priorify/shot6.jpg"
];

export default function ShowcaseSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <motion.section
      className={styles.showcaseSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Product Showcase</h2>

      <div className={styles.grid}>
        {imagePaths.map((src, index) => (
          <motion.div
            key={index}
            className={styles.imgWrapper}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedImg(src)}
          >
            <Image
              src={src}
              alt={`Screenshot ${index + 1}`}
              width={800}
              height={500}
              className={styles.image}
              placeholder="blur"
              blurDataURL={src}
            />
          </motion.div>
        ))}
      </div>

      {selectedImg && (
        <div className={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <Image
            src={selectedImg}
            alt="Expanded View"
            width={1200}
            height={700}
            className={styles.lightboxImg}
          />
        </div>
      )}
    </motion.section>
  );
}
