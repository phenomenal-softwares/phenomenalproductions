"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import "./TikTokSection.css";

// Dynamically import icons (client-side only, no SSR)
const FaTiktok = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaTiktok), { ssr: false }
);
const FaPlus = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaPlus), { ssr: false }
);

const TikTokSection = () => {
  return (
    <section className="tiktok-section">
      <motion.div
        className="tiktok-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Left side - text */}
        <div className="tiktok-text">
          <h2 className="tiktok-heading">
            <FaTiktok className="tiktok-icon" /> We’re on TikTok
          </h2>
          <p className="tiktok-subtitle">
            Catch behind-the-scenes, quick tips, and fun creative vibes.  
            Join the <span>#PhenomenalCrew</span> and let’s have fun together!
          </p>
          <a
            href="https://tiktok.com/@phenomenalproductionsng"
            target="_blank"
            rel="noopener noreferrer"
            className="tiktok-btn"
          >
            <FaPlus className="btn-icon" /> Follow us
          </a>
        </div>

        {/* Right side - image */}
        <div className="tiktok-image">
          <img src="/images/tiktok-social.jpg" alt="Phenomenal TikTok" />
        </div>
      </motion.div>
    </section>
  );
};

export default TikTokSection;
