import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navigation/Navbar";
import { Analytics } from "@vercel/analytics/next";

const chillax = localFont({
  src: "./fonts/Chillax-Variable.ttf",
  variable: "--font-chillax",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NCxLib | A high performance neural network library",
  description: "Built by Neel and Chase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chillax.variable} antialiased mt-16 pb-8  mx-auto `}>
        <Logo />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
