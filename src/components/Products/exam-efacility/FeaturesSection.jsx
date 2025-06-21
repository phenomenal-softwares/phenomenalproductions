// components/Products/exam-efacility/FeaturesSection.jsx

"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaLaptopCode, FaUserShield, FaChartBar, FaGlobeAfrica, FaEye, FaBolt, FaClipboardList } from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Admin Suite",
    desc: "Manage exams, students, results and more — all in one place."
  },
  {
    icon: <FaLaptopCode />,
    title: "CBT Interface",
    desc: "Modern and mobile-friendly testing environment for smooth experiences."
  },
  {
    icon: <FaUserShield />,
    title: "Security & Integrity",
    desc: "Anti-cheat, secure logins, and monitoring features to keep assessments honest."
  },
  {
    icon: <FaChartBar />,
    title: "Detailed Reports",
    desc: "Real-time performance data and automatic result processing."
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Student Portal",
    desc: "A personalized dashboard where students can take exams and review results."
  },
  {
    icon: <FaEye />,
    title: "Parent Access",
    desc: "Optional portal for parents to monitor their ward's performance and attendance."
  },
  {
    icon: <FaBolt />,
    title: "Highly Versatile",
    desc: "Can be customized for schools, training centers, corporate tests, or any assessment scenario."
  },
  {
    icon: <FaClipboardList />,
    title: "Supports CA & Assignments",
    desc: "Flexible system supports continuous assessment, term tests, or weekly tasks."
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
