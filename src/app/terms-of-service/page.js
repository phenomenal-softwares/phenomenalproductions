import React from "react";
import TermsSection from "@/components/TermsOfService/TermsSection";
import DocumentTable from "@/components/TermsOfService/DocumentTable";

export const metadata = {
  title: "Terms of Service | Phenomenal Productions",
  description: "Please review our official service terms regarding payments, project timelines, intellectual property, and more.",
  openGraph: {
    title: "Terms of Service | Phenomenal Productions",
    description: "Understand our legal terms and project policies before engagement.",
    url: "https://phenomenalproductions.com.ng/terms-of-service",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service Document",
      },
    ],
    type: "article",
  },
};


export default function TermsOfServicePage() {
  return (
    <main className="terms-page">
      <section>
        <TermsSection />
      </section>

      <section>
        <DocumentTable />
      </section>
    </main>
  );
}
