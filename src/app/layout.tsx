"use client";
import "./globals.css";

import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/sonner";

import { CartProvider } from "./[slug]/menu/contexts/cart";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <SessionProvider>
          <CartProvider>{children}</CartProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
