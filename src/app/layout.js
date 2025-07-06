import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import "@/app/globals.css";

export const metadata = {
  title: {
    default: "Phenomenal Productions",
    template: "%s | Phenomenal Productions",
  },
  description:
    "Phenomenal Productions is a leading Nigerian software company specializing in custom website development and mobile app solutions for Android and iOS platforms. Discover innovative digital solutions tailored to your needs.",
  keywords: [
    "Phenomenal Productions",
    "software development Nigeria",
    "web development",
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
    title: "Phenomenal Productions",
    description:
      "Custom digital platforms for institutions and entrepreneurs — from full-stack web apps to native Android and iOS apps.",
    url: "https://phenomenalproductions.com.ng",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phenomenal Productions - Custom Digital Platforms",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phenomenal Productions",
    description:
      "Explore digital excellence with Phenomenal Productions — smart apps, exam tools, lots more.",
    images: ["/images/og-image.jpg"],
  },
  authors: [{ name: "Abiodun Ojo", url: "https://abiodunojo.vercel.app" }],
  creator: "Phenomenal Productions",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/apple-touch-icon.png",
  },
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
