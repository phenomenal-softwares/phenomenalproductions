"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./GeneralPricingTable.module.css";

export default function GeneralPricingTable() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.badge}>
            <FaMoneyBillWave />
            Affordable & Flexible Pricing
          </div>

          <h2>
            Transparent Pricing,
            <span> Tailored to Your Budget.</span>
          </h2>

          <p>
            Every business is different, so every solution we build is
            uniquely priced. Our pricing guide provides estimated ranges
            for common projects, while the final cost depends on your
            specific features, design requirements, integrations, and
            timeline.
          </p>

          <p>
            Whether you are a startup, an individual, or an established
            organization, we work with your budget to deliver exceptional
            value without compromising quality.
          </p>

          <ul className={styles.highlights}>
            <li>Flexible pricing for every budget.</li>
            <li>No hidden charges.</li>
            <li>Custom quotations based on project scope.</li>
            <li>Scalable solutions that grow with your business.</li>
          </ul>

          <div className={styles.actions}>
            <a
              href="/images/GENERAL-PRICING-TABLE.png"
              download
              className={styles.downloadBtn}
            >
              <FaDownload />
              Download Pricing Table
            </a>

            <Link
              href="/client-form"
              className={styles.quoteBtn}
            >
              Request a Quote
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/GENERAL-PRICING-TABLE.png"
            alt="Phenomenal Productions General Pricing Table"
            width={900}
            height={1200}
            className={styles.image}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}