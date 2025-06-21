"use client";

import styles from "./HomeProducts.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

// Image imports
import heroImg from "../../../public/images/homeproducts/product-hero.jpg";
import product1 from "../../../public/images/homeproducts/product1.jpg";
import product2 from "../../../public/images/homeproducts/product2.jpg";
import product3 from "../../../public/images/homeproducts/product3.jpg";
import product4 from "../../../public/images/homeproducts/product4.jpg";
import product5 from "../../../public/images/homeproducts/product5.jpg";
import product6 from "../../../public/images/homeproducts/product6.jpg";
import product7 from "../../../public/images/homeproducts/product7.jpg";
import product8 from "../../../public/images/homeproducts/product8.png";

// Store product images in a variable
const images = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
];

export default function HomeProducts() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const scrollSpeed = 1.2;

    const scroll = () => {
      if (container) {
        // Only scroll if we're not already at the end
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft < maxScrollLeft) {
          container.scrollLeft += scrollSpeed;
        } else {
          clearInterval(scrollInterval);
        }
      }
    };

    const scrollInterval = setInterval(scroll, 10);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <motion.section
      className={styles.productsSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={styles.headerSection}>
        <div className={styles.left}>
          <Image
            src={heroImg}
            alt="Innovation"
            className={styles.heroImage}
            placeholder="blur"
          />
        </div>
        <div className={styles.heading}>
          <h2>Our Products</h2>
          <p>
            From web platforms to exam tools and business solutions, and even
            games, our products are designed with the end-user in mind —
            intuitive, powerful, and accessible.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.slider} ref={scrollRef}>
          {[...images, ...images].map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Product ${(index % images.length) + 1}`}
              className={styles.slide}
              placeholder="blur"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <Link href="/products" className={styles.ctaBtn}>
          View Our Products
        </Link>
      </div>
    </motion.section>
  );
}
