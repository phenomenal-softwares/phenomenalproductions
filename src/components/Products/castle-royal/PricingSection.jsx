"use client";

import styles from "./PricingSection.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function PricingSection() {
  return (
    <motion.section
      className={styles.pricingSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.contentWrapper}>
        {/* Left: Image */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/pricing.jpg"
            alt="Custom pricing"
            width={500}
            height={400}
            className={styles.image}
            placeholder="blur"
            blurDataURL="/images/pricing.png"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Tailored Pricing Just for You!</h2>
          <p>
            Every client is unique — so is every project. Whether you’re a
            school, training institute, or business, we craft solutions that
            match your exact needs. Let’s discuss your goals and design a
            package that fits perfectly.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaWrapper}
          >
            <a
              href="https://wa.me/234808086792440"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <FaWhatsapp className={styles.icon} />
              Talk To Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
