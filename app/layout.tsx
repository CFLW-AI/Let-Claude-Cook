import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Let Claude Cook — The Epistemic Terrain Map",
  description:
    "Tools for mapping the shape of understanding. Find your blind spots, discover hidden bridges between fields, and see what you don't know you don't know.",
  openGraph: {
    title: "Let Claude Cook — The Epistemic Terrain Map",
    description:
      "Tools for mapping the shape of understanding. Built in a single conversation between a human researcher and an AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
