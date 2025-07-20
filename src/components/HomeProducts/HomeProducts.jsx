"use client";
import React from "react";

import "./HomeProducts.css";
import styles from "./HomeProducts.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Image imports
import heroImg from "../../../public/images/homeproducts/product-hero.jpg";
import product12 from "../../../public/images/homeproducts/product12.jpeg";
import product1 from "../../../public/images/homeproducts/product1.jpg";
import product2 from "../../../public/images/homeproducts/product2.jpg";
import product3 from "../../../public/images/homeproducts/product3.jpg";
import product4 from "../../../public/images/homeproducts/product4.jpg";
import product5 from "../../../public/images/homeproducts/product5.jpg";
import product6 from "../../../public/images/homeproducts/product6.png";
import product7 from "../../../public/images/homeproducts/product7.jpg";

const images = [
  product12,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
];

export default function HomeProducts() {
  return (
    <motion.section
      className={styles.productsSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header */}
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

      {/* Carousel */}
      <div className="carousel-section">
        <div className="carousel">
          {images.map((img, i) => (
            <React.Fragment key={i}>
              <div
                className={`card c${i + 1}`}
                style={{
                  backgroundImage: `url(${img.src})`,
                }}
              ></div>
              <div className={`cardb cb${i + 1}`}></div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <Link href="/products" className={styles.ctaBtn}>
          Check Out Our Products
        </Link>
      </div>
    </motion.section>
  );
}
