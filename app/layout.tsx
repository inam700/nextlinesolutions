import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-international-phone/style.css";
import "../assets/style/globals.css";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import AnimatedBackground from "./components/BackgroundAnimation";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NextLine Solutions",
    template: "%s - NextLine Solutions",
  },
  description: "Turning Ideas into Code, Innovations into Reality",
  twitter: {
    card: "summary_large_image",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased scroll-smooth`}>
        <main className="relative text-darkGray w-full max-w-screen-2xl mx-auto text-darkPurple bg-porcelain">
          <Header />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
