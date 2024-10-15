import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WhatsappButton from "@/components/footer/WhatsappButton";
import Navbar from "@/components/Navbar/Navbar";
import Head from "next/head"; // Import Head
import { NFooter } from "@/components/footer/NFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hakkudai | Travels ",
  description:
    "Explore the beauty of Nepal with Hakkudai Tour, your trusted travel partner for unforgettable adventures. Discover breathtaking landscapes, rich culture, and thrilling experiences, from trekking the Himalayas to exploring historic landmarks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <WhatsappButton />
        {/* <Footer /> */}
        <NFooter />
      </body>
    </html>
  );
}
