import { ConsortiaCard } from "./Card";
import type { Consortium } from "./types";

export default function Consortia() {
  const consortia: Consortium[] = [
    {
      name: "NFDI4Chem",
      domain: "Chemistry",
      description:
        "Enabling FAIR data management and research data infrastructure for chemistry",
      logoUrl:
        "https://readdy.ai/api/search-image?query=Modern%20chemistry%20laboratory%20with%20advanced%20analytical%20instruments%2C%20molecular%20structure%20visualizations%20on%20screens%2C%20clean%20white%20surfaces%2C%20blue%20accent%20lighting%2C%20scientific%20research%20environment%20with%20computers%20displaying%20chemical%20data&width=350&height=200&seq=nfdi4chem&orientation=landscape",
    },
    {
      name: "NFDI4BioDiversity",
      domain: "Biodiversity",
      description:
        "Mobilizing biodiversity and environmental data for research and society",
      logoUrl:
        "https://readdy.ai/api/search-image?query=Biodiversity%20research%20laboratory%20with%20microscopes%2C%20specimen%20collections%2C%20digital%20displays%20showing%20ecosystem%20data%2C%20modern%20scientific%20equipment%2C%20green%20and%20blue%20color%20scheme%2C%20environmental%20monitoring%20systems&width=350&height=200&seq=nfdi4bio&orientation=landscape",
    },
    {
      name: "NFDI4Earth",
      domain: "Earth Sciences",
      description: "Creating a federated system for Earth system research data",
      logoUrl:
        "https://readdy.ai/api/search-image?query=Earth%20sciences%20research%20center%20with%20satellite%20data%20displays%2C%20geological%20samples%2C%20climate%20monitoring%20equipment%2C%20blue%20and%20earth-tone%20color%20scheme%2C%20modern%20scientific%20workstations%20with%20geographic%20visualizations&width=350&height=200&seq=nfdi4earth&orientation=landscape",
    },
    {
      name: "NFDI4Health",
      domain: "Health Sciences",
      description: "Improving health research through better data management",
      logoUrl:
        "https://readdy.ai/api/search-image?query=Medical%20research%20laboratory%20with%20advanced%20diagnostic%20equipment%2C%20health%20data%20visualization%20screens%2C%20clean%20sterile%20environment%2C%20blue%20and%20white%20medical%20color%20scheme%2C%20modern%20healthcare%20technology%20setup&width=350&height=200&seq=nfdi4health&orientation=landscape",
    },
    {
      name: "NFDI4Ing",
      domain: "Engineering",
      description: "Engineering research data infrastructure and services",
      logoUrl:
        "https://readdy.ai/api/search-image?query=Engineering%20research%20facility%20with%20CAD%20workstations%2C%203D%20modeling%20displays%2C%20technical%20blueprints%2C%20modern%20industrial%20design%20equipment%2C%20blue%20and%20gray%20color%20scheme%2C%20precision%20engineering%20tools&width=350&height=200&seq=nfdi4ing&orientation=landscape",
    },
    {
      name: "NFDI4DataScience",
      domain: "Data Science",
      description:
        "Cross-domain data science and artificial intelligence research infrastructure",
      logoUrl:
        "https://readdy.ai/api/search-image?query=Data%20science%20laboratory%20with%20multiple%20monitors%20displaying%20algorithms%2C%20neural%20network%20visualizations%2C%20machine%20learning%20models%2C%20modern%20workstations%2C%20blue%20and%20purple%20tech%20color%20scheme%2C%20AI%20research%20environment&width=350&height=200&seq=nfdi4ds&orientation=landscape",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-400">
            Currently only examples. Get real data!
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Supporting NFDI Consortia
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consortia.map((consortium, index) => (
            <ConsortiaCard consortium={consortium} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
