"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import * as featureIcons from "react-icons/fa";

export default function FeaturesSection({ product }) {
  const features = Array.isArray(product.features) ? product.features : [];

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
        {features.map((feature, idx) => {
          const Icon =
            typeof feature.icon === "string" &&
            Object.hasOwn(featureIcons, feature.icon) &&
            typeof featureIcons[feature.icon] === "function"
              ? featureIcons[feature.icon]
              : null;

          return (
            <motion.div
              className={styles.card}
              key={`${feature.title}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {Icon && (
                <div className={styles.icon}>
                  <Icon />
                </div>
              )}
              <h3>{feature.title}</h3>
              <p>{feature.desc ?? feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
