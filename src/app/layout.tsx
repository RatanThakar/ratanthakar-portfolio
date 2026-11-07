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
  title: "Ratan Thakar | ICT & Robotics Engineer | Developer",
  description:
    "Portfolio of Ratan Thakar - Information & Communication Technology diploma student, specializing in Embedded Systems, Robotics, IoT integrations, and Python desktop software.",
  keywords: [
    "Ratan Thakar",
    "Portfolio",
    "Robotics",
    "IoT",
    "Embedded Systems",
    "Arduino",
    "ESP8266",
    "CustomTkinter",
    "Python Developer",
  ],
  authors: [{ name: "Ratan Thakar", url: "https://ratanthakar.me" }],
  openGraph: {
    title: "Ratan Thakar - ICT & Embedded Systems Portfolio",
    description: "Bridging hardware and software with robotics, IoT, and custom desktop engineering.",
    url: "https://ratanthakar.me",
    siteName: "Ratan Thakar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-neutral-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
