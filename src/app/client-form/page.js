import React from "react";
import FormWizard from "@/components/ClientForm/FormWizard";

export const metadata = {
  title: "Request an App | Phenomenal Productions",
  description: "Need an app or platform? Use our simple wizard to describe your vision and get started.",
  alternates: {
    canonical: "https://phenomenalproductions.com.ng/client-form",
  },
  keywords: [
    "app development",
    "web app development",
    "custom software",
    "mobile app development",
    "Phenomenal Productions",
    "client form",
    "request an app",
    "digital product request",
    "software solutions",
    "Nigeria software development",
    "Next.js app development",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Request Your App | Phenomenal Productions",
    description: "Fill out a quick form and we'll begin shaping your next digital product.",
    url: "https://phenomenalproductions.com.ng/client-form",
    siteName: "Phenomenal Productions",
    images: [
      {
        url: "https://phenomenalproductions.com.ng/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Create Your App with Phenomenal Productions",
      },
    ],
    type: "website",
  },
};


export default function ClientFormPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <FormWizard />
    </main>
  );
}
