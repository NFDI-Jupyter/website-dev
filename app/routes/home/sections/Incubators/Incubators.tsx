import { useState } from "react";
import {
  LuChevronLeft,
  LuChevronRight,
  LuSquareArrowUpRight,
} from "react-icons/lu";
import { data } from "@/data/Incubators";

const CYCLES = data.cycles;

const clampIndex = (index: number) =>
  Math.min(Math.max(index, 0), CYCLES.length - 1);

const displayFont = "font-['Space_Grotesk',_Inter,_sans-serif]";
const monoFont = "font-['IBM_Plex_Mono',_ui-monospace,_monospace]";

const IncubatorCyclesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(
    clampIndex(data.activeCycle),
  );
  const [hovered, setHovered] = useState<number | null>(null);

  const activeCycle = CYCLES[activeIndex] ?? CYCLES[0];
  const activeIncubators = activeCycle?.incubators ?? [];

  const prevCycle = activeIndex > 0 ? CYCLES[activeIndex - 1] : null;
  const nextCycle =
    activeIndex < CYCLES.length - 1 ? CYCLES[activeIndex + 1] : null;

  const goToPreviousCycle = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const goToNextCycle = () => {
    setActiveIndex((current) => Math.min(current + 1, CYCLES.length - 1));
  };

  const handleTimelineKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPreviousCycle();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNextCycle();
    }
  };

  return (
    <section
      id="incubators"
      className="font-sans bg-[#f7fafc] text-[#12283f] px-6 pt-22 pb-26 motion-reduce:**:transition-none"
      aria-labelledby="timeline-heading"
      aria-label="Incubator cycle timeline"
      tabIndex={0}
      onKeyDown={handleTimelineKeyDown}
    >
      <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
        <h2
          className={`${displayFont} font-bold text-[clamp(28px,4vw,40px)] text-center tracking-[-0.01em] m-0 mb-11`}
        >
          {data.title}
        </h2>

        <div className="relative mx-auto mb-18 max-w-225">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 z-0 bg-[repeating-linear-gradient(to_right,#dbe4ec_0px,#dbe4ec_6px,transparent_6px,transparent_12px)]"
            aria-hidden="true"
          />
          <nav
            className="grid grid-cols-[1fr_auto_1fr] items-center gap-4.5"
            aria-label="Incubator cycles timeline"
          >
            <div className="relative z-1 flex items-center gap-2.5 justify-end">
              <button
                className="appearance-none bg-white border border-[#dbe4ec] rounded-full text-[#385166] cursor-pointer grid place-items-center w-7.5 h-7.5 transition-colors duration-150 ease-in-out hover:bg-[#e7f6fd] hover:border-[#1fa8de] hover:text-[#0e7fb0] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none"
                aria-label="Show earlier cycles"
                onClick={goToPreviousCycle}
                disabled={!prevCycle}
                type="button"
              >
                <LuChevronLeft size={16} />
              </button>
              {prevCycle && (
                <button
                  className="group appearance-none bg-transparent border-0 p-0 cursor-pointer flex flex-col items-center gap-1.5 px-1 py-1.5 rounded-[10px] transition-transform duration-[0.18s] ease-in-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-[#1fa8de] focus-visible:outline-offset-[3px]"
                  onClick={() => setActiveIndex(activeIndex - 1)}
                  type="button"
                  aria-label={`View cycle ${activeIndex}`}
                >
                  <span
                    className="w-2.25 h-2.25 rounded-full bg-white border-2 border-[#dbe4ec] group-hover:border-[#1fa8de]"
                    aria-hidden="true"
                  />
                  <span
                    className={`${monoFont} text-[11px] text-[#64748b] whitespace-nowrap max-[640px]:hidden`}
                  >
                    Cycle {activeIndex}
                  </span>
                </button>
              )}
            </div>

            <div
              className="relative z-2 flex flex-col items-center gap-1.5 bg-[#12283f] text-white px-7.5 pt-4 pb-3.5 rounded-full shadow-[0_14px_30px_-12px_rgba(18,40,63,0.45)] max-[640px]:px-5 max-[640px]:pt-3 max-[640px]:pb-2.75"
              aria-live="polite"
              aria-current="true"
            >
              <span
                className={`${monoFont} text-[11px] tracking-[0.08em] text-[#1fa8de] flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#1fa8de] before:shadow-[0_0_0_4px_rgba(31,168,222,0.25)]`}
              >
                Cycle {activeIndex + 1} · {activeCycle.status}
              </span>
              <span className="text-[11px] text-white/60">
                {activeCycle.range}
              </span>
            </div>

            <div className="relative z-1 flex items-center gap-2.5 justify-start">
              {nextCycle && (
                <button
                  className="group appearance-none bg-transparent border-0 p-0 cursor-pointer flex flex-col items-center gap-1.5 px-1 py-1.5 rounded-[10px] transition-transform duration-[0.18s] ease-in-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-[#1fa8de] focus-visible:outline-offset-[3px]"
                  onClick={() => setActiveIndex(activeIndex + 1)}
                  type="button"
                  aria-label={`View cycle ${activeIndex + 2}`}
                >
                  <span
                    className="w-2.25 h-2.25 rounded-full bg-white border-2 border-[#dbe4ec] group-hover:border-[#1fa8de]"
                    aria-hidden="true"
                  />
                  <span
                    className={`${monoFont} text-[11px] text-[#64748b] whitespace-nowrap max-[640px]:hidden`}
                  >
                    Cycle {activeIndex + 2}
                  </span>
                </button>
              )}
              <button
                className="appearance-none bg-white border border-[#dbe4ec] rounded-full text-[#385166] cursor-pointer grid place-items-center w-7.5 h-7.5 transition-colors duration-150 ease-in-out hover:bg-[#e7f6fd] hover:border-[#1fa8de] hover:text-[#0e7fb0] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none"
                aria-label="Show later cycles"
                onClick={goToNextCycle}
                disabled={nextCycle === null}
                type="button"
              >
                <LuChevronRight size={16} />
              </button>
            </div>
          </nav>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4 min-h-140 content-start"
          role="list"
          aria-label={`${activeCycle.range} incubators`}
        >
          {activeIncubators.map((incubator, i) => {
            const isHovered = hovered === i;
            const isDimmed = hovered !== null && !isHovered;

            return (
              <div
                key={`${incubator.name}-${i}`}
                className={[
                  "bg-white border border-[#dbe4ec] rounded-2xl w-full max-w-2xl overflow-hidden no-underline text-inherit flex flex-col shrink grow",
                  "transition-[transform,opacity,box-shadow,border-color] duration-[0.28s] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "motion-reduce:transition-none",
                  isDimmed ? "opacity-50 scale-[0.97]" : "",
                  isHovered
                    ? "opacity-100 scale-[1.035] shadow-[0_22px_40px_-16px_rgba(18,40,63,0.28)] border-[#1fa8de] z-3"
                    : "",
                ].join(" ")}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                role="listitem"
                aria-label={`${incubator.name} by ${incubator.institution}`}
              >
                <div className="aspect-4/3 overflow-hidden bg-[#f7fafc]">
                  <img
                    src={incubator.image}
                    alt={incubator.name}
                    loading="lazy"
                    className={[
                      "w-full h-full object-fit block",
                      "transition-transform duration-[0.4s] ease-in-out motion-reduce:transition-none",
                      isHovered ? "scale-[1.06]" : "",
                    ].join(" ")}
                  />
                </div>
                <div className="px-4.5 pt-4.5 pb-5 flex flex-col gap-2 flex-1">
                  <span
                    className={`${monoFont} text-[10.5px] tracking-[0.06em] uppercase text-[#0e7fb0]`}
                  >
                    {incubator.institution}
                  </span>
                  <h3
                    className={`${displayFont} font-semibold text-base m-0 leading-[1.3]`}
                  >
                    {incubator.name}
                  </h3>
                  <p className="m-0 flex-1 text-sm leading-5 text-slate-500">
                    {incubator.description}
                  </p>
                  <a
                    href={incubator.href}
                    className="mt-1.5 inline-flex items-center gap-1.25 text-[13px] font-semibold text-[#0e7fb0]"
                  >
                    Learn more{" "}
                    <LuSquareArrowUpRight
                      className={[
                        "w-3.5 h-3.5 transition-transform duration-200 ease-in-out motion-reduce:transition-none hover:translate-x-0.5 hover:-translate-y-0.5",
                      ].join(" ")}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IncubatorCyclesSection;
