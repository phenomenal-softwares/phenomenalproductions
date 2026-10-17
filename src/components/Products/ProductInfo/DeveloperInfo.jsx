import { useEffect } from "react";
import styles from "./DeveloperInfo.module.css";

const developerFields = [
  ["mode", "Mode"],
  ["targetPlatforms", "Target Platforms"],
  ["languages", "Language"],
  ["framework", "Framework"],
  ["styling", "Styling"],
  ["animation", "Animations"],
  ["icons", "Icons"],
  ["hosting", "Hosting (Web)"],
  ["status", "Status"],
  ["initialRelease", "Initial Release"],
];

function formatValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "string" || typeof value === "number") return value;
  return null;
}

function DeveloperInfo({ product, onReady }) {
  const developerInfo = product.developerInfo ?? {};
  const readMeUrl = product.readMe?.startsWith("/")
    ? product.readMe
    : `/api/readme?url=${encodeURIComponent(product.readMe)}`;

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <section className={styles.devSection}>
      <h2 className={styles.title}>Developer Information</h2>

      {developerInfo.description && (
        <p className={styles.intro}>{developerInfo.description}</p>
      )}

      <ul className={styles.techList}>
        {developerFields.map(([field, label]) => {
          const value = formatValue(developerInfo[field]);
          return value === null ? null : (
            <li key={field}>
              <strong>{label}:</strong> {value}
            </li>
          );
        })}
      </ul>

      <div className={styles.codeBlock}>
        <code>
          {`© Phenomenal Productions. All rights reserved.
This software, including its source code, assets, game mechanics,
and design elements, is proprietary and confidential.

Unauthorized copying, reuse, redistribution, modification,
or commercial exploitation of any part of this project
is strictly prohibited without prior written permission
from Phenomenal Productions.

For inquiries, partnerships, or licensing requests:
info@phenomenalproductions.com.ng`}
        </code>
      </div>

      {product.readMe && (
        <a
          href={readMeUrl}
          download="README.md"
          className={styles.downloadBtn}
        >
          Download README
        </a>
      )}
    </section>
  );
}

export default DeveloperInfo;
