import { motion } from "framer-motion";
//import styles from "./FeaturesSection.module.css";

export default function TestimonialsSection() {
  return (
    <motion.section
      //className={styles.features}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Testimonial Section</h2>
      <p>Coming soon...</p>
    </motion.section>
  );
}
