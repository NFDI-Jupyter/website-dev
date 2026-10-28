import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { data } from "@/data/Consortia";

export default function Consortia() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [gridColumns, setGridColumns] = useState(2);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const updateGridColumns = () => {
      const width = grid.clientWidth;
      setGridColumns(
        width >= 1024 ? 7 : width >= 768 ? 5 : width >= 640 ? 3 : 2,
      );
    };

    updateGridColumns();
    const observer = new ResizeObserver(updateGridColumns);
    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  const getDistance = (index: number) => {
    if (activeIndex === null) {
      return 0;
    }

    const activeRow = Math.floor(activeIndex / gridColumns);
    const activeColumn = activeIndex % gridColumns;
    const row = Math.floor(index / gridColumns);
    const column = index % gridColumns;

    return Math.max(Math.abs(row - activeRow), Math.abs(column - activeColumn));
  };

  return (
    <section id="NewConsortia" className="bg-gray-50 py-20">
      <div className="w-full">
        <div className="mb-12 px-6 text-center lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {data.title}
          </h2>
        </div>

        <motion.div
          ref={gridRef}
          className="mx-2 grid min-w-0 grid-cols-2 gap-3 sm:mx-4 sm:grid-cols-3 sm:gap-4 md:grid-cols-5 lg:mx-6 lg:grid-cols-7 lg:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {data.consortia.map((consortium, index) => (
            <motion.a
              key={consortium.name}
              href={consortium.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${consortium.name}`}
              className="flex min-w-0 aspect-4/3 items-center justify-center overflow-hidden bg-white p-2 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              animate={{
                filter:
                  activeIndex === null
                    ? "blur(0px)"
                    : `blur(${Math.min(getDistance(index) * 1.5, 8)}px)`,
                scale:
                  activeIndex === null ? 1 : activeIndex === index ? 1.06 : 1,
                boxShadow:
                  activeIndex === index
                    ? "0 12px 24px rgba(15, 23, 42, 0.22)"
                    : "0 0 0 rgba(15, 23, 42, 0)",
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
            >
              <img
                src={`Consortia/${consortium.logoUrl}`}
                alt={consortium.name}
                draggable={false}
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
