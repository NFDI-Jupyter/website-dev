import { LuMail } from "react-icons/lu";
import { SiMattermost, SiRocketdotchat } from "react-icons/si";
import { FooterLink } from "./FooterLink";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Jupyter4NFDI</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Making distributed HPC and Cloud computing resources accessible
              through a unified JupyterHub platform for academic research
              institutions
            </p>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
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
            <h4 className="text-lg font-semibold mb-2">Jupyter4NFDI</h4>
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
            <h4 className="text-lg font-semibold my-2">Base4NFDI</h4>
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
            <h3 className="text-lg font-semibold mb-2">legal</h3>
            <ul>
              <FooterLink href="#" label="Imprint" />
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Terms of Service" />
              <FooterLink href="#" label="Accessibility Statement" />
            </ul>
            <h3 className="text-lg font-semibold my-2">Funding</h3>
            <img
              src="dfg_logo_schriftzug_weiss_foerderung_en.gif"
              alt="DFG Logo"
              draggable={false}
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
          </div>
        </div>
      </div>
    </footer>
  );
}
