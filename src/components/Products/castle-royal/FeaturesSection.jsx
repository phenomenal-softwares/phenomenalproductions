// components/Products/exam-efacility/FeaturesSection.jsx

"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaNewspaper,
  FaFutbol,
  FaImages,
  FaWpforms,
  FaUserGraduate,
  FaCalendarCheck,
  FaPalette,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSchool />,
    title: "Comprehensive School Website",
    desc: "All essential school features — from academics to admin — built into one beautiful platform.",
  },
  {
    icon: <FaNewspaper />,
    title: "News & Blog Updates",
    desc: "Engaging blog and news section with support for comments and post likes.",
  },
  {
    icon: <FaFutbol />,
    title: "Clubs & Extra-curricular",
    desc: "Showcase sports, clubs, and all non-academic school activities.",
  },
  {
    icon: <FaImages />,
    title: "Campus Gallery",
    desc: "A vibrant media section with photos and videos of school events and facilities.",
  },
  {
    icon: <FaWpforms />,
    title: "Online Applications",
    desc: "Easily downloadable or fillable application forms for prospective students.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Portal Access",
    desc: "Secure dashboard portals for students, parents, and staff with role-based features.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Appointment Scheduling",
    desc: "Allow visitors or parents to book appointments or meetings online.",
  },
  {
    icon: <FaPalette />,
    title: "Modern UI Design",
    desc: "Visually appealing, mobile-responsive, and thoughtfully arranged user interface.",
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
