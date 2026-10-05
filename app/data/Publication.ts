export interface PublicationRecord {
  title: string;
  authors: string[];
  publication_date: string;
  doi: string;
  resource_type: string;
  description?: string;
  contributors?: string[];
  related_event_title?: string;
  record_url: string;
}

export interface PublicationData {
  community: {
    name: string;
    url: string;
  };
  records: PublicationRecord[];
}

export const data: PublicationData = {
  community: {
    name: "Jupyter4NFDI",
    url: "https://zenodo.org/communities/jupyter4nfdi/records?q=&l=list&p=1&s=20&sort=newest",
  },
  records: [
    {
      title:
        "Teaching Python for Digital Humanities: A Comparison of Interactive Computing Infrastructures for a Self-Study Course on Sentiment Analysis of Grimm's Fairy Tales",
      authors: [
        "Pawlik, Aleksandra",
        "Stock, Sarah Ann",
        "Ehlis, Kira",
        "Dogaru, George",
      ],
      publication_date: "2026-09-18",
      doi: "10.5281/zenodo.22829845",
      resource_type: "Report",
      description:
        "This paper presents the design and deployment of an introductory Python course for Digital Humanities based on sentiment analysis of Grimm's fairy tales. The course compares Jupyter4NFDI, myBinder, and a Thebe-powered static website as interactive computing environments for self-study and classroom use.",
      record_url: "https://zenodo.org/records/22829845",
    },
    {
      title: "Jupyter4NFDI at Base4NFDI Demo sessions",
      authors: ["Pawlik, Aleksandra", "Eble, Julian"],
      publication_date: "2026-05-05",
      doi: "10.5281/zenodo.20271762",
      resource_type: "Presentation",
      description:
        "This presentation introduces Jupyter4NFDI, a Base4NFDI service supporting reproducible and FAIR scientific workflows through tools, training materials, and collaborative platforms.",
      record_url: "https://zenodo.org/records/20271762",
    },
    {
      title: "Jupyter4NFDI - Proposal for the Integration Phase of Base4NFDI",
      authors: [
        "Hagemeier, Björn",
        "Bleier, Arnim",
        "Flemisch, Bernd",
        "Reuter, Klaus",
        "Dogaru, George",
        "Mietchen, Daniel",
        "Lieber, Matthias",
      ],
      publication_date: "2025-12-09",
      doi: "10.5281/zenodo.17867919",
      resource_type: "Proposal",
      description:
        "Jupyter4NFDI provides access to computing and data resources through a single JupyterHub entry point. The integration phase expands the service through NFDI consortia, incubator projects, external resources, and end-user training.",
      contributors: [
        "Giesler, André",
        "Reinhardt, Martin",
        "Jahn, Diego",
        "Seeland, Anett",
        "Ouled Elhaj, Ines",
        "Kohne, Julian",
        "Berghaus, Frank",
      ],
      record_url: "https://zenodo.org/records/17867919",
    },
    {
      title: "Jupyter4NFDI basic user metrics",
      authors: ["Kreuzer, Tim", "Hagemeier, Björn", "Flemisch, Bernd"],
      publication_date: "2024-06-26",
      doi: "10.5281/zenodo.15187218",
      resource_type: "Dataset",
      description:
        "Usage metrics of Jupyter4NFDI from June 26, 2024 to April 9, 2025, showing unique users in the last 30, 7, and 1 days.",
      contributors: [
        "Lieber, Matthias",
        "Reuter, Klaus",
        "Dogaru, George",
        "Bleier, Arnim",
        "Jahn, Diego",
      ],
      record_url: "https://zenodo.org/records/15187218",
    },
    {
      title: "Jupyter4NFDI - a central Jupyter Hub for the NFDI",
      authors: ["Hagemeier, Björn"],
      publication_date: "2024-07-15",
      doi: "10.5281/zenodo.14162496",
      resource_type: "Presentation",
      description:
        "This talk describes a centralized Jupyter service that brings computational and data resources from NFDI consortia, cloud systems, and HPC environments within reach of a broader research community.",
      related_event_title:
        "NFDITalk (15 July 2024): Jupyter4NFDI - a central Jupyter Hub for the NFDI",
      record_url: "https://zenodo.org/records/14162496",
    },
    {
      title: "Software Heritage Archival IDs of FAIR Jupyter GitHub repos",
      authors: [
        "Ramy-Badr, Ahmed",
        "Schubotz, Moritz",
        "Mietchen, Daniel",
        "Samuel, Sheeba",
      ],
      publication_date: "2024-07-24",
      doi: "10.5281/zenodo.12806151",
      resource_type: "Software",
      description:
        "FAIR Jupyter is a knowledge graph representation of a dataset about the computational reproducibility of Jupyter notebooks from biomedical publications. The associated GitHub repositories were archived by Software Heritage.",
      record_url: "https://zenodo.org/records/12806151",
    },
    {
      title: "Jupyter4NFDI",
      authors: [
        "Hagemeier, Björn",
        "Bleier, Arnim",
        "Flemisch, Bernd",
        "Lieber, Matthias",
        "Reuter, Klaus",
        "Dogaru, George",
      ],
      publication_date: "2024-07-09",
      doi: "10.5281/zenodo.12699382",
      resource_type: "Proposal",
      description:
        "This proposal aims to unify access to Jupyter services across NFDI consortia, integrate IAM4NFDI, and make HPC resources available through a consistent service for reproducible and FAIR digital research.",
      record_url: "https://zenodo.org/records/12699382",
    },
    {
      title:
        "From MyBinder to JupyterHub: Enhancing Reproducibility in Computational Social Science",
      authors: ["Bleier, Arnim", "Costa da Silva, Raniere"],
      publication_date: "2024-06-17",
      doi: "10.5281/zenodo.11964783",
      resource_type: "Presentation",
      description:
        "Slides for Workshop IV at the 2024 CESSDA Conference in Split. The workshop presents the Execution Backend for the Method Hub and is part of the outreach for nfdi-jupyter.de.",
      related_event_title:
        "From MyBinder to JupyterHub: Enhancing Reproducibility in Computational Social Science",
      record_url: "https://zenodo.org/records/11964783",
    },
  ],
};
