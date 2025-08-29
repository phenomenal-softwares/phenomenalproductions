"use client";

import { useState } from "react";
import styles from "./ShowcaseSection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaImages } from "react-icons/fa";

const imagePaths = [
  "/products/exam-efacility/shot1.jpg",
  "/products/exam-efacility/shot2.jpg",
  "/products/exam-efacility/shot3.png",
  "/products/exam-efacility/shot4.jpg",
  "/products/exam-efacility/shot5.jpg",
  "/products/exam-efacility/shot6.jpg",
  "/products/exam-efacility/shot7.jpg",
  "/products/exam-efacility/shot8.jpg",
  "/products/exam-efacility/shot9.jpg",
  "/products/exam-efacility/shot10.jpg",
  "/products/exam-efacility/shot11.jpg",
  "/products/exam-efacility/shot12.jpg",
  "/products/exam-efacility/shot13.jpg",
  "/products/exam-efacility/shot14.jpg",
  "/products/exam-efacility/shot15.jpg",
  "/products/exam-efacility/shot16.jpg",
  "/products/exam-efacility/shot17.jpg",
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