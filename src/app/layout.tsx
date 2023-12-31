import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/common/footer/Footer";
import Navbar from "./components/common/navbar/Navbar";
import { ThemeContextProvider } from "./context/themeContext";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";
import ThemeProvider from "./providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Next App",
  description: "Huytv04883@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="wrapper">
                <div className="container m-auto min-h-screen flex flex-col px-4 gap-5">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
