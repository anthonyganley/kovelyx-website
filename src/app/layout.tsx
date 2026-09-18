import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kovelyx.net"),

  title: {
    default: "Kovelyx | KOVL",
    template: "%s | Kovelyx",
  },

  description:
    "Kovelyx (KOVL) is a fixed-supply ERC-20 digital token designed for the Base blockchain and currently in development on Base Sepolia testnet.",

  applicationName: "Kovelyx",

  alternates: {
    canonical: "https://kovelyx.net",
  },

  openGraph: {
    title: "Kovelyx | KOVL",
    description:
      "A fixed-supply ERC-20 digital token designed for the Base blockchain. Currently in development on Base Sepolia testnet.",
    url: "https://kovelyx.net",
    siteName: "Kovelyx",
    type: "website",
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kovelyx | KOVL",
    description:
      "A fixed-supply ERC-20 digital token designed for the Base blockchain. Currently in development on Base Sepolia testnet.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}