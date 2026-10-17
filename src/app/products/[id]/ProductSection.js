"use client";

import { useCallback, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./ProductSection.module.css";

const skeletonCount = {
  hero: 1,
  features: 3,
  showcase: 1,
  pricing: 1,
  cta: 2,
  developer: 4,
};

export default function ProductSection({
  section,
  product,
  Component,
  onLoadError,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const isPending = !product || !isLoaded;

  const handleLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(
    (error) => {
      console.error(
        `Failed to load the ${section} section for product ${product?.id}.`,
        error,
      );
      onLoadError();
    },
    [onLoadError, product?.id, section],
  );

  return (
    <div
      className={`${styles.boundary} ${styles[section]}`}
      aria-busy={isPending}
    >
      {product && (
        <div className={isPending ? styles.hiddenContent : undefined}>
          <Component
            product={product}
            onReady={handleLoaded}
            onError={handleError}
          />
        </div>
      )}
      {isPending && (
        <div
          className={`${styles.skeleton} ${styles[`${section}Skeleton`]}`}
          aria-hidden="true"
        >
          {section === "hero" ? (
            <div className={styles.heroContent}>
              <Skeleton count={2} height={34} width="100%" />
              <Skeleton count={4} height={88} />
              <Skeleton height={62} width={150} />
            </div>
          ) : (
            <>
              <Skeleton height={30} width="45%" className={styles.heading} />
              <div className={styles.skeletonItems}>
                {Array.from({ length: skeletonCount[section] }, (_, index) => (
                  <div className={styles.item} key={index}>
                    <Skeleton height={section === "showcase" ? 240 : 22} />
                    {section !== "showcase" && (
                      <Skeleton count={2} height={14} />
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
