import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripesa Agent",
  description: "Manage your agency business on the go",
  icons: [{ rel: "icon", url: "/Tripesa-c.svg" }],
  openGraph: {
    title: "Tripesa Agent",
    description: "Manage your agency business on the go",
    url: "https://tripesa-agent-website.vercel.app/",
    siteName: "Tripesa Agent",
    images: [
      {
        url: "/website-landing-page.png",
        width: 1200,
        height: 630,
        alt: "Tripesa Agent Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripesa Agent",
    description: "Manage your agency business on the go",
    images: ["/app-landing-page.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
