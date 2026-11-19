import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { LuChevronDown } from "react-icons/lu";
import { useRef, useState, type RefObject } from "react";
import { data } from "@/data/Hero";
import { GettingStarted } from "./GettingStarted";

interface HeroProps {
  heroRef?: RefObject<HTMLDivElement>;
}

export default function Hero({ heroRef }: HeroProps) {
  const scrollRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 16);
  });
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
  const x = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const springX = useSpring(x, { stiffness: 40, damping: 10 });

  return (
    <section
      id="hero"
      tabIndex={-1}
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(37,99,235,0.85),rgba(59,130,246,0.75)),url('/Jewels_005-huge.jpg')]"
      ref={heroRef}
    >
      <div ref={scrollRef} className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="text-white"
            style={shouldReduceMotion ? undefined : { y: springY }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
              {data.description}
            </p>
          </motion.div>
          <motion.div style={shouldReduceMotion ? undefined : { x: springX }}>
            <GettingStarted />
          </motion.div>
        </div>
      </div>
      <motion.a
        aria-hidden={hasScrolled}
        tabIndex={hasScrolled ? -1 : 0}
        animate={{
          y: shouldReduceMotion ? 0 : [0, 5, 0],
          opacity: hasScrolled ? 0 : 1,
        }}
        transition={{
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.5 },
        }}
        className={[
          "absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-white/90",
          "transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
          hasScrolled ? "pointer-events-none" : "",
        ].join(" ")}
      >
        <LuChevronDown aria-hidden="true" size={24} />
      </motion.a>
    </section>
  );
}
