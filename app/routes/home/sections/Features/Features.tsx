import { motion } from "motion/react";
import { FlipCard } from "./Flipcard";
import type { Feature } from "@/types/Feature";
import { data } from "@/data/Features";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#ebebeb]">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-gray-600">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature: Feature, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <FlipCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
