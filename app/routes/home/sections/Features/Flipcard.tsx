import { motion } from "motion/react";
import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import type { Feature } from "@/data/Features";

export function FlipCard({ feature }: { feature: Feature; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="h-64 cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front side */}
        <motion.div
          className="absolute w-full h-full overflow-hidden rounded-xl bg-white p-6 shadow-sm hover:shadow-lg flex flex-col items-start"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 flex items-center justify-center text-white bg-secondary rounded-lg shrink-0 shadow-sm">
              <feature.icon className="text-2xl" />
            </div>
            <h3 className="text-xl font-semibold leading-tight text-gray-900">
              {feature.title}
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed grow">
            {feature.oneLiner}
          </p>
          {/* Hover indicator */}
          <motion.div
            className="text-xs text-gray-400 font-medium"
            animate={{ opacity: isFlipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Click to learn more →
          </motion.div>
        </motion.div>

        {/* Back side */}
        <motion.div
          className="absolute w-full h-full overflow-hidden rounded-xl bg-linear-to-br from-secondary to-[#8fa3c4] p-6 shadow-sm hover:shadow-lg flex flex-col items-start"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-xl font-semibold leading-tight text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-white text-sm leading-relaxed opacity-95 grow">
            {feature.description}
          </p>
          {feature.link && (
            <a
              href={feature.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${feature.title}`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={(event) => event.stopPropagation()}
            >
              Visit page
              <LuArrowUpRight aria-hidden="true" className="text-base" />
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
