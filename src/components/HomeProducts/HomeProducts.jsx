"use client";
import React, { useEffect, useState } from "react";

import "./HomeProducts.css";
import styles from "./HomeProducts.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../../services/firebase";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [loadedProductIds, setLoadedProductIds] = useState(() => new Set());

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const productsQuery = query(
          collection(db, "products"),
          orderBy("createdAt", "desc"),
          limit(8),
        );
        const snapshot = await getDocs(productsQuery);
        const latestProducts = await Promise.all(
          snapshot.docs.map(async (productDoc) => {
            const imagePath = productDoc.data().imagePrimary;

            if (typeof imagePath !== "string" || imagePath.trim().length === 0) {
              console.error(
                `Firestore product ${productDoc.id} has no valid imagePrimary path.`,
              );
              return { id: productDoc.id, imageUrl: null };
            }

            try {
              const imageUrl = await getDownloadURL(
                ref(storage, imagePath.trim()),
              );
              return { id: productDoc.id, imageUrl };
            } catch (error) {
              console.error(
                `Failed to resolve the Storage image for product ${productDoc.id}.`,
                error,
              );
              return { id: productDoc.id, imageUrl: null };
            }
          }),
        );

        if (isMounted) {
          setProducts(latestProducts);
        }
      } catch (error) {
        console.error(
          "Failed to fetch home product images from Firestore.",
          error,
        );
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const productSlots = Array.from({ length: 8 }, (_, index) => products[index]);

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
            src="/images/homeProduct-hero.jpg"
            width={400}
            height={300}
            alt="Innovation"
            className={styles.heroImage}
            placeholder="blur"
            blurDataURL="/images/homeProduct-hero.jpg"
          />
        </div>
        <div className={styles.heading}>
          <h2>Our Products</h2>
          <p>
            From web applications to exam tools and e-commerce platforms, and even
            games, our products are designed with the end-user in mind —
            intuitive, powerful, and accessible.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-section">
        <div className="carousel">
          {productSlots.map((product, i) => {
            const isLoaded = product && loadedProductIds.has(product.id);
            const hasImageUrl =
              typeof product?.imageUrl === "string" &&
              product.imageUrl.length > 0;

            return (
              <React.Fragment key={product?.id ?? `product-slot-${i}`}>
                <div
                  className={`card c${i + 1}${isLoaded ? "" : " card-loading"}`}
                >
                  {hasImageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt=""
                      width={190}
                      height={190}
                      unoptimized
                      className={`product-image${
                        isLoaded ? " product-image-loaded" : ""
                      }`}
                      onLoad={() => {
                        setLoadedProductIds((loadedIds) => {
                          const nextLoadedIds = new Set(loadedIds);
                          nextLoadedIds.add(product.id);
                          return nextLoadedIds;
                        });
                      }}
                      onError={() => {
                        console.error(
                          `Failed to load the primary image for product ${product.id}.`,
                        );
                      }}
                    />
                  )}
                </div>
                <div className={`cardb cb${i + 1}`}></div>
              </React.Fragment>
            );
          })}
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
