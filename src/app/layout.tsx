import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Acme } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-Poppins",
});
const acme = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Acme",
});

export const metadata: Metadata = {
  title: "Co-Labora",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
