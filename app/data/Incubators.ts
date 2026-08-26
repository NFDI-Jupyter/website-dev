export interface Cycle {
  range: string;
  status: "past" | "active" | "upcoming";
  incubators: Incubator[];
}

export interface Incubator {
  name: string;
  institution: string;
  description: string;
  image: string;
  href: string;
}

interface IncubatorData {
  title: string;
  activeCycle: number;
  cycles: Cycle[];
}

export const data: IncubatorData = {
  title: "How teams use our platform",
  activeCycle: 1,
  cycles: [
    {
      range: "Feb – Jul 2026",
      status: "past",
      incubators: [
        {
          name: "3D Analysis",
          institution: "Physikalisches Institut",
          description: "Komplexe physikalische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
        {
          name: "Biologische Analysen",
          institution: "Biologische Analysen",
          description: "Komplexe biologische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
        {
          name: "Astrologische Analysen",
          institution: "Astrophysikalisches Institut",
          description: "Astrologische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
        {
          name: "Astrologische Analysen",
          institution: "Astrophysikalisches Institut",
          description: "Astrologische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
        {
          name: "Astrologische Analysen",
          institution: "Astrophysikalisches Institut",
          description: "Astrologische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
      ],
    },
    {
      range: "Aug 2026 – Jan 2027",
      status: "active",
      incubators: [
        {
          name: "Geologische Analysen",
          institution: "Geologisches Institut",
          description: "Sehr viele geologische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
        {
          name: "Incubator Name",
          institution: "Institut(e)",
          description: "Beschreibung des Incubators.",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
        {
          name: "Soziologische Analysen",
          institution: "Soziologisches Institut",
          description: "Einige soziologische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
      ],
    },
    {
      range: "To be announced",
      status: "upcoming",
      incubators: [
        {
          name: "Astrologische Analysen",
          institution: "Astrophysikalisches Institut",
          description: "Astrologische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
      ],
    },
  ],
};
