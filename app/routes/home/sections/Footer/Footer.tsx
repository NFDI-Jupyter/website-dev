import { LuMail } from "react-icons/lu";
import { SiMattermost, SiRocketdotchat } from "react-icons/si";
import { FooterLink } from "./FooterLink";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Jupyter4NFDI</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Connecting researchers to distributed HPC and Cloud computing
              resources through a unified JupyterHub platform, supporting FAIR
              research principles.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Jupyter4NFDI</h4>
            <ul className="space-y-3">
              <FooterLink
                href="https://jupyter4nfdi.de/about/"
                label="About Us"
              />
              <FooterLink
                href="https://jupyter4nfdi.de/docs/"
                label="Documentation"
              />
            </ul>
            <h4 className="text-lg font-semibold my-6">Contact us</h4>
            <ul className="space-y-3">
              <FooterLink
                href="mailto:jupyter4nfdi@lists.nfdi.de"
                icon={<LuMail className="text-lg" />}
                label="jupyter4nfdi@lists.nfdi.de"
              />
              <FooterLink
                href="https://mattermost.nfdi.de/jupyter4nfdi"
                icon={<SiMattermost className="text-lg" />}
                label="Join our Mattermost"
              />
              <FooterLink
                href="https://rocket.chat/nfdi"
                icon={<SiRocketdotchat className="text-lg" />}
                label="Join our Rocket.Chat"
              />
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Base4NFDI</h4>
            <ul className="space-y-3">
              <FooterLink
                href="https://www.base4nfdi.de/"
                label="What is Base4NFDI?"
              />
              <FooterLink
                href="https://base4nfdi.de/process/basic-services"
                label="What is a basic service?"
              />
              <FooterLink
                href="https://base4nfdi.de/about/mission-statement"
                label="What is Base4NFDIs mission?"
              />
            </ul>
          </div>
          <div>
            <img
              src="dfg_logo_schriftzug_weiss_foerderung_en.gif"
              alt="DFG Logo"
              width={256}
            />
            <p className="text-gray-400 text-sm">
              Partially funded by DFG as part of NFDI.
            </p>
            <p className="text-gray-400 text-sm">Grant Number 521453681</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              ©2026 Jupyter4NFDI. Supporting FAIR research across German
              academic institutions.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
