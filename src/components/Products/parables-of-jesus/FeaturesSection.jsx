"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaBible,
  FaLightbulb,
  FaImage,
  FaLanguage,
  FaAdjust,
  FaMobileAlt,
  FaCreativeCommons
} from "react-icons/fa";

const features = [
  {
    icon: <FaBible />,
    title: "Complete Parables Collection",
    desc: "Explore every parable of Jesus with direct Bible references for deeper study.",
  },
  {
    icon: <FaLightbulb />,
    title: "Simple Interpretations",
    desc: "Understand each parable through clear, concise, and spiritually sound explanations.",
  },
  {
    icon: <FaImage />,
    title: "Illustrative Parable Images",
    desc: "Each parable is accompanied by thoughtful images to aid visualization and memory.",
  },
  {
    icon: <FaLanguage />,
    title: "Dual Bible Versions",
    desc: "Compare the parables in both KJV and WEB translations for richer insight.",
  },
  {
    icon: <FaAdjust />,
    title: "Light & Dark Themes",
    desc: "Seamlessly switch between light and dark modes to suit your reading environment.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Coming to Android & iOS",
    desc: "The app will soon be available on both Google Play and the App Store for all users.",
  },
  {
    icon: <FaCreativeCommons />,
    title: "Image Attribution",
    desc: "All images used remain the property of FreeBibleImages and their original contributors.",
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
