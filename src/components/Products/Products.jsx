"use client";

import styles from "./products.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../../../services/firebase";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

const DESCRIPTION_WORD_LIMIT = 14;

function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function getShortDescription(description) {
  if (typeof description !== "string") return "";

  const words = description.trim().split(/\s+/);
  if (words.length <= DESCRIPTION_WORD_LIMIT) return description;

  return `${words.slice(0, DESCRIPTION_WORD_LIMIT).join(" ")}...`;
}

export default function Products() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [hasFetchedProducts, setHasFetchedProducts] = useState(false);
  const [settledImageIds, setSettledImageIds] = useState(() => new Set());
  const [loadedImageIds, setLoadedImageIds] = useState(() => new Set());
  const [selectedType, setSelectedType] = useState("All Products");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        const productsQuery = query(
          collection(db, "products"),
          orderBy("createdAt", "desc"),
        );
        const snapshot = await getDocs(productsQuery);
        const firestoreProducts = await Promise.all(
          snapshot.docs.map(async (productDoc) => {
            const data = productDoc.data();
            let imageUrl = null;

            if (
              typeof data.imagePrimary === "string" &&
              data.imagePrimary.trim().length > 0
            ) {
              try {
                imageUrl = await getDownloadURL(
                  ref(storage, data.imagePrimary.trim()),
                );
              } catch (error) {
                console.error(
                  `Failed to resolve the Storage image for product ${productDoc.id}.`,
                  error,
                );
              }
            } else {
              console.error(
                `Firestore product ${productDoc.id} has no valid imagePrimary path.`,
              );
            }

            return {
              id: productDoc.id,
              name: data.name,
              description: data.description,
              type: data.type,
              imageUrl,
            };
          }),
        );

        if (isMounted) {
          setProducts(firestoreProducts);
        }
      } catch (error) {
        console.error("Failed to fetch products from Firestore.", error);
      } finally {
        if (isMounted) {
          setHasFetchedProducts(true);
          ScrollToTop();
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const productTypes = useMemo(() => {
    const types = products
      .map((product) => product.type)
      .filter((type) => typeof type === "string" && type.trim().length > 0);
    return ["All Products", ...new Set(types)];
  }, [products]);

  const filteredProducts = useMemo(
    () =>
      selectedType === "All Products"
        ? products
        : products.filter((product) => product.type === selectedType),
    [products, selectedType],
  );
  const isLoading =
    !hasFetchedProducts ||
    products.some(
      (product) => product.imageUrl && !settledImageIds.has(product.id),
    );

  const handleImageSettled = (productId) => {
    setSettledImageIds((imageIds) => {
      const nextImageIds = new Set(imageIds);
      nextImageIds.add(productId);
      return nextImageIds;
    });
  };

  const handleImageLoaded = (productId) => {
    setLoadedImageIds((imageIds) => {
      const nextImageIds = new Set(imageIds);
      nextImageIds.add(productId);
      return nextImageIds;
    });
    handleImageSettled(productId);
  };

  return (
    <>
      <LoadingOverlay
        isLoading={isLoading}
        label="Loading products"
        onExitComplete={ScrollToTop}
      />
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
              <div className={styles.imageFrame}>
                <span className={styles.imageFallback} aria-hidden="true">
                  {product.name?.trim().charAt(0).toUpperCase() || "?"}
                </span>
                {product.imageUrl && (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={500}
                    height={300}
                    className={`${styles.image} ${loadedImageIds.has(product.id) ? styles.imageLoaded : ""}`}
                    sizes="(max-width: 600px) 56px, 80px"
                    loading="eager"
                    onLoad={() => handleImageLoaded(product.id)}
                    onError={() => handleImageSettled(product.id)}
                  />
                )}
              </div>
              <div className={styles.cardContent}>
                <h3>{product.name}</h3>
                <p>{getShortDescription(product.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
