import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import MapEmbed from "@/components/Contact/MapEmbed";

export const metadata = {
  title: "Contact Us | PHENOMENAL SOFTWARES NIG. LTD",
  description: "Reach out to PHENOMENAL®, and Let's discuss your next project.",
  alternates: {
    canonical: "https://phenomenalproductions.com.ng/contact",
  },
  keywords: [
    "Phenomenal Softwares",
    "Phenomenal Productions",
    "Nigerian software company",
    "contact information",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact PHENOMENAL SOFTWARES NIG. LTD",
    description: "Send us a message and let's get your project started today.",
    url: "https://phenomenalproductions.com.ng/contact",
    siteName: "PHENOMENAL SOFTWARES NIG. LTD",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact PHENOMENAL SOFTWARES NIG. LTD",
      },
    ],
    type: "website",
  },
};


export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <MapEmbed />
    </>
  );
}
