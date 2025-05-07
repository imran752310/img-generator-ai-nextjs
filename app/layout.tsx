import type { Metadata } from "next";
 import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Home/Footer/Footer";


const font = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Ai Image Generation",
  description: "Ai Image Generation using Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gray-900 antialiased`}
      >
        <ResponsiveNavbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
