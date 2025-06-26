"use client";

import React, { useState, useEffect } from "react";
import ThreeScene from "./ThreeScene";
import { motion } from "framer-motion";
import { FaChevronDown, FaCode } from "react-icons/fa";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const quotes = [
  "Give global visibility to your brand with our softwares.",
  "Build digital products that work as hard as you do.",
  "Transform your vision into world-class platforms.",
  "Let your business speak on the web and beyond.",
];

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const currentQuote = quotes[quoteIndex];

    const typeSpeed = isDeleting ? 30 : 80;
    const delay = isDeleting ? 600 : 1000;

    const timer = setTimeout(() => {
      const updatedText = isDeleting
        ? currentQuote.substring(0, charIndex - 1)
        : currentQuote.substring(0, charIndex + 1);

      setDisplayedText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && updatedText === currentQuote) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, quoteIndex]);

  const scrollToNextSection = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.heroWrapper}>
      <ThreeScene />
      <div className={styles.overlay}>
        <h1 className={styles.typing}>
          {displayedText}
          <span className={styles.cursor}>|</span>
        </h1>
        <motion.div
          className={styles.ctaButtonGroup}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button className={styles.ctaButton} variants={itemVariants}>
            <Link href="/contact" style={{ color: "inherit", textDecoration: "none" }}>
            <FaCode style={{ marginRight: 8 }} />
            Create Your Website or App
            </Link>
          </motion.button>

          <motion.button
            className={styles.scrollBtn}
            onClick={scrollToNextSection}
            variants={itemVariants}
          >
            <FaChevronDown style={{ marginRight: 8 }} />
            Scroll Down
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
