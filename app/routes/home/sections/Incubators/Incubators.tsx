import { useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { data } from "@/data/Incubators";
import IncubatorCard from "./IncubatorCard";

const CYCLES = data.cycles;

// Every card of every cycle, flattened into one ordered list.
// Order: cycle 1 cards, then cycle 2 cards, ... then back to the start.
const SLIDES = CYCLES.flatMap((cycle, cycleIndex) =>
  cycle.incubators.map((incubator) => ({ incubator, cycleIndex })),
);

// Index in SLIDES of the first card of each cycle (-1 if a cycle is empty).
const FIRST_SLIDE_OF_CYCLE = CYCLES.map((_, cycleIndex) =>
  SLIDES.findIndex((slide) => slide.cycleIndex === cycleIndex),
);

const clampIndex = (index: number) =>
  Math.min(Math.max(index, 0), CYCLES.length - 1);

const getOffset = (index: number, active: number) => {
  const half = SLIDES.length / 2;
  let offset = index - active;
  if (offset > half) offset -= SLIDES.length;
  if (offset < -half) offset += SLIDES.length;
  return offset;
};

const IncubatorCyclesSection: React.FC = () => {
  const [nav, setNav] = useState(() => {
    const start = Math.max(
      FIRST_SLIDE_OF_CYCLE[clampIndex(data.activeCycle)] ?? 0,
      0,
    );
    return { current: start, previous: start };
  });
  const slideIndex = nav.current;
  const setSlideIndex = (index: number) =>
    setNav((n) => ({ previous: n.current, current: index }));

  if (SLIDES.length === 0) return null;

  const activeIndex = SLIDES[slideIndex].cycleIndex;
  const activeCycle = CYCLES[activeIndex];
  const cycleStart = FIRST_SLIDE_OF_CYCLE[activeIndex];

  const projectPosition = slideIndex - cycleStart;

  const goToPreviousCard = () => {
    if (projectPosition > 0) {
      setSlideIndex(slideIndex - 1);
      return;
    }

    const previousCycleIndex =
      (activeIndex - 1 + CYCLES.length) % CYCLES.length;
    const previousCycle = CYCLES[previousCycleIndex];
    setSlideIndex(
      FIRST_SLIDE_OF_CYCLE[previousCycleIndex] +
        previousCycle.incubators.length -
        1,
    );
  };

  const goToNextCard = () => {
    if (projectPosition < activeCycle.incubators.length - 1) {
      setSlideIndex(slideIndex + 1);
      return;
    }

    const nextCycleIndex = (activeIndex + 1) % CYCLES.length;
    setSlideIndex(FIRST_SLIDE_OF_CYCLE[nextCycleIndex]);
  };

  return (
    <section
      id="incubators"
      className="font-sans bg-[#f7fafc] text-[#12283f] px-4 pt-22 pb-26 motion-reduce:**:transition-none sm:px-6"
      aria-labelledby="timeline-heading"
      aria-label="Incubator cycle timeline"
    >
      <div className="max-w-8xl mx-auto px-0 sm:px-6 lg:px-8">
        <h2
          id="timeline-heading"
          className="font-bold text-[clamp(28px,4vw,40px)] text-center tracking-[-0.01em] m-0 mb-11"
        >
          {data.title}
        </h2>

        <div className="mx-auto mb-10 max-w-225 overflow-hidden rounded-2xl border border-[#dbe4ec] bg-white shadow-[0_12px_30px_-20px_rgba(18,40,63,0.45)]">
          <div className="p-3 sm:p-4">
            <nav
              aria-label="Incubator cycles"
              role="tablist"
              className="flex gap-1 sm:gap-2"
            >
              {CYCLES.map((cycle, cycleIndex) => (
                <button
                  key={cycle.range}
                  type="button"
                  role="tab"
                  aria-selected={cycleIndex === activeIndex}
                  onClick={() =>
                    setSlideIndex(FIRST_SLIDE_OF_CYCLE[cycleIndex])
                  }
                  className={[
                    "flex min-w-0 flex-1 flex-col items-start overflow-hidden rounded-xl px-2 py-3 text-left transition-[flex,background-color] duration-300 sm:px-4",
                    cycleIndex === activeIndex
                      ? "bg-[#e7f6fd] text-[#12283f] ring-2 ring-[#1fa8de] ring-offset-2 sm:flex-[8_1_0%]"
                      : "text-[#385166] hover:bg-[#e7f6fd] sm:flex-[1_1_0%]",
                  ].join(" ")}
                >
                  <span className="truncate text-base font-semibold">
                    Cycle {cycleIndex + 1}
                  </span>
                  {cycleIndex === activeIndex && (
                    <span className="max-w-full text-sm text-[#385166]">
                      {cycle.range}
                    </span>
                  )}
                  {cycle.status === "active" && cycleIndex !== activeIndex && (
                    <span className="inline-flex rounded-full bg-[#1fa8de] px-2 py-0.5 align-middle text-xs font-bold uppercase tracking-wide text-white sm:hidden">
                      Current
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center justify-center gap-4 border-t border-[#e7eef3] bg-[#fbfdfe] px-4 py-3">
            <span className="mr-auto text-sm font-semibold text-[#385166]">
              Projects
            </span>
            <button
              className={
                "appearance-none bg-white border border-[#dbe4ec] rounded-full text-[#385166] cursor-pointer grid place-items-center shrink-0 transition-colors duration-150 ease-in-out hover:bg-[#e7f6fd] hover:border-[#1fa8de] hover:text-[#0e7fb0] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none h-9 w-9"
              }
              aria-label="Previous project"
              onClick={goToPreviousCard}
              type="button"
            >
              <LuChevronLeft aria-hidden="true" size={18} />
            </button>
            <div
              className="flex min-w-28 flex-col items-center gap-2"
              role="group"
              aria-label={`Projects within cycle ${activeIndex + 1}`}
            >
              <div className="flex flex-wrap items-center justify-center gap-2">
                {activeCycle.incubators.map((incubator, k) => {
                  const target = cycleStart + k;
                  const isActive = target === slideIndex;

                  return (
                    <button
                      key={`${incubator.name}-${k}`}
                      type="button"
                      aria-label={`Show ${incubator.name}`}
                      aria-current={isActive}
                      onClick={() => setSlideIndex(target)}
                      className={[
                        "h-2 rounded-full cursor-pointer transition-all duration-200 motion-reduce:transition-none",
                        isActive
                          ? "w-6 bg-[#1fa8de]"
                          : "w-2 bg-[#dbe4ec] hover:bg-[#9fb6c8]",
                      ].join(" ")}
                    />
                  );
                })}
              </div>
              <span className="text-xs text-[#64748b]">
                {projectPosition + 1} of {activeCycle.incubators.length}
              </span>
            </div>
            <button
              className={
                "appearance-none bg-white border border-[#dbe4ec] rounded-full text-[#385166] cursor-pointer grid place-items-center shrink-0 transition-colors duration-150 ease-in-out hover:bg-[#e7f6fd] hover:border-[#1fa8de] hover:text-[#0e7fb0] disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none h-9 w-9"
              }
              aria-label="Next project"
              onClick={goToNextCard}
              type="button"
            >
              <LuChevronRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>

        <div className="mx-0 sm:-mx-12 lg:-mx-14">
          <div className="mx-auto max-w-7.5xl overflow-x-clip">
            <div
              className="grid mx-auto w-full max-w-2xl sm:w-[78%] lg:w-[26%] lg:max-w-none"
              role="region"
              aria-roledescription="carousel"
              aria-label="Incubators"
              aria-live="polite"
            >
              {SLIDES.map(({ incubator }, i) => {
                const offset = getOffset(i, slideIndex);
                const moved = getOffset(slideIndex, nav.previous);
                const wrapped = offset !== getOffset(i, nav.previous) - moved;

                return (
                  <IncubatorCard
                    key={`${incubator.name}-${i}`}
                    incubator={incubator}
                    offset={offset}
                    wrapped={wrapped}
                    onSelect={() => setSlideIndex(i)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncubatorCyclesSection;
