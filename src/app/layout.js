import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import TikTokSection from "@/components/TikTokSection/TikTokSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "PHENOMENAL SOFTWARES NIG. LTD",
    template: "%s | PHENOMENAL SOFTWARES NIG. LTD",
  },
  description:
    "PHENOMENAL SOFTWARES NIG. LTD is a leading Nigerian software company specializing in custom website development and mobile app solutions for Android and iOS platforms. Discover innovative digital solutions tailored to your needs.",
  keywords: [
    "PHENOMENAL SOFTWARES NIG. LTD",
    "Phenomenal Productions",
    "Phenoemal Softwares",
    "web apps",
    "app development",
    "Abiodun Ojo",
    "Ojo Abiodun",
    "Ojo Abiodun Joseph",
    "digital products",
    "phenomenal",
    "online CBT platforms",
    "Next.js Nigeria",
  ],
  metadataBase: new URL("https://phenomenalproductions.com.ng"),
  openGraph: {
    title: "PHENOMENAL SOFTWARES NIG. LTD",
    description:
      "Custom digital platforms for institutions and entrepreneurs — from full-stack web apps to native Android and iOS apps.",
    url: "https://phenomenalproductions.com.ng",
    siteName: "PHENOMENAL SOFTWARES NIG. LTD",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PHENOMENAL SOFTWARES NIG. LTD - Custom Digital Platforms",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PHENOMENAL SOFTWARES NIG. LTD",
    description:
      "Explore digital excellence with PHENOMENAL SOFTWARES NIG. LTD — smart apps, exam tools, lots more.",
    images: ["/images/og-image.jpg"],
  },
  authors: [{ name: "Abiodun Ojo", url: "https://abiodunojo.vercel.app" }],
  creator: "PHENOMENAL SOFTWARES NIG. LTD",
  icons: {
    icon: "/favicon.png",
    shortcut: "/logo.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": "CO4uRaMmPsY-iDqLBUN8rgLOan7MXACA57jo3NCHpsI",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="layout-wrapper">
          <header>
            <Navbar />
          </header>
          <main>
            {children}
            <BackToTop />
          </main>
          <section>
            <TikTokSection />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
