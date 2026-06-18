import type { Metadata } from "next";
import { Manrope, Rajdhani } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://izolatiiinteligente.ro"),
  title: {
    default: "Izolații Inteligente | Izolații Termice Profesionale",
    template: "%s | Izolații Inteligente",
  },
  description:
    "Izolații Inteligente oferă soluții profesionale de izolație termică, hidroizolații și eficientizare energetică pentru locuințe și clădiri.",
  keywords: [
    "izolații termice",
    "spumă poliuretanică",
    "hidroizolații",
    "izolație mansardă",
    "eficiență energetică",
    "Izolații Inteligente",
  ],
  openGraph: {
    title: "Izolații Inteligente",
    description:
      "Confort termic, costuri reduse și lucrări executate profesionist pentru locuințe moderne.",
    url: "https://izolatiiinteligente.ro",
    siteName: "Izolații Inteligente",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Echipă de izolații termice la lucru",
      },
    ],
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
    <html lang="ro">
      <body className={`${manrope.variable} ${rajdhani.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
