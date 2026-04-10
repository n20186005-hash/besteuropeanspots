import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Best European Spots — Hidden Gems Across Europe",
    template: "%s | Best European Spots",
  },
  description:
    "Discover 100 hidden gems across Europe — medieval old towns, forgotten abbeys, ancient ruins, and breathtaking natural wonders off the beaten path.",
  keywords: [
    "Europe travel",
    "hidden gems Europe",
    "European attractions",
    "off the beaten path",
    "medieval towns",
    "European castles",
    "travel guide",
  ],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "Best European Spots",
    title: "Best European Spots — Hidden Gems Across Europe",
    description:
      "Discover 100 hidden gems across Europe — medieval old towns, forgotten abbeys, ancient ruins, and breathtaking natural wonders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
