import Link from "next/link";
import "@/styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">Phenomenal Productions</p>
        <p className="footer-text">
          We believe that anyone can fly high and stand out with the right tools and
          support.
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
