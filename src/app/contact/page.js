import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import MapEmbed from "@/components/Contact/MapEmbed";

export const metadata = {
  title: "Contact Us | Phenomenal Productions",
  description: "Reach out to Phenomenal Productions via email or phone. Let’s discuss your next project.",
  openGraph: {
    title: "Contact Phenomenal Productions",
    description: "Send us a message and let's get your project started today.",
    url: "https://phenomenalproductions.com.ng/contact",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Phenomenal Productions",
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
