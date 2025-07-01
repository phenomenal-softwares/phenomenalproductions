"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCarrot,
  FaConciergeBell,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSearch />,
    title: "Smart Recipe Search",
    desc: "Quickly find recipes for your favorite meals, snacks, and drinks.",
  },
  {
    icon: <FaCarrot />,
    title: "Clear Ingredient Lists",
    desc: "All ingredients are itemized with accurate quantities to make prep easy.",
  },
  {
    icon: <FaConciergeBell />,
    title: "Step-by-Step Instructions",
    desc: "Follow detailed, beginner-friendly directions to cook like a pro.",
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
