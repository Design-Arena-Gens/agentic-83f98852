import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-83f98852.vercel.app"),
  title: "Nova Orbit | Full Stack Engineer Portfolio",
  description: "Immersive portfolio showcasing modern full stack engineering craft, product sense, and creative coding experiments.",
  openGraph: {
    title: "Nova Orbit | Full Stack Engineer Portfolio",
    description:
      "Immersive portfolio showcasing modern full stack engineering craft, product sense, and creative coding experiments.",
    url: "https://agentic-83f98852.vercel.app",
    siteName: "Nova Orbit Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Nova Orbit Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Orbit | Full Stack Engineer Portfolio",
    description:
      "Immersive portfolio showcasing modern full stack engineering craft, product sense, and creative coding experiments.",
    creator: "@novaorbit"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise-layer" />
        {children}
      </body>
    </html>
  );
}
