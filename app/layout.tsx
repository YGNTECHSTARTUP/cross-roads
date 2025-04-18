import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./comp/Navbar";
import MobNav from "./comp/MobNav";
// import Footer from "./comp/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cross Roads with Shazin Hijazy",
  description: "Cross Roads with Shazin Hijazy a talk show which Focused on promoting entrepreneurship, leadership, and innovation", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        {/* <Footer/> */}
        <div className="block md:hidden mt-20">
        
        <MobNav/>

        </div>
     
      </body>
    </html>
  );
}
