import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer/Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roooby",
  description: "Rooby application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
