import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flying Drone Pig ($FDP) | Solana Memecoin",
  description: "When pigs fly… electricity stops. Join the herd and fly with $FDP on Solana.",
  icons: {
    icon: "https://i.imgur.com/0jsGt7u.png",
  },
  openGraph: {
    title: "Flying Drone Pig ($FDP)",
    description: "When pigs fly… electricity stops.",
    images: ["https://i.imgur.com/0jsGt7u.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
