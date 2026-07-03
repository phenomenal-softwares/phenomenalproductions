"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const quotes = [
  "A website can make the whole world know about your business",
  "You can own a mobile app that will be used by millions",
  "Build digital products that connect with people",
  "Transform your vision into world-class platforms",
  "Let your organization speak on the web and beyond",
];

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>?/[]{}";

export default function HeroSection() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(quotes[0]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Scramble animation
  useEffect(() => {
    const target = quotes[quoteIndex];

    let frame = 0;

    // Every character gets a random reveal frame
    const revealFrames = target.split("").map((char) => {
      if (char === " ") return 0;
      return Math.floor(Math.random() * 18) + 8;
    });

    const interval = setInterval(() => {
      frame++;

      const output = target
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";

          if (frame >= revealFrames[index]) {
            return char;
          }

          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setDisplayedText(output);

      if (frame > Math.max(...revealFrames)) {
        clearInterval(interval);
        setDisplayedText(target);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [quoteIndex]);

  // Rotate quotes
  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <motion.div
        className={styles.aurora1}
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.56, 0.84, 0.64, 0.56],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className={styles.aurora2}
        animate={{
          x: [0, -100, 90, 0],
          y: [0, 80, -50, 0],
          scale: [1, 0.85, 1.15, 1],
          opacity: [0.56, 0.84, 0.64, 0.56],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <motion.h1
            key={quoteIndex}
            className={styles.typing}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            {displayedText}
          </motion.h1>
        </AnimatePresence>

        <motion.button className={styles.ctaButton} variants={itemVariants}>
          <Link
            href="/client-form"
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Create Your Website or App
          </Link>
        </motion.button>
      </div>
    </div>
  );
}
