"use client";

import styles from "./Testimonials.module.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Okafor",
    title: "CEO, JTech Innovations",
    image: "/testimonials/client1.jpg",
    message: "Phenomenal Productions brought our vision to life with ease. Truly professional and efficient.",
  },
  {
    name: "Michael Adeyemi",
    title: "Founder, MyFarmApp",
    image: "/testimonials/client2.jpg",
    message: "We had high expectations — and they exceeded every one. Highly recommended.",
  },
  {
    name: "Fatima Lawal",
    title: "Brand Strategist",
    image: "/testimonials/client3.jpg",
    message: "Their attention to detail and creativity is unmatched. We’ll definitely be working together again.",
  },
  {
    name: "Chuka Nwankwo",
    title: "CTO, AgroChain",
    image: "/testimonials/client4.jpg",
    message: "Phenomenal delivered under pressure, on time and on budget. Brilliant work!",
  },
  {
    name: "Aisha Mohammed",
    title: "Digital Marketer",
    image: "/testimonials/client5.jpg",
    message: "From idea to product, they were with us every step of the way. Real value for money.",
  },
  {
    name: "Bayo Ogunleye",
    title: "App Founder",
    image: "/testimonials/client6.jpg",
    message: "Great communication and solid tech skills. Would recommend any day.",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className={styles.gridSection}>
      <div className={styles.gridContainer}>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={t.image} alt={t.name} className={styles.avatar} />
            <h3 className={styles.name}>{t.name}</h3>
            <p className={styles.title}>{t.title}</p>
            <p className={styles.message}>&ldquo;{t.message}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
