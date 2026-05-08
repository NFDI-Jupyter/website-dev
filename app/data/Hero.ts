interface HeroData {
  title: string;
  description: string;
  backgroundImageUrl: string;
  quick: {
    title: string;
    links: { label: string; id: string }[];
  };
}

export const data: HeroData = {
  title: "Jupyter4NFDI",
  description:
    "Making distributed HPC and Cloud computing resources accessible through a unified JupyterHub platform for academic research institutions",
  backgroundImageUrl: "",
  quick: {
    title: "Quick Access",
    links: [
      { label: "Features", id: "features" },
      { label: "Incubators", id: "incubators" },
      { label: "Events", id: "training" },
    ],
  },
};
