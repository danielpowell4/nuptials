import { Inter } from "next/font/google";
import "./globals.css";

import { Nav, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julia & Dan",
  description:
    "Celebrating 10-years and 10-million miles on Sept 7, 2024 in Silverton, CO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
