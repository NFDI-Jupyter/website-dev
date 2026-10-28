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
            "Within the ScanClouDT project a lot of virtual and real scans of terrestrial laser scanning instruments are created either from real TLS measurements or from the digital metrological twin. For the comparison, analysis and investigation of the accuracy of the D-MT and the validity of the design, the scans need to be transformed, filtered, segmented, fitted into the according geometry and their applied uncertainty estimation must be done. Since one real scan already consists of around 13 GB, the transformation is highly computationally expensive. Furthermore, the different project partners of the ScanClouDT Consortium shall use the algorithms and data in their respective use-case as well.",
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
          name: "Interaktiver Selbstlernkurs: Sentimentanalyse mit Python für Digital Humanities",
          institution: "Universitätsbibliothek Duisburg-Essen",
          description:
            "Entwicklung eines browserbasierten, interaktiven Selbstlernkurses zur Sentimentanalyse deutschsprachiger literarischer Texte. Der Kurs vermittelt Python-Grundlagen, Textverarbeitung und Sentiment-Analyse anhand der Grimm'schen Märchen. Durch die Integration von Thebe mit dem NFDI JupyterHub können Lernende Code-Beispiele direkt im Browser ausführen – ohne lokale Python-Installation. Dieser Kurs ist im Rahmen des von der Stiftung Innovation in der Hochschullehre von 2024–2026 geförderten Projekts 'Digital Humanities Ruhr@UDE' entstanden.",
          image: "digital-humanities-rhur-logo.png.png",
          href: "https://duepublico2.uni-due.de/receive/duepublico_mods_00086519",
        },
        {
          name: "Interactive tutorials for the parallel Heat library",
          institution: "Jülich Supercomputing Centre",
          description:
            "The Heat team implemented interactive tutorials for their high-performance data analytics library.",
          image: "Heat-logo-square.png",
          href: "https://github.com/NFDI-Jupyter/services/discussions/42",
        },
        {
          name: "Jupyter4Chem - Chemistry Data at your Fingertips",
          institution:
            "IPB Halle, FIZ Karlsruhe, KIT Karlsruhe, FSU Jena, TIB Hannover, Tartu Ülikool, Universidade Federal do Rio de Janeiro, TU Dresden",
          description:
            "One of the main challenges of the Jupyter4Chem Incubator project is the seamless integration of heterogeneous NFDI4Chem services into the Jupyter4NFDI infrastructure. While most services provide publicly accessible data and REST APIs, differences in service architectures, dependencies, and interfaces require individual integration approaches and the development of reproducible, preconfigured environments.",
          image: "public/Consortia/NFDI4Chem-Logo-Claim_mehrfarbig_schwarz.png",
          href: "https://nfdi4chem.de/",
        },
        {
          name: "Issue2Docker: Reproducible Environments for Scientific Software Support",
          institution: " IT Center RWTH Aachen University",
          description:
            "The intended wide use of scientific software also increases the demand for software support that can become taxing for researchers. Within the DFG-funded CAES3AR project, we aim to make the support process more efficient and collaborative. A key component is to enable opening issues containing code and executing them in an interactive environment so that supporters can reproduce the issue and provide help without having to set up a suitable environment locally. Therefore, we develop an Issue2Docker tool based on repo2docker. Our goal for this incubator project is an integration of the Issue2Docker functionality into Jupyter4NFDI. As there is currently only a prototypical implementation of the tool, it can be designed for seamless integration from the outset. The infrastructure is developed and tested with pyGIMLi, an open-source library for modeling and inversion in geophysics, but can also serve the wider research software community.",
          image: "",
          href: "https://github.com/NFDI-Jupyter/services</discussions/41",
        },
        {
          name: "Tutorial for symbolic regression via compress sensing",
          institution: "Friedrich-Alexander-Universität",
          description:
            "The main goal is to demonstrate some of the state of the art machine learning method in the field of material science. The tutorial tries to following the FAIR principles (Findable, Accessible, Interoperable, Re-usable). The tutorial contains a small (<100MB ) dataset and mainly for demonstrating the method but it also provide a good starting point to run it on any other dataset.",
          image: "",
          href: "https://github.com/NFDI-Jupyter/services/discussions/40",
        },
      ],
    },
    {
      range: "Aug 2026 – Jan 2027",
      status: "active",
      incubators: [
        {
          name: "Integrating CloWM with Jupyter4NFDI: Enabling Flexible Postprocessing and Downstream Analysis of Workflow Results",
          institution: "Bielefeld University",
          description:
            "The Cloud-based Workflow Manager (CloWM) is an open-source platform designed for the scalable and reproducible execution of data-intensive workflows. While CloWM excels in standardizing and reproducing workflow execution, the subsequent post-processing and visualization of results often remain manual, relying on custom Python or R scripts outside the platform. While CloWM excels in standardizing and reproducing workflow execution, the subsequent post-processing and visualization of results often remain manual, relying on custom Python or R scripts outside the platform. This incubator project aims to bridge this gap by integrating CloWM with the Jupyter ecosystem. Specifically, we intend to enable users to launch Jupyter instances directly from the CloWM interface, providing seamless, authenticated access to their CloWM-stored S3 data buckets for immediate, interactive downstream analysis.",
          image: "CloWM.svg",
          href: "https://clowm.bi.denbi.de/",
        },
        {
          name: "AVOBMAT multilingual text mining tool",
          institution:
            "Digital Humanities Laboratory and Institute of English and American Studies,",
          description:
            "The aim of this incubator project is to provide access to the AVOBMAT (Analysis and Visualization of Bibliographic Metadata and Text) multilingual text mining tool on the Jupyter4NFDI infrastructure. AVOBMAT empowers scholars, educators, and students to explore large collections of textual and bibliographic data without programming skills. Built on an extensible, scalable, and modular cloud-based infrastructure, AVOBMAT ensures a transparent and reproducible research process supported by a wide range of analytical tools. It enables researchers to reveal hidden connections, enrich texts and metadata, and collaborate by sharing private databases. With support for 24 languages and customizable features, AVOBMAT makes advanced text analysis accessible so researchers can focus on critical interpretation and discovery.",
          image: "",
          href: "https://github.com/NFDI-Jupyter/services/discussions/49",
        },
        {
          name: "Connecting Jupyter@LU",
          institution: "University of Leipzig",
          description:
            "At Leipzig University, the institutional JupyterHub is tightly integrated with the local Slurm-based high-performance computing infrastructure, providing researchers with scalable and interactive computing environments. This project aims to connect these existing resources to the Jupyter4NFDI ecosystem, enabling seamless access through a federated Jupyter infrastructure. ",
          image: "",
          href: "",
        },
      ],
    },
    //    {
    //      range: "To be announced",
    //      status: "upcoming",
    //      incubators: [
    //        {
    //          name: "Astrologische Analysen",
    //          institution: "Astrophysikalisches Institut",
    //          description: "Astrologische Analysen",
    //          image: "Jupyter4NFDI-top.png",
    //          href: "#",
    //        },
    //      ],
    //    },
  ],
};
