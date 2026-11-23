import { useId } from "react";
import ExploreHubButton from "@/components/ui/OpenHubButton";

const steps = [
  {
    title: "Visit the website",
    description: "Open the NFDI Juypterhub.",
  },
  {
    title: "Log in",
    description: "Using your consortia or an guest account.",
  },
  {
    title: "Select a system",
    description: "Choose a cloud resource.",
  },
  {
    title: "Start working",
    description: "Create a new Jupyter notebook and get going.",
  },
];

export function GettingStarted() {
  const headingId = useId();

  return (
    <div
      role="group"
      aria-labelledby={headingId}
      className="rounded-2xl bg-white p-6 text-[#102b3d] shadow-2xl shadow-[#102b3d]/25 ring-1 ring-[#102b3d]/5 sm:p-8"
    >
      <h2 id={headingId} className="text-xl font-semibold sm:text-2xl">
        Getting started
      </h2>

      <ol className="mt-6">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-4 top-9 w-px -translate-x-1/2 bg-[#d8e2e8]"
                />
              )}
              <span
                aria-hidden="true"
                className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f7fb] text-sm font-bold text-[#075a7b] ring-1 ring-[#b8cdd6]"
              >
                {index + 1}
              </span>
              <div className="pt-1">
                <p className="font-semibold leading-tight">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#385166]">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8">
        <ExploreHubButton variant="solid" />
      </div>
    </div>
  );
}
