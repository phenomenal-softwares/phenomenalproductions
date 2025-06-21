import '@/styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">Phenomenal Productions</p>
        <p className="footer-text">Building digital solutions for forward-thinking brands.</p>
        <p className="footer-copy">&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
}
