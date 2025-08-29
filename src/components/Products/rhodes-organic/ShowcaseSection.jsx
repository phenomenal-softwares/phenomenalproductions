"use client";

import { useState } from "react";
import styles from "./ShowcaseSection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaImages } from "react-icons/fa";

const imagePaths = [
  "/products/rhodes-organic/shot1.jpg",
  "/products/rhodes-organic/shot2.jpg",
  "/products/rhodes-organic/shot3.jpg",
  "/products/rhodes-organic/shot4.jpg",
  "/products/rhodes-organic/shot5.jpg",
  "/products/rhodes-organic/shot6.jpg",
  "/products/rhodes-organic/shot7.jpg",
  "/products/rhodes-organic/shot8.jpg"
];

export default function ShowcaseSection() {
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      className={styles.showcaseSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Product Showcase</h2>

      {/* Single clickable preview with permanent overlay */}
      <motion.div
        className={styles.previewWrapper}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={() => setOpen(true)}
      >
        <Image
          src={imagePaths[0]}
          alt="Main Screenshot"
          width={800}
          height={500}
          className={styles.image}
          placeholder="blur"
          blurDataURL={imagePaths[0]}
        />
        <div className={styles.overlay}>
          <FaImages className={styles.overlayIcon} />
          <span className={styles.overlayText}>View Gallery</span>
        </div>
      </motion.div>

      {/* Lightbox with all images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imagePaths.map((src) => ({ src }))}
        controller={{ closeOnBackdropClick: true }}
      />
    </motion.section>
  );
}
