import { motion } from "motion/react";
import { useState } from "react";
import type { Feature } from "@/types/Feature";

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
          className="absolute w-full h-full bg-white rounded-xl shadow-sm hover:shadow-lg p-8 flex flex-col items-start justify-start"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-12 h-12 flex items-center justify-center text-white bg-secondary rounded-lg mb-6 shrink-0">
            <feature.icon className="text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">
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
          className="absolute w-full h-full bg-linear-to-br from-secondary to-[#8fa3c4] rounded-xl shadow-sm hover:shadow-lg p-8 flex flex-col items-start justify-start"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            {feature.title}
          </h3>
          <p className="text-white text-sm leading-relaxed opacity-95">
            {feature.description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
