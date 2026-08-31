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

export const metadata: Metadata = {
  title: "Teynur Yuseinov",
  description: "Developer, designer and maker.",
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