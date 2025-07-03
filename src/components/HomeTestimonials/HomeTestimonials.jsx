"use client";

import styles from "./HomeTestimonials.module.css";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/testimonials/habsag.jpg",
    alt: "Habsag Studios",
    link: "https://wa.me/2349073605341",
  },
  {
    src: "/testimonials/cornerstone.jpg",
    alt: "Cornerstone",
    link: "https://www.instagram.com/_cornerstonecreativestudio?igsh=ZXJyMTJ2cXp4cXZw",
  },
  {
    src: "/testimonials/eruobami.jpg",
    alt: "Eruobami",
    link: "https://www.facebook.com/opeyemi.eruobami.1422",
  },
  {
    src: "/testimonials/arkoffire.jpg",
    alt: "Ark of Fire",
    link: "https://www.facebook.com/afodanoah.adebayo",
  },
  {
    src: "/testimonials/winpay.jpg",
    alt: "Winpay",
    link: "https://www.facebook.com/WinpayHQ",
  },
  {
    src: "/testimonials/firstlady.jpg",
    alt: "FirstLady",
    link: "https://wa.me/2349076267713",
  },
];

const testimonials = [
  {
    name: "Mr. Habeeb Abdulkareem",
    title: "Founder, Habsag Studios",
    phone: "+234 907 360 5341",
    photo: "/testimonials/abdulkareem.jpg",
    comment:
      `As a trusted partner, they've consistently delivered top-notch software solutions that exceed expectations. 
      If you're looking for a reliable software company that 
      truly cares about your project's success, look no further than Phenomenal Productions. Highly recommended!`,
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
