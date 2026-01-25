import styles from "./DeveloperInfo.module.css";

function DeveloperInfo() {
  return (
    <section className={styles.devSection}>
      <h2 className={styles.title}>Developer Information</h2>

      <p className={styles.intro}>
        <strong>Pick-A-Card</strong> is a casual brain-training card game built
        to showcase modern UI/UX design, animation, sound handling, and
        component-driven game architecture using Expo and React Native. The
        project is designed primarily for mobile devices, with limited web
        support for demonstration purposes.
      </p>

      <ul className={styles.techList}>
        <li>
          <strong>Mode:</strong> Frontend-only Game Application
        </li>
        <li>
          <strong>Target Platforms:</strong> Mobile (Android & iOS), Web
          (Restricted)
        </li>
        <li>
          <strong>Language:</strong> JavaScript (ES6+)
        </li>
        <li>
          <strong>Framework:</strong> React Native + Expo
        </li>
        <li>
          <strong>Navigation:</strong> Expo Router / React Navigation
        </li>
        <li>
          <strong>Styling:</strong> React Native StyleSheets (Component-scoped)
        </li>
        <li>
          <strong>Animations:</strong> Animated API & Expo Linear Gradient
        </li>
        <li>
          <strong>Audio:</strong> Expo AV (Sound Effects & Background Music)
        </li>
        <li>
          <strong>State & Storage:</strong> Local State + AsyncStorage
        </li>
        <li>
          <strong>Game Features:</strong> Power-ups, Achievements, Stats, Shop
          System
        </li>
        <li>
          <strong>Icons:</strong> Expo Vector Icons / Custom Renderers
        </li>
        <li>
          <strong>Hosting (Web):</strong> Vercel
        </li>
        <li>
          <strong>Status:</strong> Active Development / Playable Demo
        </li>
        <li>
          <strong>Initial Release:</strong> January 2026
        </li>
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

      <a
        href="/products/pick-a-card/README.md"
        download
        className={styles.downloadBtn}
      >
        Download README
      </a>
    </section>
  );
}

export default DeveloperInfo;
