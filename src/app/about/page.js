import About from "@/components/About/About";

export const metadata = {
  title: "About Us | PHENOMENAL SOFTWARES NIG. LTD",
  description: "Learn about our mission, values, and why you should choose us.",
  alternates: {
    canonical: "https://phenomenalproductions.com.ng/about",
  },
  keywords: [
    "Phenomenal Softwares",
    "PHENOMENAL SOFTWARES NIG. LTD",
    "Phenomenal Productions",
    "Abiodun Ojo",
    "Nigerian software company",
    "digital products",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About PHENOMENAL SOFTWARES NIG. LTD",
    description: "We believe that everyone should have access to high-quality, affordable softwares.",
    url: "https://phenomenalproductions.com.ng/about",
    siteName: "PHENOMENAL SOFTWARES NIG. LTD",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About PHENOMENAL SOFTWARES NIG. LTD",
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