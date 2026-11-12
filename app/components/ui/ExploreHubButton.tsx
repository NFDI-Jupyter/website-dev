import { motion } from "motion/react";

const ExploreHubButton = () => {
  return (
    <motion.a
      href="https://hub.nfdi-jupyter.de/hub/home"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Explore the Jupyter4NFDI Hub (opens in a new tab)"
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      variants={{
        rest: { y: 0, backgroundColor: "#ffffff" },
        hover: { y: -2, backgroundColor: "#2563eb" },
        tap: { y: 0, backgroundColor: "#2563eb" },
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative inline-flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-7 py-3.5 text-base font-bold text-blue-600 shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-0 sm:px-8 sm:py-4 sm:text-lg"
    >
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
  );
};

export default ExploreHubButton;
