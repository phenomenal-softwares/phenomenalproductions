"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCube,
  FaFlask,
  FaAtom,
  FaGraduationCap,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSearch />,
    title: "Molecule / Compound Search",
    desc: "Search for molecules and compounds by name to quickly locate any compound of interest.",
  },
  {
    icon: <FaCube />,
    title: "3D Structure Visualization",
    desc: "Explore molecules in an interactive 3D environment — rotate, zoom, and inspect structures from every angle.",
  },
  {
    icon: <FaFlask />,
    title: "Molecule Information",
    desc: "View detailed compound data including IUPAC name, chemical formula, molecular weight, and identifiers.",
  },
  {
    icon: <FaAtom />,
    title: "Popular Molecules",
    desc: "Instantly explore a curated A–Z list of common and widely studied molecules.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Learning Made Easier",
    desc: "Ideal for students, chemists, biochemists, and researchers learning molecular structures visually.",
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
