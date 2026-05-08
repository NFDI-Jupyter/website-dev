import type { Feature } from "@/types/Feature";
import {
  LuLayoutDashboard,
  LuRocket,
  LuScreenShare,
  LuUsers,
  LuContainer,
  LuPresentation,
} from "react-icons/lu";

interface FeaturesData {
  title: string;
  subtitle: string;
  features: Feature[];
}

export const data: FeaturesData = {
  title: "What we offer",
  subtitle: "Click any card to discover more details",
  features: [
    {
      icon: LuLayoutDashboard,
      title: "Easy-to-Use Interface",
      oneLiner: "Jupyter Notebook interface for all skill levels",
      description:
        "The platform uses the popular Jupyter Notebook interface, making it easy for users of all skill levels to interact with powerful computational resources. You can run code, develop models, and perform analyses all from your web browser.",
    },
    {
      icon: LuRocket,
      title: "Quick Launch",
      oneLiner: "Get started with powerful computing in seconds",
      description:
        "Launch JupyterLab instances with just a few clicks, connecting to powerful computing resources instantly. No complex setup or configuration required.",
    },
    {
      icon: LuScreenShare,
      title: "FAIR Research",
      oneLiner: "Findable, Accessible, Interoperable, Reusable",
      description:
        "Supporting Findable, Accessible, Interoperable, and Reusable research principles in all our implementations. Ensure your research meets modern scientific standards.",
    },
    {
      icon: LuUsers,
      title: "Multi-Institutional",
      oneLiner: "Collaborate across institutions seamlessly",
      description:
        "Connecting researchers across different institutions and enabling collaborative work on shared computing resources. Break down silos and work together.",
    },
    {
      icon: LuContainer,
      title: "Bring Your Own Environment",
      oneLiner: "Custom Docker images for any setup",
      description:
        "Jupyter4NFDI supports custom Docker images, meaning you can define and use your own computing environment. This flexibility allows you to pre-install specific dependencies, configure your environment exactly as needed, and run reproducible computational workflows across multiple sessions.",
    },
    {
      icon: LuPresentation,
      title: "Easy Workshops",
      oneLiner: "Pre-configured environments for training",
      description:
        "Facilitating workshops and training sessions with pre-configured environments and easy access to HPC resources for hands-on learning. Everything is ready to go.",
    },
  ],
};
