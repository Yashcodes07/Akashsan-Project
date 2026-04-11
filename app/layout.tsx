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
  title: "AkashSan Cleaning | Premium Cleaning Services in Delhi NCR",
  description:
    "Professional carpet washing, tile floor deep cleaning, chair cleaning, flat cleaning, and indoor glass cleaning in Delhi NCR. Book your premium clean today.",
  keywords: [
    "carpet washing Delhi",
    "tile floor cleaning Delhi",
    "deep cleaning service Delhi NCR",
    "flat cleaning Delhi",
    "chair cleaning service",
    "indoor glass cleaning",
    "professional cleaning Delhi",
    "home cleaning South Delhi",
    "office cleaning Delhi NCR",
    "AkashSan cleaning",
  ],
  authors: [{ name: "AkashSan Cleaning" }],
  metadataBase: new URL("https://akashsan.in"), // ADD THIS - very important
  alternates: {
    canonical: "/", // ADD THIS - tells Google the main URL
  },
  openGraph: {
    title: "AkashSan Cleaning | Premium Cleaning Services in Delhi NCR",
    description:
      "Expertly trained professionals delivering spotless results for homes and offices across Delhi NCR.",
    type: "website",
    locale: "en_IN",
    url: "https://akashsan.in",
    siteName: "AkashSan Cleaning",
  },
  twitter: {
    card: "summary_large_image",
    title: "AkashSan Cleaning | Premium Cleaning Services",
    description:
      "Professional cleaning services across Delhi. Book today!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "qwElVXCp3NtrrKsicr4WtQDczyMJJAEJz-f7PNSRwE4", // ADD THIS
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