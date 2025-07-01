"use client";

import styles from "./HomeTestimonials.module.css";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/testimonials/habsag.jpg",
    alt: "Habsag Studios",
    link: "https://habsag.com", // replace with real link
  },
  {
    src: "/testimonials/cornerstone.jpg",
    alt: "Cornerstone",
    link: "https://cornerstone.com", // replace with real link
  },
  {
    src: "/testimonials/eruobami.jpg",
    alt: "Eruobami",
    link: "https://eruobami.com", // replace with real link
  },
  {
    src: "/testimonials/arkoffire.jpg",
    alt: "Ark of Fire",
    link: "https://arkoffire.com", // replace with real link
  },
  {
    src: "/testimonials/winpay.jpg",
    alt: "Winpay",
    link: "https://winpay.com", // replace with real link
  },
  {
    src: "/testimonials/firstlady.jpg",
    alt: "FirstLady",
    link: "https://firstlady.com", // replace with real link
  },
];

const testimonials = [
  {
    name: "Mr. Habeeb Abdulkareem",
    title: "Founder, Habsag Studios",
    phone: "+234 907 360 5341",
    photo: "/testimonials/abdulkareem.jpg",
    comment:
      "Phenomenal Productions transformed our school’s digital presence. The website is clean, fast, and easy to navigate. Highly recommended!",
  },
  {
    name: "Prophet B. O. Oyesiji",
    title: "Lifelong Companion",
    phone: "+234 701 328 3133",
    photo: "/testimonials/oyesiji.jpg",
    comment: `I wholeheartedly recommend Phenomenal Productions for all your tech-related needs. With a proven track record of 
    delivering high-quality digital solutions, their expertise and creativity shine through in every project.`,
  },
];

export default function HomeTestimonials() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>
        Trusted by organizations and brands that value excellence!
      </h2>

      {/* Logo Grid */}
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
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Comments Section */}
      <div className={styles.testimonialsGrid}>
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className={styles.testimonialCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <div className={styles.profile}>
              <img src={t.photo} alt={t.name} className={styles.photo} />
              <div className={styles.clientInfo}>
                <strong>{t.name}</strong>
                <div>{t.title}</div>
                <div>{t.phone}</div>
              </div>
            </div>
            <p className={styles.comment}>{t.comment}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
