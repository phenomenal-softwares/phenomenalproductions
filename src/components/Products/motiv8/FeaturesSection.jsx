"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaFilm,
  FaInfoCircle,
  FaMoon,
} from "react-icons/fa";

const features = [
  {
    icon: <FaFilm />,
    title: "Movie Search Engine",
    desc: "Quickly find any movie by title and get instant results.",
  },
  {
    icon: <FaInfoCircle />,
    title: "Complete Movie Details",
    desc: "Access cast, crew, synopsis, release year, IMDb rating, and more.",
  },
  {
    icon: <FaMoon />,
    title: "Dark Mode Ready",
    desc: "Enjoy a sleek dark theme that's easy on the eyes—day or night.",
  }
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
