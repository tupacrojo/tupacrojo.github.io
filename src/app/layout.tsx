import Head from "next/head";
import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import PixelTracker from "./components/PixelTracker";

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
  return (
    <html lang="es">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '691906099990143');
          fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <Image
            alt="Facebook Pixel"
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
        <PixelTracker />
        {children}
      </body>
    </html>
  );
}
