import { motion } from "motion/react";

interface ExploreHubButtonProps {
  label?: string;
  /** Shorter label shown below the `lg` breakpoint in compact mode. */
  shortLabel?: string;
  /** Smaller, auto-width variant for tight spots like the header. */
  compact?: boolean;
  /**
   * `light` (default): white button for dark/coloured backgrounds.
   * `solid`: teal button for white/light backgrounds.
   */
  variant?: "light" | "solid";
}

const PALETTES = {
  light: {
    rest: { bg: "#ffffff", fg: "#087ca6" },
    hover: { bg: "#087ca6", fg: "#ffffff" },
    focus:
      "focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-0",
  },
  solid: {
    rest: { bg: "#087ca6", fg: "#ffffff" },
    hover: { bg: "#075a7b", fg: "#ffffff" },
    focus:
      "focus-visible:ring-2 focus-visible:ring-[#159ac8] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  },
};

const ExploreHubButton = ({
  label = "Open the NFDI Jupyterhub",
  shortLabel = "Open the Hub",
  compact = false,
  variant = "light",
}: ExploreHubButtonProps) => {
  const palette = PALETTES[variant];
  const sizeClasses = compact
    ? "min-h-10 gap-2 px-4 py-2 text-sm lg:px-5"
    : "min-h-11 w-full gap-2 px-4 py-2.5 text-sm sm:min-h-12 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg";

  return (
    <motion.a
      href="https://hub.nfdi-jupyter.de/hub/home"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap="tap"
      variants={{
        rest: { y: 0, backgroundColor: palette.rest.bg },
        hover: { y: -2, backgroundColor: palette.hover.bg },
        tap: { y: 0, backgroundColor: palette.hover.bg },
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={[
        "relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full font-bold shadow-none",
        "focus-visible:outline-none",
        palette.focus,
        sizeClasses,
      ].join(" ")}
    >
      <motion.span
        variants={{
          rest: { color: palette.rest.fg },
          hover: { color: palette.hover.fg },
          tap: { color: palette.hover.fg },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10"
      >
        {compact ? (
          <>
            <span className="lg:hidden">{shortLabel}</span>
            <span className="hidden lg:inline">{label}</span>
          </>
        ) : (
          label
        )}
      </motion.span>
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        variants={{
          rest: { x: 0, color: palette.rest.fg },
          hover: { x: 4, color: palette.hover.fg },
          tap: { x: 4, color: palette.hover.fg },
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-10 shrink-0 ${compact ? "h-4 w-4" : "h-4 w-4 sm:h-5 sm:w-5"}`}
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
