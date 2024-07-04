import type { Metadata } from "next";
import {
    Alumni_Sans,
    AR_One_Sans,
    IBM_Plex_Mono,
    IBM_Plex_Sans,
    Jura, Noto_Sans, Open_Sans,
    Public_Sans,
    Sansita,
    Tenor_Sans
} from "next/font/google";
import "./globals.css";
import MyNavbar from "@/app/components/navbar";

const jura = Open_Sans({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Kelvin Cheong's Portfolio",
  description: "Senior software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={jura.className}>
          <MyNavbar/>
          <div className="container mx-auto">
              {children}
          </div>
      </body>
    </html>
);
}
