"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaClock,
  FaSmile,
  FaCloudSun,
  FaMoon,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCalculator />,
    title: "Scientific Calculator",
    desc: "Perform both simple and advanced mathematical operations with precision.",
  },
  {
    icon: <FaClock />,
    title: "Time & Date Display",
    desc: "View real-time local time and date with ease.",
  },
  {
    icon: <FaSmile />,
    title: "Smart Greeting",
    desc: "Dynamic greetings that change based on the time of day.",
  },
  {
    icon: <FaCloudSun />,
    title: "Neomorphism UI",
    desc: "Modern soft-shadowed design that gives a tactile, elegant look.",
  },
  {
    icon: <FaMoon />,
    title: "Dark Mode Support",
    desc: "Switch between light and dark themes effortlessly.",
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
