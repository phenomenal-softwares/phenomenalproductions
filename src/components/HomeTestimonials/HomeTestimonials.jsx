"use client";

import styles from "./HomeTestimonials.module.css";
import { motion } from "framer-motion";

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png",
    alt: "Facebook",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    alt: "Microsoft",
  },
  {
    src: "https://seeklogo.com/images/P/paystack-logo-F237C0A6DB-seeklogo.com.png",
    alt: "Paystack",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flutterwave_Logo.png",
    alt: "Flutterwave",
  },
];

export default function HomeTestimonials() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Trusted by organizations and brands that value excellence
      </h2>
      <div className={styles.logoGrid}>
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className={styles.logoItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={logo.src} alt={logo.alt} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
