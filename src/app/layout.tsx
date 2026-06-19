import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://turquoise-bakery-brunch.example"),
  title: {
    default: "TURQUOISE.bakery&brunch | Bakery, Coffee & Brunch",
    template: "%s | TURQUOISE.bakery&brunch",
  },
  description:
    "TURQUOISE.bakery&brunch is a modern bakery and brunch café serving fresh pastries, specialty coffee, and relaxed Mediterranean-inspired dining.",
  keywords: [
    "bakery",
    "brunch",
    "specialty coffee",
    "Mediterranean café",
    "TURQUOISE bakery brunch",
  ],
  openGraph: {
    title: "TURQUOISE.bakery&brunch",
    description:
      "Fresh bakery, specialty coffee, and an elegant brunch experience in a bright turquoise-inspired setting.",
    url: "https://turquoise-bakery-brunch.example",
    siteName: "TURQUOISE.bakery&brunch",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-brunch.svg",
        width: 1600,
        height: 900,
        alt: "TURQUOISE.bakery&brunch hero image placeholder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TURQUOISE.bakery&brunch",
    description:
      "Fresh bakery, specialty coffee, and a modern brunch experience in a turquoise-inspired café.",
    images: ["/images/hero-brunch.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
