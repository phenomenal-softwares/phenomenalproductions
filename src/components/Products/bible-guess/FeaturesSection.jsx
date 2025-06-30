"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaDice,
  FaSearch,
  FaGlobe,
  FaSkullCrossbones,
  FaMapMarkedAlt,
  FaGamepad,
  FaBookOpen,
} from "react-icons/fa";

const features = [
  {
    icon: <FaDice />,
    title: "Guess the Letters",
    desc: "Sharpen your Bible knowledge by guessing letters in names, places, and keywords from Scripture.",
  },
  {
    icon: <FaSearch />,
    title: "Name Lookup",
    desc: "Explore the meaning, origin, and background of biblical names across both Testaments.",
  },
  {
    icon: <FaGlobe />,
    title: "Names of God",
    desc: "Discover the powerful and diverse names of God as revealed throughout the Bible.",
  },
  {
    icon: <FaSkullCrossbones />,
    title: "Pagan Gods & Idols",
    desc: "Understand the gods, idols, and false deities worshipped by ancient pagan nations in Scripture.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Places in the Bible",
    desc: "Study significant biblical locations—from Eden to Jerusalem—with rich historical context.",
  },
  {
    icon: <FaGamepad />,
    title: "Gamified Experience",
    desc: "Have fun while learning with features like hints and power-ups.",
  },
  {
    icon: <FaBookOpen />,
    title: "Scripture References",
    desc: "Access accurate Bible references throughout the app for deeper study and verification.",
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
