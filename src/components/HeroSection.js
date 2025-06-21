"use client";

import React, { useState, useEffect } from "react";
import ThreeScene from "./ThreeScene";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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
  const [showTop, setShowTop] = useState(false);

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

  // Toggle button behavior based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setShowTop(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const about = document.getElementById("about");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.heroWrapper}>
      <ThreeScene />
      <div className={styles.overlay}>
        <h1 className={styles.typing}>
          {displayedText}
          <span className={styles.cursor}>|</span>
        </h1>
        <button
          className={styles.ctaButton}
        >
          Create Your Website or App
        </button>
        <button
          className={styles.scrollBtn}
          onClick={showTop ? scrollToTop : scrollToNextSection}
        >
          {showTop ? (
            <>
              <FaChevronUp style={{ marginRight: 8 }} />
              Back to Top
            </>
          ) : (
            <>
              <FaChevronDown style={{ marginRight: 8 }} />
              Scroll Down
            </>
          )}
        </button>
      </div>
    </div>
  );
}
