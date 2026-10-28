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
    "A unified JupyterHub platform that gives academic researchers seamless access to distributed computing resources, with integrated tools for collaboration, data management, and reproducible research.",
  backgroundImageUrl: "",
  quick: {
    title: "Quick Access",
    links: [
      { label: "Features", id: "features" },
      { label: "Incubators", id: "incubators" },
      { label: "Publications & Events", id: "publication" },
    ],
  },
};
