import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Dine House",
  description: "A restaurant website built with Next.js",
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar lang={lang} />
        <main className="container mx-auto px-4 mt-[100px]">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
