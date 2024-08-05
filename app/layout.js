import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "NextLine Solutions",
    template: "%s - NextLine Solutions",
  },
  description: "Turning Ideas into Code, Innovations into Reality",
  twitter: {
    card: "summary_large_image",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
};

export default RootLayout;
