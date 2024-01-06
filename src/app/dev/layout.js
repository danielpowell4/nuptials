import { Footer, Nav } from "@/components";

export default function SiteLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
