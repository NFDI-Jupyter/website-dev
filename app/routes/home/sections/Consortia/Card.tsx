import { AnimatedButton } from "@/components/ui/AnimatedButton";
import type { Consortium } from "@/types/Consortium";

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
      <div className="relative h-48">
        <img
          src={consortium.logoUrl}
          alt={consortium.name}
          draggable={false}
          className="w-full h-full object-cover object-top"
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

        <AnimatedButton
          label="explore resources"
          className="text-blue-600 border-blue-600"
          onClick={() => console.log("Clicked")}
        />
      </div>
    </div>
  );
};
