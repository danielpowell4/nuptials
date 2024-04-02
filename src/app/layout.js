import { Inter } from "next/font/google";
import "./globals.css";

import { Nav, FixedFooter, Footer, ScrollWatcher } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julia & Dan",
  description:
    "Celebrating 10-years and 10-million miles on Sept 7, 2024 in Silverton, CO.",
  openGraph: {
    title: "Julia & Dan",
    description:
      "Celebrating 10-years and 10-million miles on Sept 7, 2024 in Silverton, CO.",
    images: [
      "https://res.cloudinary.com/dano-photos/image/upload/c_thumb,w_225,h_120,g_face/v1711077535/Screenshot_2024-03-21_at_9.18.37_PM_j93jas.png",
      "https://res.cloudinary.com/dano-photos/image/upload/c_thumb,w_450,h_240,g_face/v1711077535/Screenshot_2024-03-21_at_9.18.37_PM_j93jas.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ "--navTop": "0px", "--fixedNavBottom": "0px" }}>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❤️</text></svg>"
      />
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
