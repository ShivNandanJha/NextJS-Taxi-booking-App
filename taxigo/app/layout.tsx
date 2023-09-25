import "./globals.css";
import type { Metadata } from "next";
import { Inter,Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaxiGo: have a great journey",
  description: "Created by Bro_CODE | Shivnandan Jha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <>
        <html lang      = "en">
        <body className = {outfit.className}>
            <Navbar/>
            {children}</body>
        </html>
      </>
    </ClerkProvider>
  );
}
