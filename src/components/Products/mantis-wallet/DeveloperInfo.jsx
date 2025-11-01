import styles from "./DeveloperInfo.module.css";

function DeveloperInfo() {
  return (
    <section className={styles.devSection}>
      <h2 className={styles.title}>Developer Info — Restricted Access</h2>

      <p className={styles.intro}>
        <strong>Mantis</strong> is a frontend-only fintech dashboard app built
        to demonstrate UI/UX design, animation flow, and component-driven
        architecture. All displayed financial activities are simulated for demo
        purposes only — no real transactions are performed.
      </p>

      <ul className={styles.techList}>
        <li>
          <strong>Mode:</strong> Frontend (Demo)
        </li>
        <li>
          <strong>Language(s):</strong> JavaScript
        </li>
        <li>
          <strong>Framework:</strong> React Native + Expo (Web)
        </li>
        <li>
          <strong>Styling:</strong> Custom Stylesheets
        </li>
        <li>
          <strong>Animations:</strong> Reanimated / Expo Animations
        </li>
        <li>
          <strong>Icons:</strong> Expo Vector Icons
        </li>
        <li>
          <strong>Data:</strong> Local Mock Data (Static JSON)
        </li>
        <li>
          <strong>Hosting:</strong> Vercel
        </li>
      </ul>

      <div className={styles.codeBlock}>
        <code>
          {`All content and assets in this project are proprietary to Phenomenal Productions. 
            For repository access or collaboration requests, contact us via 
            info@phenomenalproductions.com.ng. 
            Unauthorized duplication, redistribution, or commercial usage is strictly prohibited.  
            THIS APPLICATION IS DEMO-ONLY. DO NOT USE IT FOR REAL FINANCIAL TRANSACTIONS.`}
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
