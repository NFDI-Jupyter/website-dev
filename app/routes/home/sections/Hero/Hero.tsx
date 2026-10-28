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
  const x = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const springX = useSpring(x, { stiffness: 40, damping: 10 });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(37,99,235,0.85),rgba(59,130,246,0.75)),url('/Jewels_005-huge.jpg')]"
      ref={heroRef}
    >
      <div ref={scrollRef} className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div className="text-white" style={{ y: springY }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {data.title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed opacity-95">
              {data.description}
            </p>
          </motion.div>
          <motion.div className="lg:block " style={{ x: springX }}>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/20">
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
        <div className="flex w-full justify-center mt-10 lg:mt-12">
          <motion.a
            href="https://hub.nfdi-jupyter.de/hub/home"
            target="_blank"
            rel="noreferrer"
            initial="rest"
            whileHover="hover"
            whileFocus="hover"
            whileTap="tap"
            variants={{
              rest: { y: 0 },
              hover: { y: -2 },
              tap: { y: 0 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-500 px-7 py-3.5 text-base font-bold text-blue-500 shadow-lg shadow-blue-950/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 sm:px-8 sm:py-4 sm:text-lg"
          >
            <motion.span
              variants={{
                rest: { scaleX: 1 },
                hover: { scaleX: 0 },
                tap: { scaleX: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 origin-right rounded-full bg-white"
            />
            <motion.span
              variants={{
                rest: { color: "#3b82f6" },
                hover: { color: "#ffffff" },
                tap: { color: "#ffffff" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10"
            >
              Explore the Jupyter4NFDI Hub
            </motion.span>
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              variants={{
                rest: { x: 0, color: "#3b82f6" },
                hover: { x: 4, color: "#ffffff" },
                tap: { x: 4, color: "#ffffff" },
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-5 w-5"
            >
              <path
                d="M4.167 10h11.666m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
