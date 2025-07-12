import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | Phenomenal Productions",
  description: "Learn how we collect, use, and protect your data at Phenomenal Productions.",
  keywords: [
    "Phenomenal Productions",
    "privacy policy",
    "data protection",
    "user privacy",
    "Nigerian software company",
    "data collection",
    "data usage",
    "GDPR compliance",
    "Next.js privacy policy",
  ],
  alternates: {
    canonical: "https://phenomenalproductions.com.ng/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Phenomenal Productions",
    description: "Transparency in how we handle your information.",
    url: "https://phenomenalproductions.com.ng/privacy-policy",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy Document",
      },
    ],
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicy />
    </main>
  );
}