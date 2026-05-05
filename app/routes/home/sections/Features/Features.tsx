import { motion } from "motion/react";
import {
  LuUsers,
  LuRocket,
  LuScreenShare,
  LuLayoutDashboard,
  LuPresentation,
  LuContainer,
} from "react-icons/lu";
import { FlipCard } from "./Flipcard";

export default function Features() {
  const features = [
    {
      icon: <LuLayoutDashboard />,
      title: "Easy-to-Use Interface",
      oneLiner: "Jupyter Notebook interface for all skill levels",
      description:
        "The platform uses the popular Jupyter Notebook interface, making it easy for users of all skill levels to interact with powerful computational resources. You can run code, develop models, and perform analyses all from your web browser.",
    },
    {
      icon: <LuRocket />,
      title: "Quick Launch",
      oneLiner: "Get started with powerful computing in seconds",
      description:
        "Launch JupyterLab instances with just a few clicks, connecting to powerful computing resources instantly. No complex setup or configuration required.",
    },
    {
      icon: <LuScreenShare />,
      title: "FAIR Research",
      oneLiner: "Findable, Accessible, Interoperable, Reusable",
      description:
        "Supporting Findable, Accessible, Interoperable, and Reusable research principles in all our implementations. Ensure your research meets modern scientific standards.",
    },
    {
      icon: <LuUsers />,
      title: "Multi-Institutional",
      oneLiner: "Collaborate across institutions seamlessly",
      description:
        "Connecting researchers across different institutions and enabling collaborative work on shared computing resources. Break down silos and work together.",
    },
    {
      icon: <LuContainer />,
      title: "Bring Your Own Environment",
      oneLiner: "Custom Docker images for any setup",
      description:
        "Jupyter4NFDI supports custom Docker images, meaning you can define and use your own computing environment. This flexibility allows you to pre-install specific dependencies, configure your environment exactly as needed, and run reproducible computational workflows across multiple sessions.",
    },
    {
      icon: <LuPresentation />,
      title: "Easy Workshops",
      oneLiner: "Pre-configured environments for training",
      description:
        "Facilitating workshops and training sessions with pre-configured environments and easy access to HPC resources for hands-on learning. Everything is ready to go.",
    },
  ];

  return (
    <section className="py-20 bg-[#ebebeb]">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What we offer
          </h2>
          <p className="text-gray-600">
            Click any card to discover more details
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <FlipCard feature={feature} index={index} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
