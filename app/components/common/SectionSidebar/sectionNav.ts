import { useEffect, useState } from "react";

/** Shared by the desktop and mobile section navigation. */
export const SECTIONS = [
  { id: "hero", label: "Overview" },
  { id: "mission", label: "Mission" },
  { id: "features", label: "Features" },
  { id: "incubators", label: "Incubators" },
  { id: "NewConsortia", label: "Consortia" },
  { id: "publication", label: "Publications & Events" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Tracks which section currently sits under the "reading line" near the top of the viewport. */
export function useActiveSection(): SectionId {
  const [activeId, setActiveId] = useState<SectionId>(SECTIONS[0].id);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const readingLine = Math.max(176, window.innerHeight * 0.28);
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      let next: SectionId = SECTIONS[0].id;
      if (atBottom) {
        next = SECTIONS[SECTIONS.length - 1].id;
      } else {
        for (const { id } of SECTIONS) {
          const top = document.getElementById(id)?.getBoundingClientRect().top;
          if (top !== undefined && top <= readingLine) next = id;
        }
      }

      setActiveId(next);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return activeId;
}
