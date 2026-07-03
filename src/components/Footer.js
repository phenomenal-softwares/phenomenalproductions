import Link from "next/link";
import "@/styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">PHENOMENAL SOFTWARES NIG. LTD<span className="footer-registration">RC 9615166</span></p>
        <p className="footer-text">
          PHENOMENAL SOFTWARES NIG. LTD (Phenomenal Productions) is a registered company in Nigeria, providing innovative software solutions and services to clients across various industries. 
          Our mission is to deliver high-quality software products that meet the evolving needs of our customers.
        </p>
        <p className="footer-copy">&copy; {currentYear} All rights reserved.</p>
        <p className="footer-links">
          <Link className="link" href="/terms-of-service">Terms of Service</Link>
          <Link className="link" href="/privacy-policy">Privacy Policy</Link>
          <Link className="link" href="/contact">Contact Us</Link>
        </p>
      </div>
    </footer>
  );
}
