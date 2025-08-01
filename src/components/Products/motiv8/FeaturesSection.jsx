"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaQuoteRight,
  FaLayerGroup,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaQuoteRight />,
    title: "Inspiring Random Quotes",
    desc: "Get powerful, thought-provoking quotes every time you refresh.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Quote Categories",
    desc: "Explore quotes by themes—motivation, love, wisdom, and more.",
  },
  {
    icon: <FaHeart />,
    title: "Save Your Favorites",
    desc: "Bookmark quotes that speak to you for easy access later.",
  },
  {
    icon: <FaShareAlt />,
    title: "Share with Friends",
    desc: "Easily share quotes across social media or messaging apps.",
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Features at a Glance
      </motion.h2>

      <div className={styles.grid}>
        {features.map((feature, idx) => (
          <motion.div
            className={styles.card}
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
