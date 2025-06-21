"use client";

import styles from "./products.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import products from "@/data/products";

export default function ProductsPage() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Products
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Explore our powerful and user-friendly tools built to help businesses, schools, and everyday users thrive in the digital world.
      </motion.p>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className={styles.card}
            onClick={() => router.push(`/products/${product.id}`)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={300}
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
