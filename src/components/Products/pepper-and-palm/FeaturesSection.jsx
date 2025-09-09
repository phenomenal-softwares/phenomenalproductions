"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaShoppingBag,
  FaTabletAlt,
  FaTruck,
  FaGlobeAfrica,
  FaThLarge,
  FaSearch,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShoppingCart />,
    title: "Seamless Online Shopping",
    desc: "Browse and purchase a wide range of meals from the comfort of your home.",
  },
  {
    icon: <FaShoppingBag />,
    title: "User-Friendly Experience",
    desc: "Intuitive layout and smooth navigation make shopping simple and enjoyable.",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Traditional Delicacies",
    desc: "Enjoy a variety of traditional meals like Jollof rice, fried rice, and pounded yam.",
  },
  {
    icon: <FaThLarge />,
    title: "Dishes Category",
    desc: "Filter dishes by categories like rice, grills, snacks, and swallows.",
  },
  {
    icon: <FaSearch />,
    title: "Search Meals",
    desc: "search meals by name to find exactly what you're craving.",
  },
  {
    icon: <FaStar />,
    title: "Meal Highlights",
    desc: "Each item is showcased with clear details, images, and key selling points.",
  },
  {
    icon: <FaTabletAlt />,
    title: "Modern, Responsive Design",
    desc: "A sleek interface that looks great and works smoothly on all devices.",
  },
  {
    icon: <FaTruck />,
    title: "Order & Delivery System",
    desc: "Add to cart, place your orders, and get products delivered right to your door.",
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
