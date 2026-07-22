import type { Incubator } from "@/types/Incubator";

interface IncubatorsData {
  title: string;
  subtitle: string;
  incubators: Incubator[];
}

export const data: IncubatorsData = {
  title: "How teams use our platform",
  subtitle:
    "Discover how our incubator projects support researchers to leverage Jupyter4NFDI and accelerate their scientific discoveries and collaborations.",
  incubators: [
    {
      name: "Heat",
      description:
        "The Heat team implemented interactive tutorials for their high-performance data analytics library.",
      image: {
        src: "public/Heat-logo-square.png",
        alt: "Heat logo",
      },
      url: "https://github.com/NFDI-Jupyter/services/discussions/42",
    },
    {
      name: "3D Point-Cloud-Analysis",
      description:
        "Physikalisch-Technische Bundesanstalt used Jupyter4NFDI to implement a challenging use-case of 3D Point-Cloud-Analysis.",
      image: {
        src: "Jupyter4NFDI-top.png",
        alt: "Jupyter4NFDI logo",
      },
      url: "https://github.com/NFDI-Jupyter/services/discussions/38",
    },
  ],
};
