"use client";

import styles from "./products.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import products from "@/data/products";
import { useState, useMemo } from "react";
import { FaFilter } from "react-icons/fa";

export default function Products() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("All Products");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Get unique product types
  const productTypes = useMemo(() => {
    const types = products.map((p) => p.type);
    return ["All Products", ...new Set(types)];
  }, []);

  // Filter products based on type
  const filteredProducts =
    selectedType === "All Products"
      ? products
      : products.filter((p) => p.type === selectedType);

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
        Explore our powerful and user-friendly tools built to help businesses,
        schools, and everyday users thrive in the digital world.
      </motion.p>

      {/* Filter Bar */}
      <motion.div
        className={styles.filterBar}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <FaFilter className={styles.filterIcon} />

        {/* Dropdown wrapper with arrow */}
        <div className={styles.dropdownWrapper}>
          <select
            value={selectedType}
            onChange={(e) => {
              setSelectedType(e.target.value);
              setDropdownOpen(false); // close after selection
            }}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
            className={styles.dropdown}
          >
            {productTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <span
            className={`${styles.arrow} ${dropdownOpen ? styles.open : ""}`}
          />
        </div>

        <span className={styles.results}>
          {filteredProducts.length} results
        </span>
      </motion.div>

      {/* Products Grid */}
      <div className={styles.grid}>
        {filteredProducts.map((product, index) => (
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
