import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Viewport } from 'next';
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const generateViewport = (): Viewport => {
  return {
    width: 'device-width',
    initialScale: 1.0,
    minimumScale: 1.0,
    maximumScale: 1.0,
    userScalable: false, // Prevent zooming
  };
};
export const metadata: Metadata = {
  title: "Eagels Registration Form",
  description: "Eagels Registration Form",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
