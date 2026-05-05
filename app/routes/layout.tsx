import { useRef } from "react";
import { Outlet } from "react-router";
import Header from "./home/sections/Header/Header";
import Footer from "./home/sections/Footer/Footer";

export default function Layout() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header heroRef={heroRef as React.RefObject<HTMLDivElement>} />
      <Outlet context={{ heroRef }} />
      <Footer />
    </main>
  );
}
