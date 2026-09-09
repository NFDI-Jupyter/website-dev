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
          name: "Enhancing TLS Data Processing Through Collaboration with Jupyter4NFDIs",
          institution: "ScanClouDT Consortium",
          description:
            "Within the ScanClouDT project a lot of virtual and real scans of terrestrial laser scanning instruments are created either from real TLS measurements or from the digital metrological twin. For the comparison, analysis and investigation of the accuracy of the D-MT and the validity of the design, the scans need to be transformed, filtered, segmented, fitted into the according geometry and their applied uncertainty estimation must be done. Since one real scan already consists of around 13 GB, the transformation is highly computational expensive. Furthermore the different project partner of the ScanClouDT Consortium shall use the algorithms and data in their respective use-case as well.",
          image: "ScanClouDT_Logo.svg",
          href: "https://www.scancloudt.ptb.de/news-events",
        },
        {
          name: "AMMICO (AI-based Media and Misinformation Content Analysis Tool) as an AI-powered visual analysis online resource for political science and communication research and teaching",
          institution: "Heidelberg University",
          description:
            "AMMICO is a AI-based tool developed through the collaboration between the Scientific Software Center and researchers at the Institute of Political Science at Heidelberg University. With AMMICO, large amounts of image and video data can be analyzed with respect to emotional and factual content. The aim of this incubator is to make AMMICO more easily available and grow its user base by setting up a low-barrier user-friendly resource where researchers can try out AMMICO and use it for their own research and teaching.",
          image: "ssc-ammico.png",
          href: "https://github.com/ssciwr/AMMICO",
        },
        {
          name: "Astrologische Analysen",
          institution: "Astrophysikalisches Institut",
          description: "Astrologische Analysen",
          image: "Jupyter4NFDI-top.png",
          href: "#",
        },
        {
          name: "Interaktiver Selbstlernkurs: Sentimentanalyse mit Python für Digital Humanities",
          institution: "Universitätsbibliothek Duisburg-Essen",
          description:
            "Entwicklung eines browserbasierten, interaktiven Selbstlernkurses zur Sentimentanalyse deutschsprachiger literarischer Texte. Der Kurs vermittelt Python-Grundlagen, Textverarbeitung und Sentiment-Analyse anhand der Grimm'schen Märchen. Durch die Integration von Thebe mit dem NFDI JupyterHub können Lernende Code-Beispiele direkt im Browser ausführen – ohne lokale Python-Installation. Dieser Kurs ist im Rahmen des von der Stiftung Innovation in der Hochschullehre von 2024–2026 geförderten Projekts 'Digital Humanities Ruhr@UDE' entstanden.",
          image: "digital-humanities-rhur-logo.png.png",
          href: "https://duepublico2.uni-due.de/receive/duepublico_mods_00086519",
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
