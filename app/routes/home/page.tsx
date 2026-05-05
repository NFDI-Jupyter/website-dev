import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Consortia from "./sections/Consortia/Consortia";
import Training from "./sections/Training/Training";
import Incubators from "./sections/Incubators/Incubators";
import Mission from "./sections/Mission/Mission";
import { useOutletContext } from "react-router";
import type { RefObject } from "react";

export default function Home() {
  const { heroRef } = useOutletContext<{
    heroRef: RefObject<HTMLDivElement>;
  }>();

  return (
    <main className="min-h-screen bg-white">
      <Hero heroRef={heroRef} />
      <Mission />
      <Features />
      <Incubators />
      <Consortia />
      <Training />
    </main>
  );
}
