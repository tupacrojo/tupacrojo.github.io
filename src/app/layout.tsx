import Head from "next/head";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { useEffect } from "react";
import { initFacebookPixel } from "@/app/lib/fbpixel";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio Tupac",
  description:
    "Portfolio personal de Tupac Rodríguez, desarrollador web. Creativo y con soluciones a medida.",
  robots: "index, follow",
  creator: "Tupac Rodríguez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initFacebookPixel(); // Inicializa Meta Pixel
  }, []);

  return (
    <html lang="es">
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=691906099990143&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <GoogleTagManager gtmId="GTM-5QBSM2W" />
      <GoogleAnalytics gaId="G-X1M8EQ604Y" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
