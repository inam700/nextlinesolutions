import Footer from "@/components/Footer";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "NextLine Solutions",
  description: "Turning Ideas into Code, Innovations into Reality",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
