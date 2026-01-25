"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaGamepad,
  FaBolt,
  FaShoppingCart,
  FaTrophy,
  FaChartBar,
  FaCog,
  FaMobileAlt
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "Brain Training Meets Fun",
    desc: "Sharpen memory, focus, and cognitive speed through a playful card-picking experience designed to challenge the mind without feeling like work.",
  },
  {
    icon: <FaGamepad />,
    title: "Immersive & Challenging Gameplay",
    desc: "Progress through increasingly demanding levels that reward skill, attention, and strategy — keeping players engaged and motivated.",
  },
  {
    icon: <FaBolt />,
    title: "Power-Ups & Boosts",
    desc: "Unlock special power-ups that enhance gameplay, give tactical advantages, and help you overcome tougher stages.",
  },
  {
    icon: <FaShoppingCart />,
    title: "In-Game Shop",
    desc: "Use earned coins to purchase power-ups, bonuses, and enhancements that personalize your gameplay experience.",
  },
  {
    icon: <FaTrophy />,
    title: "Achievements & Milestones",
    desc: "Complete challenges and unlock achievements that showcase your progress, skill, and dedication.",
  },
  {
    icon: <FaChartBar />,
    title: "Detailed Player Stats",
    desc: "Track performance metrics such as high scores, progress history, and gameplay trends over time.",
  },
  {
    icon: <FaCog />,
    title: "Custom Game Settings",
    desc: "Adjust sound, difficulty, and gameplay preferences to suit your style — whether casual or competitive.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Coming Soon on Android & iOS",
    desc: "The full mobile experience is on the way, bringing optimized performance, native controls, and seamless gameplay to Android and iOS devices.",
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
