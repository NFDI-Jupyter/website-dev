import { motion } from "motion/react";
import { TrainingCard } from "./Card";
import type { Training } from "./types";

export default function Training() {
  const trainings: Training[] = [
    {
      title: "Getting Started with JupyterHub",
      type: "Workshop",
      duration: "2 hours",
      level: "Beginner",
      date: "March 15, 2024",
      description:
        "Learn the basics of accessing and using JupyterHub for your research projects.",
      imageUrl: "",
      link: "",
    },
    {
      title: "HPC Resource Management",
      type: "Training",
      duration: "4 hours",
      level: "Intermediate",
      date: "March 22, 2024",
      description:
        "Advanced techniques for efficiently managing high-performance computing resources.",
      imageUrl: "",
      link: "",
    },
    {
      title: "FAIR Data Principles",
      type: "Seminar",
      duration: "3 hours",
      level: "All levels",
      date: "March 28, 2024",
      description:
        "Understanding and implementing FAIR principles in your research workflow.",
      imageUrl: "",
      link: "",
    },
    {
      title: "Collaborative Research Tools",
      type: "Workshop",
      duration: "2.5 hours",
      level: "Intermediate",
      date: "April 5, 2024",
      description:
        "Tools and techniques for collaborative research across institutions.",
      imageUrl: "",
      link: "",
    },
    {
      title: "Data Security in Research",
      type: "Training",
      duration: "3.5 hours",
      level: "Advanced",
      date: "April 12, 2024",
      description:
        "Best practices for maintaining data security in distributed computing environments.",
      imageUrl: "",
      link: "",
    },
    {
      title: "Performance Optimization",
      type: "Workshop",
      duration: "4 hours",
      level: "Advanced",
      date: "April 18, 2024",
      description:
        "Optimizing your code and workflows for maximum performance on HPC systems.",
      imageUrl: "",
      link: "",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-400">
            Currently only examples. Get real data!
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Training & Workshops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive training programs to help researchers make
            the most of distributed computing resources and adopt best practices
            in their work.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {trainings.map((training, index) => (
            <TrainingCard key={index} training={training} index={index} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button
            name="view-all-programs"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            View All Training Programs
          </button>
        </div>
      </div>
    </section>
  );
}
