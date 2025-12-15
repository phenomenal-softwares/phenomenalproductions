import styles from "./DeveloperInfo.module.css";

function DeveloperInfo() {
  return (
    <section className={styles.devSection}>
      <h2 className={styles.title}>Developer Info — Restricted Access</h2>

      <p className={styles.intro}>
        <strong>Molecule Visualizer 3D</strong> is a simple frontend-only educational
        app built to demonstrate UI/UX design, 3D rendering, and
        component-driven architecture. Suitable for learning and research purposes.
      </p>

      <ul className={styles.techList}>
        <li>
          <strong>Mode:</strong> Frontend-only (Client-side Rendering)
        </li>
        <li>
          <strong>Language:</strong> JavaScript (ES6+)
        </li>
        <li>
          <strong>Framework:</strong> React + Vite
        </li>
        <li>
          <strong>3D Engine:</strong> Three.js (via @react-three/fiber)
        </li>
        <li>
          <strong>Helpers:</strong> @react-three/drei
        </li>
        <li>
          <strong>Styling:</strong> Custom CSS (Global variables + component
          styles)
        </li>
        <li>
          <strong>Animations:</strong> CSS Animations & Three.js Motion
        </li>
        <li>
          <strong>Icons:</strong> React Icons
        </li>
        <li>
          <strong>Data Source:</strong> PubChem API (Live chemical data)
        </li>
        <li>
          <strong>Rendering:</strong> Interactive WebGL (Browser-based)
        </li>
        <li>
          <strong>Hosting:</strong> Vercel
        </li>
        <li>
          <strong>Status:</strong> Active Development / Demo Project
        </li>
        <li>
          <strong>Date Published:</strong> December 05, 2025
        </li>
      </ul>

      <div className={styles.codeBlock}>
        <code>
          {`All content and assets in this project are proprietary to Phenomenal Productions. 
            For repository access or collaboration requests, contact us via 
            info@phenomenalproductions.com.ng. 
            Unauthorized duplication, redistribution, or commercial usage is strictly prohibited.  
            `}
        </code>
      </div>

      <a
        href="/products/mantis-wallet/README.md"
        download
        className={styles.downloadBtn}
      >
        Download README
      </a>
    </section>
  );
}

export default DeveloperInfo;
