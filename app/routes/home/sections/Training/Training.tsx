import { motion } from "motion/react";
import { TrainingCard } from "./Card";
import { type TrainingEvent } from "@/types/Training";
import { data } from "@/data/Training";

export default function Training() {
  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-400">
            Currently only examples. Get real data!
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {data.events.map((training: TrainingEvent, index: number) => (
            <TrainingCard key={index} training={training} index={index} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button
            name="view-all-programs"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:scale-110 transition-transform whitespace-nowrap cursor-pointer"
          >
            View All Training Programs
          </button>
        </div>
      </div>
    </section>
  );
}
