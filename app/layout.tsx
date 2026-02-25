import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style/home.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gurirai.online"),

  title: {
    default: "Guri Rai | Frontend & Next.js Developer",
    template: "%s | Guri Rai",
  },

  description:
    "Guri Rai is a passionate Frontend and Next.js Developer building modern, responsive web applications using React, Next.js, TypeScript, and modern UI technologies.",
   
    verification: {
  google: "gr9opUOaVgGUFpP2xZVvF_9CwCaXXqEH7HCN-r0SrY8",
},

  keywords: [
    "Guri Rai",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer in India",
    "Portfolio Website",
    "Modern Web Applications",
  ],

  authors: [{ name: "Guri Rai", url: "https://gurirai.online" }],
  creator: "Guri Rai",
  applicationName: "Guri Rai Portfolio",

  openGraph: {
    title: "Guri Rai | Frontend & Next.js Developer",
    description:
      "Explore the portfolio of Guri Rai — a Frontend & Next.js Developer creating modern, responsive web applications.",
    url: "https://gurirai.online",
    siteName: "Guri Rai Portfolio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Guri Rai | Frontend & Next.js Developer",
    description:
      "Personal portfolio of Guri Rai - Frontend & Next.js Developer building modern web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}