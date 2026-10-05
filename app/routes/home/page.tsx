import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Consortia from "./sections/Consortia/Consortia";
import Publication from "./sections/Publication/Publication";
import Incubator from "./sections/Incubators/Incubators";
import Mission from "./sections/Mission/Mission";
import { useOutletContext } from "react-router";
import type { RefObject } from "react";

export default function Home() {
  const { heroRef } = useOutletContext<{
    heroRef: RefObject<HTMLDivElement>;
  }>();

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-white">
      <Hero heroRef={heroRef} />
      <Mission />
      <Features />
      <Incubator />
      <Consortia />
      <Publication />
    </main>
  );
}
