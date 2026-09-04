import type { Metadata } from "next";
import localFont from "next/font/local";
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
  metadataBase: new URL("https://www.teynuryuseinov.be"),

  title: {
    default: "Teynur Yuseinov - Developer, Designer & Maker",
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

  icons: {
    icon: "/icon",
  },

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
        {children}
      </body>
    </html>
  );
}