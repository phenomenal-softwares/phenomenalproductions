"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTasks,
  FaPuzzlePiece,
  FaChartLine,
  FaTrophy,
  FaAdjust,
  FaMobileAlt
} from "react-icons/fa";

const features = [
  {
    icon: <FaTasks />,
    title: "Daily Goal Management",
    desc: "Easily set, edit, and delete your daily goals and habits to stay focused and productive.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Break Goals into Subtasks",
    desc: "Structure complex habits by creating actionable sub-goals that keep you on track.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Habit Formation Engine",
    desc: "Built on the science of Implementation Intention, the app helps turn actions into lasting habits.",
  },
  {
    icon: <FaChartLine />,
    title: "Track Your Progress",
    desc: "Visual stats and streak trackers keep you motivated and reveal how consistent you are.",
  },
  {
    icon: <FaTrophy />,
    title: "Achievement Rewards",
    desc: "Earn milestones and unlock badges as you build better habits and reach personal goals.",
  },
  {
    icon: <FaAdjust />,
    title: "Light & Dark Themes",
    desc: "Customize your viewing experience with sleek light and dark modes to suit your environment.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Cross-Platform Support",
    desc: "Coming soon to Android and iOS, so you can build better habits anytime, anywhere.",
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
