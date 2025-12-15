import styles from "./DeveloperInfo.module.css";

function DeveloperInfo() {
  return (
    <section className={styles.devSection}>
      <h2 className={styles.title}>Developer Info — Restricted Access</h2>
      <p className={styles.intro}>
        This demo project was built as a frontend-only restaurant ordering app
        to showcase UI/UX, responsive design, and animation. You’re peeking into
        the developer dossier 👀.
      </p>

      <ul className={styles.techList}>
        <li>
          <strong>Mode:</strong> Frontend
        </li>
        <li>
          <strong>Language(s):</strong> JavaScript
        </li>
        <li>
          <strong>Framework:</strong> React
        </li>
        <li>
          <strong>Styling:</strong> Tailwind CSS
        </li>
        <li>
          <strong>Animations:</strong> Framer Motion
        </li>
        <li>
          <strong>Icons:</strong> React Icons
        </li>
        <li>
          <strong>Hosting:</strong> Vercel
        </li>
        <li>
          <strong>Date Published:</strong> September 8, 2025
        </li>
      </ul>

      <div className={styles.codeBlock}>
        <code>
          {`To clone the repo, please contact the developer using our official email 
          (info@phenomenalproductions.com.ng) for required permissions. 
          Unauthorized usage is strictly prohibited.`}
        </code>
      </div>

      <a href="/products/pepper-and-palm/README.md" download className={styles.downloadBtn}>
        Download README
      </a>
    </section>
  );
}

export default DeveloperInfo;
