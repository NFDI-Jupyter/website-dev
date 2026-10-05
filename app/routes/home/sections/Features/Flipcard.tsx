import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import type { Feature } from "@/data/Features";

export function FlipCard({ feature }: { feature: Feature; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontButtonRef = useRef<HTMLButtonElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const currentControl = isFlipped
      ? frontButtonRef.current
      : backButtonRef.current;
    if (document.activeElement !== currentControl) return;

    const nextControl = isFlipped
      ? backButtonRef.current
      : frontButtonRef.current;
    nextControl?.focus();
  }, [isFlipped]);

  const toggleCard = () => setIsFlipped((current) => !current);

  return (
    <motion.div
      className="h-44 md:h-64"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative h-full w-full transform-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front side */}
        <motion.button
          type="button"
          aria-label={`Show details for ${feature.title}`}
          aria-pressed={isFlipped}
          tabIndex={isFlipped ? -1 : 0}
          ref={frontButtonRef}
          className="absolute flex h-full w-full flex-col items-start overflow-hidden rounded-xl bg-white p-4 text-left shadow-sm backface-hidden hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:p-6"
          onClick={toggleCard}
        >
          <div className="mb-3 flex items-center gap-3 md:mb-5 md:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-white shadow-sm md:h-12 md:w-12">
              <feature.icon aria-hidden="true" className="text-2xl" />
            </div>
            <h3 className="text-lg font-semibold leading-tight text-gray-900 md:text-xl">
              {feature.title}
            </h3>
          </div>
          <p className="grow text-xs leading-relaxed text-gray-600 md:text-sm">
            {feature.oneLiner}
          </p>
          <motion.div
            className="text-xs font-medium text-gray-600"
            animate={{ opacity: isFlipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            Select to learn more
          </motion.div>
        </motion.button>

        {/* Back side */}
        <motion.div
          className="absolute flex h-full w-full flex-col items-start overflow-hidden rounded-xl bg-linear-to-br from-secondary to-[#8fa3c4] p-4 shadow-sm backface-hidden [transform:rotateY(180deg)] hover:shadow-lg md:p-6"
          aria-hidden={!isFlipped}
        >
          <button
            type="button"
            aria-label={`Show summary for ${feature.title}`}
            tabIndex={isFlipped ? 0 : -1}
            ref={backButtonRef}
            className="mb-3 rounded px-1 py-0.5 text-xs font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:mb-4"
            onClick={toggleCard}
          >
            Back
          </button>
          <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-tight text-white md:mb-4 md:text-xl">
            {feature.title}
          </h3>
          <p className="line-clamp-5 grow text-xs leading-relaxed text-white opacity-95 md:text-sm">
            {feature.description}
          </p>
          {feature.link && (
            <a
              href={feature.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${feature.title}`}
              tabIndex={isFlipped ? 0 : -1}
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
