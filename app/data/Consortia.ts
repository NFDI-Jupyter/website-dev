export interface Consortium {
  name: string;
  description: string;
  logoUrl: string;
  domain: string;
  link?: string;
}

interface ConsortiaData {
  title: string;
  subtitle: string;
  consortia: Consortium[];
}

export const data: ConsortiaData = {
  title: "Supporting NFDI Consortia",
  subtitle: "These consortia actively use and support Jupyter4NFDI",
  consortia: [
    {
      name: "Text+",
      domain: "Humanities and Social Sciences",
      description: "",
      logoUrl: "https://text-plus.org/text-plus-logo.svg",
      link: "https://text-plus.org/",
    },
    {
      name: "NFDI4DataScience",
      domain: "Engineering Sciences",
      description: "",
      logoUrl:
        "https://www.nfdi4datascience.de/images/downloads/Logo_NFDI4DataScience.svg",
      link: "https://www.nfdi4datascience.de/",
    },
    {
      name: "NFDI4ING",
      domain: "Engineering Sciences",
      description: "",
      logoUrl: "https://nfdi4ing.de/wp-content/uploads/2024/09/Logo_24.svg",
      link: "https://nfdi4ing.de/",
    },
    {
      name: "FAIRmat",
      domain: "Natural Sciences",
      description: "",
      logoUrl: "https://www.fairmat-nfdi.eu/uploads/newweb/FAIRmat.png",
      link: "https://www.fairmat-nfdi.eu/fairmat/",
    },
    {
      name: "MaRDI",
      domain: "Natural Sciences",
      description: "",
      logoUrl: "MaRDI_Logo_S_5_rgba.png",
      link: "https://www.mardi4nfdi.de/about/mission",
    },
  ],
};
