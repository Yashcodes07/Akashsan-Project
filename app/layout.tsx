import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AkashSan Cleaning | Premium Cleaning Services",
  description:
    "Professional carpet washing, tile floor deep cleaning, chair cleaning, flat cleaning, and indoor glass cleaning in Delhi NCR. Book your premium clean today.",
  keywords: [
    "carpet washing Delhi",
    "tile floor cleaning",
    "deep cleaning service",
    "flat cleaning Delhi",
    "chair cleaning",
    "indoor glass cleaning",
    "professional cleaning",
  ],
  authors: [{ name: "AkashSan Cleaning" }],
  openGraph: {
    title: "AkashSan Cleaning | Premium Cleaning Services",
    description:
      "Expertly trained professionals delivering spotless results for homes and offices across Delhi NCR.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
