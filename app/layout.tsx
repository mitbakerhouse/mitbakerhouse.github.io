import type { Metadata, Viewport } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const firaSans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baker House Website",
  description: "Baker House, Baker Home",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaSans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
