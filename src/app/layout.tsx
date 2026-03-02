import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ShowNavbar } from "@/components/layout/ShowNavbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ibmPlex = IBM_Plex_Sans_Arabic({
  variable: "--font-plex",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAFIRA",
  description: "SAFIRA Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${ibmPlex.variable} ${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}>
        <Providers>
          <ShowNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}