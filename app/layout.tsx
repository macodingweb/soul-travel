import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soul Travel - MACoding4U",
  description: "Soul Travel Landing Page Using Next.js - Tailwindcss - MACoding4U",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
