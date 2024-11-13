import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const chillax = localFont({
  src: "./fonts/Chillax-Variable.ttf",
  variable: "--font-chillax",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chillax.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}