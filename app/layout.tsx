import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ReactNode } from "react";
import React from "react";
import Link from "next/link";
import Header from "@/components/nav/Header";
import { NavBar } from "@/components/nav/NavBar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "LogiSwap",
  description: "Finance décentralisée",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
    <body className="bg-background text-foreground">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 mt-4">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 first-letter:text-sm">
          <Link href="/" passHref>
          <Header></Header>
          </Link>
        </div>
      </nav>
      <div className="flex w-full">
        <NavBar className="w-1/5 hidden lg:block" />{" "}
        {/* Cela définira la largeur de la sidebar à 20% */}
        <main className="w-4/5 min-h-screen flex flex-col items-center">
          {" "}
          {/* Cela permet au contenu principal de prendre les 80% restants */}
          {children}
        </main>
      </div>
    </body>
  </html>
  );
}