export interface Event {
  title: string;
  type: string;
  date: string;
  description: string;
  link: string;
  publicationDoi?: string;
}

interface EventsData {
  title: string;
  subtitle: string;
  events: Event[];
}

export const data: EventsData = {
  title: "Events",
  subtitle: "Events and community activities from the Jupyter4NFDI project.",
  events: [
    {
      title:
        "From MyBinder to JupyterHub: Enhancing Reproducibility in Computational Social Science",
      type: "Workshop Presentation",
      date: "June 17, 2024",
      description:
        "Workshop IV at the 2024 CESSDA Conference in Split, also published as a Jupyter4NFDI research output.",
      link: "https://zenodo.org/records/11964783",
      publicationDoi: "10.5281/zenodo.11964783",
    },
    {
      title:
        "NFDITalk (15 July 2024): Jupyter4NFDI - a central Jupyter Hub for the NFDI",
      type: "Video / Audio / Recording",
      date: "July 15, 2024",
      description:
        "NFDITalk recording about the central Jupyter4NFDI service, also represented by a related publication.",
      link: "https://www.youtube.com/live/1pGPJYjs8tQ?feature=shared",
      publicationDoi: "10.5281/zenodo.14162496",
    },
    {
      title: "2nd UC4B 2025, Aachen",
      type: "Workshop Presentation",
      date: "August 29, 2025",
      description: "Jupyter4NFDI activity at the 2nd UC4B 2025 in Aachen.",
      link: "",
    },
    {
      title: "2nd Services Roadshow by Base4NFDI - Jupyter4NFDI",
      type: "Video / Audio / Recording",
      date: "July 3, 2025",
      description: "A Base4NFDI services roadshow featuring Jupyter4NFDI.",
      link: "https://www.youtube.com/watch?v=PZvK4bqV_R0",
    },
    {
      title: "PUNCH@JSC",
      type: "Community Event",
      date: "May 6, 2025",
      description: "Jupyter4NFDI community activity at PUNCH@JSC.",
      link: "",
    },
    {
      title: "1st UC4B 2024, Berlin",
      type: "Workshop Presentation",
      date: "February 12, 2025",
      description: "Jupyter4NFDI activity at the 1st UC4B in Berlin.",
      link: "https://doi.org/10.5281/zenodo.14859343",
    },
    {
      title: "Services Roadshow by Base4NFDI - Jupyter4NFDI",
      type: "Video / Audio / Recording",
      date: "December 11, 2024",
      description: "A Base4NFDI services roadshow featuring Jupyter4NFDI.",
      link: "https://www.youtube.com/watch?v=EXPJoX8EgW0",
    },
    {
      title: "2024 UC4B: Jupyter4NFDI",
      type: "Workshop Presentation",
      date: "November 20, 2024",
      description: "Jupyter4NFDI presentation at the 2024 UC4B in Berlin.",
      link: "",
    },
    {
      title: "ZB MED",
      type: "Community Event",
      date: "Date not specified",
      description: "Jupyter4NFDI community activity with ZB MED.",
      link: "",
    },
    {
      title: "Text+ Show and Tell",
      type: "Community Event",
      date: "Date not specified",
      description: "Jupyter4NFDI community activity at Text+ Show and Tell.",
      link: "",
    },
    {
      title: "Biweekly consultation",
      type: "Consultation",
      date: "Ongoing",
      description:
        "Regular consultation sessions for the Jupyter4NFDI community.",
      link: "",
    },
  ],
};
