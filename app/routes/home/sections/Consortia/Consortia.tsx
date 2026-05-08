import { motion } from "motion/react";
import { ConsortiaCard } from "./Card";
import { type Consortium } from "@/types/Consortium";
import { data } from "@/data/Consortia";

export default function Consortia() {
  return (
    <section id="Consortia" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-400">
            Currently only examples. Get real data!
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Supporting NFDI Consortia
          </h2>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {data.consortia.map((consortium: Consortium, index: number) => (
            <ConsortiaCard consortium={consortium} index={index} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
