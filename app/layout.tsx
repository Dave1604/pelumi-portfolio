import type { Metadata, Viewport } from "next";
import { serif, sans, mono } from "./fonts";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pelumi Adewara · Product engineer",
    template: "%s · Pelumi Adewara",
  },
  description:
    "Pelumi Adewara is a product engineer who designs, builds, and ships from Figma to API to App Store. Five years of work across fintech, real estate, automotive, and museum projects.",
  keywords: [
    "Pelumi Adewara",
    "product engineer",
    "full stack developer",
    "React Native developer",
    "Next.js",
    "UI engineering",
    "freelance developer",
  ],
  authors: [{ name: "Pelumi Adewara" }],
  creator: "Pelumi Adewara",
  openGraph: {
    type: "website",
    title: "Pelumi Adewara · Product engineer",
    description:
      "I design, build, and ship from Figma to API to App Store. Selected work, philosophy, and experiments.",
    siteName: "Pelumi Adewara",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pelumi Adewara · Product engineer",
    description:
      "I design, build, and ship from Figma to API to App Store.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
