"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./LoadingOverlay.module.css";

export default function LoadingOverlay({
  isLoading,
  label = "Loading",
  onExitComplete,
}) {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {isLoading && (
        <motion.div
          className={styles.overlay}
          role="status"
          aria-label={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className={styles.loader}>
            <Image
              src="/images/phen-logo-eagle-bg-yellow.png"
              alt=""
              width={160}
              height={160}
              priority
              className={styles.logo}
            />
            <span className={styles.spinner} aria-hidden="true" />
            <span className={styles.label}>{label}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}