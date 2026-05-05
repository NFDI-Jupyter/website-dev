import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Incubators() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const useCases = [
    {
      id: 1,
      name: "Team1",
      description:
        "Collaborate on complex data analysis and machine learning projects with instant access to computational resources.",
      image: "Jupyter4NFDI-top.png",
    },
    {
      id: 2,
      name: "Team2",
      description:
        "Run hands-on training sessions with pre-configured environments and powerful computing for real-time learning.",
      image: "Jupyter4NFDI-top.png",
    },
    {
      id: 3,
      name: "Team3",
      description:
        "Develop and test machine learning models without managing infrastructure. Focus on what matters most.",
      image: "Jupyter4NFDI-top.png",
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) => (prev + newDirection + useCases.length) % useCases.length,
    );
    setIsAutoPlay(false);
  };

  useEffect(() => {
    if (!isAutoPlay) {
      const timer = setTimeout(() => setIsAutoPlay(true), 5000);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, useCases.length]);

  const current = useCases[currentIndex];

  return (
    <section className="bg-white min-h-screen flex items-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#023d6b] mb-6">
            How teams use our platform
          </h2>
          <p className="text-xl text-[#023d6b] max-w-2xl mx-auto opacity-70">
            Discover how our incubators and research groups leverage
            Jupyter4NFDI to accelerate their scientific discoveries and
            collaborations.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-150 md:h-125 mb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                {/* Image Section */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-[#023d6b] opacity-20 mix-blend-multiply" />

                  {/* Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <span className="text-white text-sm font-semibold">
                      {currentIndex + 1} of {useCases.length}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="flex flex-col justify-center space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Colored Accent */}
                  <motion.div
                    className="w-12 h-1 rounded-full bg-[#adbde3]"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-[#023d6b] leading-tight">
                    {current.name}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-[#023d6b] leading-relaxed max-w-md opacity-80">
                    {current.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    name="learn-more"
                    className="mt-8 self-start px-8 py-3 bg-[#023d6b] text-white font-semibold rounded-lg hover:bg-[#023d6b]/90 transition-colors duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between gap-6">
          {/* Dots Indicator */}
          <div className="flex gap-2 flex-1">
            {useCases.map((_, index) => (
              <motion.button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className="relative flex items-center justify-center min-w-11 min-h-11 -mx-2 -my-2 bg-transparent border-0 p-0 cursor-pointer"
                whileHover={{ scale: 1.2 }}
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 pointer-events-none ${
                    index === currentIndex
                      ? `bg-[#023d6b] w-12`
                      : `bg-[#adbde3] w-2 hover:bg-[#023d6b]/50`
                  }`}
                />
              </motion.button>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex gap-4">
            <motion.button
              name="previous-slide"
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-[#adbde3] hover:bg-[#023d6b] text-[#023d6b] hover:text-white transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous slide"
            >
              <LuChevronLeft size={24} />
            </motion.button>
            <motion.button
              name="next-slide"
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-[#adbde3] hover:bg-[#023d6b] text-[#023d6b] hover:text-white transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next slide"
            >
              <LuChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Auto-play Indicator */}
        <motion.div
          className="text-center mt-8 text-red-500 text-sm opacity-60"
          animate={{ opacity: isAutoPlay ? 0.8 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {isAutoPlay ? "Auto-playing..." : "Click to continue browsing"}
        </motion.div>
      </div>
    </section>
  );
}
