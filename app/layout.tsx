import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/ui/Header";
import Cursor from "@/app/ui/Cursor";
import "@/app/ui/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wenting Yong's Portfolio",
  description: "Wenting Yong's a front-end developer based in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Cursor />
      </body>
    </html>
  );
}
