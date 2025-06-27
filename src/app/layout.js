import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import "@/app/globals.css";

export const metadata = {
  title: "Phenomenal Productions",
  description: "We build top-tier apps for ambitious brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-wrapper">
          <header>
            <Navbar />
          </header>
          <main>
            {children}
            <BackToTop />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
