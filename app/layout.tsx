import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Shop from "@/components/Shop";
import BestSeller from "@/components/BestSeller";
import Slick from "@/components/Slick";

export const metadata: Metadata = {
  title: "Doof meat",
  description: "Meat at your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Shop />
        <BestSeller />
        <Footer />
      </body>
    </html>
  );
}
