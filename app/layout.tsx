import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const kefa = localFont({
  src: [
    {
      path: "../public/fonts/TRYKefaIII-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/TRYKefaIII-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/TRYKefaIII-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/TRYKefaIII-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-kefa",
});

export const metadata = {
  metadataBase: new URL("https://www.teynuryuseinov.be"),

  title: {
    default: "Teynur Yuseinov — Developer, Designer & Maker",
    template: "%s | Teynur Yuseinov",
  },

  description:
    "Portfolio of Teynur Yuseinov, a developer and designer creating interactive digital and physical experiences across software, design and creative technology.",

  authors: [
    {
      name: "Teynur Yuseinov",
    },
  ],

  creator: "Teynur Yuseinov",

  openGraph: {
    type: "website",
    locale: "en_BE",
    siteName: "Teynur Yuseinov",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kefa.variable}>
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}