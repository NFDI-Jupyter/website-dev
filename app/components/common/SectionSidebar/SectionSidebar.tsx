import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  type Variants,
} from "motion/react";
import { LuChevronRight } from "react-icons/lu";
import { useSectionScroll } from "@/hooks/SectionScroll";
import {
  EASE_OUT,
  EASE_STANDARD,
  SECTIONS,
  type SectionId,
  useActiveSection,
} from "./sectionNav";

/** How long the sidebar stays open after the mouse leaves it. */
const HOVER_CLOSE_DELAY_MS = 400;
/** Short pause after a selection so it registers before the menu hides. */
const SELECT_CLOSE_DELAY_MS = 250;

const listVariants: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.18, ease: EASE_OUT },
  },
};

export default function SectionSidebar() {
  const activeId = useActiveSection();
  const { scrollToSection } = useSectionScroll();

  /** Opened explicitly (handle, keyboard focus). */
  const [isOpen, setIsOpen] = useState(false);
  /** Expanded by a mouse hovering it. */
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isOpen || isHovered;

  const navRef = useRef<HTMLElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  const selectTimer = useRef<number | undefined>(undefined);
  const listId = useId();

  useEffect(
    () => () => {
      window.clearTimeout(hoverTimer.current);
      window.clearTimeout(selectTimer.current);
    },
    [],
  );

  const close = () => {
    window.clearTimeout(selectTimer.current);
    selectTimer.current = undefined;
    setIsOpen(false);
  };

  /** For dismissals where focus would otherwise be lost in the collapsed (inert) list. */
  const closeAndRestoreFocus = () => {
    const hadFocus = navRef.current?.contains(document.activeElement);
    close();
    window.clearTimeout(hoverTimer.current);
    setIsHovered(false);
    if (hadFocus) handleRef.current?.focus();
  };

  // The handle hides while open, so focus moves into the list. flushSync makes
  // the list non-inert before we focus it.
  const openFromHandle = () => {
    flushSync(() => setIsOpen(true));
    const list = listRef.current;
    const target =
      list?.querySelector<HTMLElement>('[aria-current="location"]') ??
      list?.querySelector<HTMLElement>("a");
    target?.focus({ preventScroll: true });
  };

  const handleSelect = (id: SectionId) => {
    scrollToSection(id);
    window.clearTimeout(selectTimer.current);
    // Only an explicit open is closed; a hovering mouse keeps it expanded.
    // Set before moving focus so onBlur leaves the close to this timer.
    selectTimer.current = window.setTimeout(close, SELECT_CLOSE_DELAY_MS);
    if (navRef.current?.contains(document.activeElement)) {
      document.getElementById(id)?.focus({ preventScroll: true });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      {/* Small screens: dim the page while the menu is open; tapping it closes. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            aria-hidden="true"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-[2px] lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        ref={navRef}
        aria-label="Page sections"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: EASE_STANDARD }}
        className="pointer-events-none fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-0 z-40 lg:pointer-events-auto lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2"
        onPointerEnter={(event) => {
          if (event.pointerType !== "mouse") return;
          window.clearTimeout(hoverTimer.current);
          setIsHovered(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType !== "mouse") return;
          window.clearTimeout(hoverTimer.current);
          hoverTimer.current = window.setTimeout(
            () => setIsHovered(false),
            HOVER_CLOSE_DELAY_MS,
          );
        }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && isExpanded) closeAndRestoreFocus();
        }}
        // Keyboard focus on a link (e.g. tabbing in while hover-expanded) pins it
        // open, so it can't collapse around the focused link when the mouse leaves.
        onFocus={(event) => {
          if (
            event.target !== handleRef.current &&
            event.target.matches(":focus-visible")
          ) {
            setIsOpen(true);
          }
        }}
        // Focus leaving the nav (tabbing away, clicking elsewhere) closes it.
        // A pending selection close is left to its timer.
        onBlur={(event) => {
          if (
            selectTimer.current === undefined &&
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            close();
          }
        }}
      >
        <div
          data-expanded={isExpanded || undefined}
          // Expanded height = n items + (n - 1) gaps; item h-11 / lg:h-12, gap-1.5.
          style={{ "--items": SECTIONS.length } as CSSProperties}
          className={[
            "relative w-[16.5rem] max-w-[85vw] lg:w-72 lg:max-w-none",
            "h-11 lg:h-12",
            "data-expanded:h-[calc(var(--items)*2.75rem+(var(--items)-1)*0.375rem)]",
            "lg:data-expanded:h-[calc(var(--items)*3rem+(var(--items)-1)*0.375rem)]",
            "transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          ].join(" ")}
        >
          <button
            ref={handleRef}
            type="button"
            aria-label="Show page section navigation"
            aria-expanded={isExpanded}
            aria-controls={listId}
            // Hidden while expanded; focus moves into the list instead.
            tabIndex={isExpanded ? -1 : 0}
            data-expanded={isExpanded || undefined}
            onClick={openFromHandle}
            className={[
              "absolute bottom-0 left-0 flex h-11 w-7 items-center rounded-r-full border border-l-0 border-white/15 bg-slate-900/90 pl-0.5 text-white backdrop-blur-md lg:bottom-auto lg:top-1/2 lg:h-12 lg:w-8 lg:-translate-y-1/2",
              "shadow-[0_6px_18px_rgba(15,23,43,0.3)] transition-[opacity,scale,box-shadow] duration-[160ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
              "pointer-events-auto data-expanded:pointer-events-none data-expanded:scale-75 data-expanded:opacity-0 data-expanded:shadow-none",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
            ].join(" ")}
          >
            {/* Invisible padding widens the tap target without enlarging the tab. */}
            <span
              aria-hidden="true"
              className="absolute -inset-y-2 -right-3 left-0"
            />
            <LuChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
          </button>

          <motion.ul
            ref={listRef}
            id={listId}
            initial={false}
            animate={isExpanded ? "visible" : "hidden"}
            variants={listVariants}
            inert={!isExpanded}
            className="pointer-events-none absolute left-0 top-0 flex h-full flex-col items-start gap-1.5 data-expanded:pointer-events-auto"
            data-expanded={isExpanded || undefined}
          >
            {SECTIONS.map(({ id, label }) => {
              const isActive = id === activeId;

              return (
                <motion.li
                  key={id}
                  variants={itemVariants}
                  className="max-w-full"
                >
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      handleSelect(id);
                    }}
                    className={[
                      "group flex h-11 max-w-full items-center justify-between gap-3 overflow-hidden whitespace-nowrap rounded-r-full px-5 text-left text-[0.95rem] lg:h-12 lg:pl-6 lg:text-base",
                      "transition-[width,background-color,color,box-shadow,scale] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none motion-safe:active:scale-[0.98]",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:focus-visible:outline-primary",
                      isActive
                        ? "w-[16.5rem] bg-white font-semibold text-slate-900 shadow-[0_10px_30px_rgba(15,23,43,0.25)] hover:bg-slate-100 lg:w-72"
                        : // The inactive pill slides out on hover (desktop, unless motion is reduced).
                          "w-60 border border-l-0 border-white/15 bg-slate-900/90 font-medium text-white backdrop-blur-md hover:bg-slate-800/95 hover:shadow-[0_8px_22px_rgba(15,23,43,0.35)] lg:w-64 lg:motion-safe:hover:w-68",
                    ].join(" ")}
                  >
                    <span className="truncate">{label}</span>
                    <LuChevronRight
                      aria-hidden="true"
                      className="hidden h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 lg:block"
                    />
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </motion.nav>
    </MotionConfig>
  );
}
