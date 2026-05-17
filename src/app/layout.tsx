import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whiteseahairsalon.example.com"),
  title: {
    default: "Wallasey Hair Salon | Modern Women's Hairdresser near Liverpool",
    template: "%s | Whitesea Hair Salon",
  },
  description:
    "Professional women's hair salon in Wallasey offering haircuts, colouring, styling, treatments, and friendly expert service near Liverpool.",
  keywords: [
    "Wallasey Hair Salon",
    "Wallasey Hairdresser",
    "Liverpool Hair Salon",
    "Women Hair Salon Wallasey",
    "Fashion Hair Salon",
    "Hair Colour Wallasey",
    "Hair Styling Liverpool",
  ],
  openGraph: {
    title: "Whitesea Hair Salon",
    description:
      "Modern women's hair salon near Liverpool for haircuts, colour, styling and treatments.",
    images: ["/salon/hero-portrait-wide.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
