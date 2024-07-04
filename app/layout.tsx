import type { Metadata } from "next";
import {Jura} from "next/font/google";
import "./globals.css";
import {ThemeModeScript} from "flowbite-react";
import MyNavbar from "@/app/components/navbar";

const jura = Jura({
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
        <ThemeModeScript />
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
