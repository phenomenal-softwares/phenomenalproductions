"use client";

import { useEffect } from "react";
import styles from "./AdditionalInformation.module.css";

export default function AdditionalInformation({ product, onReady }) {
  const information =
    typeof product.additionalInformation === "string"
      ? product.additionalInformation.trim()
      : "";

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Additional Information</h2>
        <p className={styles.text}>
          {information ||
            "No additional information for this product."}
        </p>
      </div>
    </section>
  );
}
