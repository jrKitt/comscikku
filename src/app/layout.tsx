import type { Metadata } from "next";
import { Athiti } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css"


const athiti = Athiti({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400']
});


export const metadata: Metadata = {
  title: "Computer Science MorKhorrrr",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${athiti.variable} antialiased`}
      >
        <Navbar/>
        {children}
        
      </body>
    </html>
  );
}
