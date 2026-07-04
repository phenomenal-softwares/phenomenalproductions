import Link from "next/link";
import "@/styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">
          PHENOMENAL SOFTWARES NIG. LTD
          <span className="footer-registration">RC 9615166</span>
        </p>
        <p className="footer-text">
          PHENOMENAL SOFTWARES NIG. LTD is registered as a Private Company
          Limited by Shares under the Companies and Allied Matters Act (CAMA) 2020,
          Federal Republic of Nigeria. The company is duly registered with the
          Corporate Affairs Commission (CAC) and operates in compliance with all
          relevant laws and regulations governing companies and businesses in Nigeria.
        </p>
        <p className="footer-copy">&copy; {currentYear} All rights reserved.</p>
        <p className="footer-links">
          <a href="/images/GENERAL-PRICING-TABLE.png" download className="link">
            Download Pricing Table
          </a>
          <Link className="link" href="/terms-of-service">
            Terms of Service
          </Link>
          <Link className="link" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="link" href="/contact">
            Contact Us
          </Link>
        </p>
      </div>
    </footer>
  );
}
