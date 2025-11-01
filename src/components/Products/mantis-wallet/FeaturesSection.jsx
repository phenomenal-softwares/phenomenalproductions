"use client";

import styles from "./FeaturesSection.module.css";
import { motion } from "framer-motion";
import {
  FaLock,
  FaUniversity,
  FaMoneyBillWave,
  FaBell,
  FaHistory,
  FaQrcode,
  FaShareAlt,
  FaCreditCard,
  FaHandshake,
  FaUserCircle,
  FaHeadset,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt />,
    title: "Fintech Powerhouse",
    desc: "A modern, all-in-one finance app designed for seamless digital transactions and money management.",
  },
  {
    icon: <FaLock />,
    title: "Secure Login",
    desc: "Enjoy top-grade security with encrypted access and safe authentication measures.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Immersive Interface",
    desc: "A clean, responsive interface built for speed, clarity, and simplicity.",
  },
  {
    icon: <FaUniversity />,
    title: "Inter-Bank Transfers",
    desc: "Send and receive money instantly across banks with zero hassle.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Bill Payments",
    desc: "Pay airtime, data, cable TV, electricity, and betting bills all in one place.",
  },
  {
    icon: <FaBell />,
    title: "In-App Notifications",
    desc: "Stay informed with real-time alerts for every transaction and activity.",
  },
  {
    icon: <FaHistory />,
    title: "Transaction History",
    desc: "View, filter, and download your complete transaction records effortlessly.",
  },
  {
    icon: <FaQrcode />,
    title: "QR Code Scan-to-Pay",
    desc: "Pay on the go by scanning merchant QR codes with lightning speed.",
  },
  {
    icon: <FaShareAlt />,
    title: "Share Receipts",
    desc: "Instantly share your transaction receipts via WhatsApp, email, or file download.",
  },
  {
    icon: <FaCreditCard />,
    title: "Virtual Cards",
    desc: "Generate and manage virtual debit cards for secure online payments.",
  },
  {
    icon: <FaHandshake />,
    title: "Loan Services",
    desc: "Access quick, reliable loan options tailored to your financial profile.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    desc: "Get real-time assistance from our responsive in-app customer service team.",
  },
  {
    icon: <FaUserCircle />,
    title: "User Profile",
    desc: "Personalize your experience and manage your account all in one dashboard.",
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
