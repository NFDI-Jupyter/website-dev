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
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      ref={heroRef}
      style={{
        backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(59, 130, 246, 0.75)), url('https://readdy.ai/api/search-image?query=Modern%20high-performance%20computing%20data%20center%20with%20rows%20of%20powerful%20servers%20and%20quantum%20computers%2C%20futuristic%20blue%20lighting%2C%20clean%20white%20background%20transitioning%20to%20deep%20blue%20technology%20atmosphere%2C%20minimalist%20design%20with%20holographic%20data%20visualization%20floating%20in%20the%20air%2C%20professional%20scientific%20research%20environment%2C%20ultra-modern%20architecture%20with%20glass%20panels&width=1920&height=1080&seq=hero-hpc&orientation=landscape')`,
      }}
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
