"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaDice,
  FaBolt,
  FaGlobeAfrica,
  FaChartBar,
  FaMedal,
  FaCoins,
  FaBrain,
  FaStore,
  FaMusic
} from "react-icons/fa";

const features = [
  {
    icon: <FaDice />,
    title: "Guess the Number",
    desc: "Challenge your brain to guess random numbers based on your current level and difficulty.",
  },
  {
    icon: <FaBolt />,
    title: "In-Game Powerups",
    desc: "Use hints, skips, and power boosts to overcome tricky stages and climb faster.",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Unlock Global Cities",
    desc: "Travel across major cities around the world as you progress through levels and earn XP.",
  },
  {
    icon: <FaChartBar />,
    title: "Game Stats & Streaks",
    desc: "Track your accuracy, speed, win streaks, and level progression with real-time stats.",
  },
  {
    icon: <FaMedal />,
    title: "Achievement Badges",
    desc: "Earn special milestones and unlock shiny trophies as your skills improve.",
  },
  {
    icon: <FaCoins />,
    title: "XP & Coin Rewards",
    desc: "Get rewarded with XP and in-game coins after every successful round or challenge.",
  },
  {
    icon: <FaBrain />,
    title: "Increasing Difficulty",
    desc: "Advance through levels that get more challenging to test and train your memory and logic.",
  },
  {
    icon: <FaStore />,
    title: "In-Game Shop",
    desc: "Spend earned coins to buy hints, unlock cities, or customize your game experience.",
  },
  {
    icon: <FaMusic />,
    title: "Cool Sounds & Music",
    desc: "Enjoy immersive background music and satisfying sound effects while you play.",
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
