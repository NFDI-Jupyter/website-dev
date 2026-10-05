import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, type RefObject } from "react";
import { data } from "@/data/Hero";
import { QuickAccessButton } from "./QuickAccessButton";

interface HeroProps {
  heroRef?: RefObject<HTMLDivElement>;
}

export default function Hero({ heroRef }: HeroProps) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    /*
      When the top of the target meets the bottom of the container
      to when the bottom of the target meets the top of the container
    */
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [600, -600]);
  const springY = useSpring(y, { stiffness: 40, damping: 10 });
  const x = useTransform(scrollYProgress, [0, 1], [600, -600]);
  const springX = useSpring(x, { stiffness: 40, damping: 10 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(37,99,235,0.85),rgba(59,130,246,0.75)),url('/Jewels_005-huge.jpg')]"
      ref={heroRef}
    >
      <div ref={scrollRef} className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-white" style={{ y: springY }}>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
              {data.description}
            </p>
          </motion.div>
          <motion.div className="lg:block " style={{ x: springX }}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-white text-xl font-semibold mb-4">
                  {data.quick.title}
                </h3>
                <div className="space-y-3">
                  {data.quick.links.map((link, index) => (
                    <QuickAccessButton key={index} link={link} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
