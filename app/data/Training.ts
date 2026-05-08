import type { TrainingEvent } from "@/types/Training";

interface TrainingData {
  title: string;
  subtitle: string;
  events: TrainingEvent[];
}

export const data: TrainingData = {
  title: "Trainings & Workshops",
  subtitle:
    "We provide comprehensive training programs to help researchers make the most of distributed computing resources and adopt best practices in their work.",
  events: [
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
  ],
};
