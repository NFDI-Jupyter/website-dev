import type { Consortium } from "@/data/Consortia";
import { motion } from "motion/react";

interface ConsortiaCardProps {
  consortium: Consortium;
  index: number;
}

export const ConsortiaCard = ({ consortium, index }: ConsortiaCardProps) => {
  return (
    <div
      key={index}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 bg-gray-100">
        <img
          src={consortium.logoUrl}
          alt={consortium.name}
          draggable={false}
          className="w-full h-full object-contain p-6"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-semibold text-white">
            {consortium.name}
          </h3>
          <p className="text-blue-200">{consortium.domain}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4 leading-relaxed">
          {consortium.description}
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <a
            href={consortium.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Learn more about ${consortium.name}`}
            className="font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </div>
  );
};
