import type { Metadata } from "next"; // force ts refresh

import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Header from "../components/Header";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pravat Hospitality Private Limited | Luxury Hospitality in Puri, Odisha",
  description: "Pravat Hospitality Private Limited is a hospitality company developing and operating premium hospitality assets in Puri, Odisha, including the Taj Puri Resort & Spa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-warm-ivory text-midnight antialiased overflow-x-hidden selection:bg-muted-gold selection:text-white">
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
