import About from "@/components/About/About";

export const metadata = {
  title: "About Us | Phenomenal Productions",
  description: "Learn about our mission, values, and the founder behind Phenomenal Productions.",
  alternates: {
    canonical: "https://phenomenalproductions.com.ng/about",
  },
  keywords: [
    "About Phenomenal Productions",
    "Abiodun Ojo",
    "Abiodun Joseph Ojo",
    "software development",
    "web development",
    "mobile app development",
    "Ojo Abiodun",
    "Ojo Abiodun Joseph",
    "Nigerian software company",
    "digital products",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Phenomenal Productions",
    description: "We’re passionate about building tech solutions that matter. Meet our founder Abiodun Ojo.",
    url: "https://phenomenalproductions.com.ng/about",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Phenomenal Productions",
      },
    ],
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}