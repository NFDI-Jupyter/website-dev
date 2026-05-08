import type { Incubator } from "@/types/Incubator";

interface IncubatorsData {
  title: string;
  subtitle: string;
  incubators: Incubator[];
}

export const data: IncubatorsData = {
  title: "How teams use our platform",
  subtitle:
    "Discover how our incubators and research groups leverage Jupyter4NFDI to accelerate their scientific discoveries and collaborations.",
  incubators: [
    {
      name: "Incubator A",
      description:
        "Incubator A uses Jupyter4NFDI to provide their researchers with seamless access to HPC resources, enabling them to run complex simulations and analyses without worrying about infrastructure.",
      image: {
        src: "Jupyter4NFDI-top.png",
        alt: "Incubator A using Jupyter4NFDI",
      },
      url: "docs",
    },
    {
      name: "Incubator B",
      description:
        "Incubator B has integrated Jupyter4NFDI into their training programs, allowing students and early-career researchers to gain hands-on experience with high-performance computing in a user-friendly environment.",
      image: {
        src: "Jupyter4NFDI-top.png",
        alt: "Incubator B using Jupyter4NFDI",
      },
      url: "docs",
    },
    {
      name: "Incubator C",
      description:
        "Incubator C leverages Jupyter4NFDI's support for custom Docker images to create tailored computing environments for their research projects, ensuring reproducibility and consistency across different teams.",
      image: {
        src: "Jupyter4NFDI-top.png",
        alt: "Incubator C using Jupyter4NFDI",
      },
      url: "docs",
    },
  ],
};
