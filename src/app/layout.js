import { Inter } from "next/font/google";
import "./globals.css";

import { Nav, FixedFooter, Footer, ScrollWatcher } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julia & Dan",
  description:
    "Celebrating 10-years and 10-million miles on Sept 7, 2024 in Silverton, CO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ "--navTop": "0px", "--fixedNavBottom": "0px" }}>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        <FixedFooter />
        <ScrollWatcher />
      </body>
    </html>
  );
}
