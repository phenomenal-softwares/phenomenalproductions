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
  FaToggleOn,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShoppingCart />,
    title: "Seamless Online Shopping",
    desc: "Browse and purchase a wide range of fashion items from the comfort of your home.",
  },
  {
    icon: <FaShoppingBag />,
    title: "User-Friendly Experience",
    desc: "Intuitive layout and smooth navigation make shopping simple and enjoyable.",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Traditional Attires",
    desc: "Explore a curated selection of authentic traditional outfits from various cultures.",
  },
  {
    icon: <FaThLarge />,
    title: "Fashion Category",
    desc: "Easily filter products by categories like tops, accessories, and more.",
  },
  {
    icon: <FaSearch />,
    title: "Search Clothes",
    desc: "Quickly find specific items using our powerful search functionality.",
  },
  {
    icon: <FaToggleOn />,
    title: "Select Colors & Sizes",
    desc: "Choose from a variety of colors and sizes to find the perfect fit.",
  },
  {
    icon: <FaStar />,
    title: "Item Highlights",
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
