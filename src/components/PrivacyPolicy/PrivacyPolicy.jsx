"use client";

import React from "react";
import { motion } from "framer-motion";
import "./privacy.css";

const privacyContent = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal details such as your name, email address, phone number, and any information you provide when filling out forms or engaging our services.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Information collected is used to provide and improve our services, respond to inquiries, process payments, and send important updates regarding your project or account.",
  },
  {
    title: "3. Data Storage & Security",
    content:
      "We store your data securely and take reasonable steps to protect it from unauthorized access, alteration, or disclosure. We use SSL encryption and secure servers.",
  },
  {
    title: "4. Third-Party Services",
    content:
      "We may share your information with trusted third-party tools or vendors (e.g., payment processors, email services) strictly for service delivery. They are obligated to maintain confidentiality.",
  },
  {
    title: "5. Cookies & Tracking",
    content:
      "Our website may use cookies to enhance user experience and monitor traffic. You can disable cookies in your browser settings if preferred.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to request access, correction, or deletion of your personal data. Contact us at phenomenaldevs@gmail.com for any data-related requests.",
  },
  {
    title: "7. Updates to This Policy",
    content:
      "This privacy policy may be updated occasionally. Any changes will be posted on this page with a new 'Last Updated' date.",
  },
  {
    title: "8. Contact",
    content:
      "For questions about this policy or how your data is handled, contact us at phenomenaldevs@gmail.com.",
  },
];


export default function PrivacyPolicy() {
  return (
    <section className="privacy-container">
      <motion.h1
        className="privacy-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        className="updated-date"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Last updated: July 3, 2025
      </motion.p>

      <ul className="privacy-list">
        {privacyContent.map((item, index) => (
          <motion.li
            key={index}
            className="privacy-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <strong>{item.title}</strong>
            <p>{item.content}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}