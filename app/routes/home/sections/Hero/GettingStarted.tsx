import ExploreHubButton from "@/components/ui/OpenHubButton";

const steps = [
  {
    title: "Visit the website",
    description: "Open the Jupyter4NFDI Hub.",
  },
  {
    title: "Login",
    description: "Use your Helmholtz ID.",
  },
  {
    title: "Select a system",
    description: "Choose a Cloud resource.",
  },
  {
    title: "Start and have fun",
    description: "Launch Jupyter and get to work.",
  },
];

export function GettingStarted() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/20">
      <h3 className="text-white text-xl font-semibold mb-5">Getting started</h3>
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-3 text-white">
            <span className="flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-white text-blue-700 text-sm font-bold">
              {index + 1}
            </span>
            <div>
              <h4 className="font-semibold">{step.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-white/80">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6">
        <ExploreHubButton />
      </div>
    </div>
  );
}
