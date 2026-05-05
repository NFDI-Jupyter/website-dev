import type { Training } from "./types";

interface TrainingCardProps {
  training: Training;
  index: number;
}

export function TrainingCard({ training, index }: TrainingCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Workshop":
        return "ri-tools-line";
      case "Training":
        return "ri-graduation-cap-line";
      case "Seminar":
        return "ri-presentation-line";
      default:
        return "ri-book-open-line";
    }
  };

  return (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
          <i
            className={`${getTypeIcon(training.type)} text-lg text-blue-600`}
          ></i>
        </div>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(training.level)}`}
        >
          {training.level}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {training.title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">
        {training.description}
      </p>

      <div className="space-y-2 mb-6">
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-4 h-4 flex items-center justify-center mr-2">
            <i className="ri-calendar-line text-xs"></i>
          </div>
          {training.date}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-4 h-4 flex items-center justify-center mr-2">
            <i className="ri-time-line text-xs"></i>
          </div>
          {training.duration}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          name="register"
          className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
        >
          Register
        </button>
        <button
          name="more-info"
          className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
        >
          Info
        </button>
      </div>
    </div>
  );
}
