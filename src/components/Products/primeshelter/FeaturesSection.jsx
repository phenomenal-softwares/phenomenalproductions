"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaHome,
  FaSearch,
  FaMapMarkedAlt,
  FaChartBar,
  FaImages,
  FaBuilding,
  FaClipboardList,
  FaUserTie,
  FaWpforms,
  FaListUl,
  FaUserLock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHome />,
    title: "Smart Property Management",
    desc: "Easily browse, manage, and showcase properties with an intuitive platform built for buyers, renters, and owners.",
  },
  {
    icon: <FaSearch />,
    title: "Advanced Search & Filters",
    desc: "Quickly find your dream home or land using powerful filters for location, price, property type, and more.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Interactive Navigation",
    desc: "Explore clean navigation links tailored for property seekers.",
  },
  {
    icon: <FaChartBar />,
    title: "Property Insights & Stats",
    desc: "Get valuable data on pricing trends, property features, and market stats to make informed decisions.",
  },
  {
    icon: <FaImages />,
    title: "High-Quality Photo Gallery",
    desc: "View crystal-clear images and photo galleries that bring properties to life before you schedule a visit.",
  },
  {
    icon: <FaBuilding />,
    title: "Explore Property Types",
    desc: "From apartments to duplexes, lands to luxury homes—explore different categories at a glance.",
  },
  {
    icon: <FaClipboardList />,
    title: "Engaging CTA Cards",
    desc: "Seamless action cards guide users to post requests, find agents, or list their property effortlessly.",
  },
  {
    icon: <FaUserTie />,
    title: "Verified Estate Agents",
    desc: "Connect with trusted and professional real estate agents near you for smooth transactions.",
  },
  {
    icon: <FaWpforms />,
    title: "Property Request Forms",
    desc: "Easily submit requests for the type of property you need, and let agents respond directly.",
  },
  {
    icon: <FaListUl />,
    title: "Dynamic Search Results",
    desc: "Get instant, well-organized search results with property details, images, and clear call-to-actions.",
  },
  {
    icon: <FaUserLock />,
    title: "Secure Login & Signup",
    desc: "Enjoy a modern authentication system with protected accounts and easy access across all devices.",
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
