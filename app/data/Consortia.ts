export interface Consortium {
  name: string;
  logoUrl: string;
  domain: string;
  link?: string;
}

interface ConsortiaData {
  title: string;
  consortia: Consortium[];
}

export const data: ConsortiaData = {
  title: "Discover NFDI Consortia",
  consortia: [
    {
      name: "BERD@NFDI",
      domain: "Geistes- und Sozialwissenschaften",
      logoUrl: "Berd.png",
      link: "https://www.berd-nfdi.de/",
    },
    {
      name: "KonsortSWD-NFDI4Society",
      domain: "Geistes- und Sozialwissenschaften",
      logoUrl: "Logo-KonsortSWD-NFDI4society.svg",
      link: "https://www.konsortswd.de/",
    },
    {
      name: "NFDI4Culture",
      domain: "Geistes- und Sozialwissenschaften",
      logoUrl: "NFDI4C_Logo.png",
      link: "https://nfdi4culture.de/",
    },
    {
      name: "NFDI4Memory",
      domain: "Geistes- und Sozialwissenschaften",
      logoUrl: "Logo_NFDI4Memory_RGB.svg",
      link: "https://4memory.de/",
    },
    {
      name: "NFDI4Objects",
      domain: "Geistes- und Sozialwissenschaften",
      logoUrl: "nfdi4objects_logo_digital_kurztitel.png",
      link: "https://www.nfdi4objects.net/index.php/en/nfdi4objects-english",
    },
    {
      name: "Text+",
      domain: "Geistes- und Sozialwissenschaften",
      logoUrl: "textplus_logo_RGB.svg",
      link: "https://text-plus.org/",
    },
    {
      name: "NFDI4DataScience",
      domain: "Engineering Sciences",
      logoUrl: "Logo_NFDI4DataScience.svg",
      link: "https://www.nfdi4datascience.de/",
    },
    {
      name: "NFDI4Energy",
      domain: "Engineering Sciences",
      logoUrl: "01_Logo_NFDI4Energy.png",
      link: "https://nfdi4energy.uol.de/",
    },
    {
      name: "NFDI4ING",
      domain: "Engineering Sciences",
      logoUrl: "NFDI4ING_Wort-Bildmarke_no-disclaimer_POS_RGB.png",
      link: "https://nfdi4ing.de/",
    },
    {
      name: "NFDI-MatWerk",
      domain: "Engineering Sciences",
      logoUrl: "Logo_NFDI-MatWerk-1000px.png",
      link: "https://nfdi-matwerk.de/",
    },
    {
      name: "NFDIxCS",
      domain: "Engineering Sciences",
      logoUrl: "NFDIxCS_Logo2024_deepblue.png",
      link: "https://nfdixcs.org/",
    },
    {
      name: "DataPLANT",
      domain: "Life Sciences",
      logoUrl: "DataPLANT_logo_square_bg_transparent.svg",
      link: "https://nfdi4plants.org/",
    },
    {
      name: "FAIRagro",
      domain: "Life Sciences",
      logoUrl: "Fairagro_Logo_mittelachsig_Verlauf_w_512.png",
      link: "https://fairagro.net/",
    },
    {
      name: "NFDI4Immuno",
      domain: "Life Sciences",
      logoUrl: "logo25_plus-text-hori_light_transparent.png",
      link: "https://www.nfdi4immuno.de/",
    },
    {
      name: "GHGA",
      domain: "Life Sciences",
      logoUrl: "Logo-GHGA.png",
      link: "https://www.ghga.de/",
    },
    {
      name: "NFDI4Biodiversity",
      domain: "Life Sciences",
      logoUrl: "NFDI_4_Biodiversity___Logo_Positiv_Kopie.svg",
      link: "https://www.nfdi4biodiversity.org/de/",
    },
    {
      name: "NFDI4BIOIMAGE",
      domain: "Life Sciences",
      logoUrl: "1_NDFI_Logo-4c.png",
      link: "https://nfdi4bioimage.de/home/",
    },
    {
      name: "NFDI4Health",
      domain: "Life Sciences",
      logoUrl: "nfdi_4_health_Logo.png",
      link: "https://www.nfdi4health.de/",
    },
    {
      name: "NFDI4Microbiota",
      domain: "Life Sciences",
      logoUrl: "nfdi4microbiota_Logo_.png",
      link: "https://nfdi4microbiota.de/",
    },
    {
      name: "DAPHNE4NFDI",
      domain: "Natural Sciences",
      logoUrl: "DAPHNE4NFDI_logo.png",
      link: "https://www.daphne4nfdi.de/",
    },
    {
      name: "FAIRmat",
      domain: "Natural Sciences",
      logoUrl: "text_white_background_space_rounded_corners.png",
      link: "https://www.fairmat-nfdi.eu/fairmat/",
    },
    {
      name: "NFDI4Cat",
      domain: "Natural Sciences",
      logoUrl: "Logo_Ohne-BG.png",
      link: "https://nfdi4cat.org/",
    },
    {
      name: "MaRDI",
      domain: "Natural Sciences",
      logoUrl: "MaRDI_Logo_S_5_rgba.png",
      link: "https://www.mardi4nfdi.de/about/mission",
    },
    {
      name: "NFDI4Chem",
      domain: "Natural Sciences",
      logoUrl: "NFDI4Chem-Logo-Claim_mehrfarbig_schwarz.png",
      link: "https://nfdi4chem.de/de/",
    },
    {
      name: "NFDI4Earth",
      domain: "Natural Sciences",
      logoUrl: "nfdi4earth_logo.png",
      link: "https://www.nfdi4earth.de/",
    },
    {
      name: "PUNCH4NFDI",
      domain: "Natural Sciences",
      logoUrl: "PUNCH4NFDI-Logo_RGB.png",
      link: "https://www.punch4nfdi.de/",
    },
  ],
};
