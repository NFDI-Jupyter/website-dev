interface MissionData {
  title: string;
  dominantText: string;
  dominantTextHightlight: string;
  paragraphs: string[];
  sideImage: {
    src: string;
    alt: string;
  };
  stats: { label: string; value: string }[];
}

export const data: MissionData = {
  title: "Our Mission",
  dominantText: "Empowering Research",
  dominantTextHightlight: "Through Technology",
  paragraphs: [
    "Our platform bridges the gap between powerful computing resources and researchers, making high-performance computing accessible to everyone in the academic community.",
    "We collaborate with various NFDI consortia to provide domain-specific data and computational resources, ensuring each research community has the tools they need for breakthrough discoveries.",
  ],
  sideImage: {
    src: "Jupyter4NFDI-top.png",
    alt: "Illustration representing our mission",
  },
  stats: [{ label: "Incubators onboarded", value: "6+" }],
};
