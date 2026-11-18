import { useState, useEffect, type RefObject } from "react";
import { NavItem } from "./NavItem";
import ExploreHubButton from "@/components/ui/OpenHubButton";
import { AnimatePresence, motion } from "motion/react";

interface HeaderProps {
  heroRef?: RefObject<HTMLDivElement>;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Documentation", href: "https://nfdi-jupyter.de/" },
];

export default function Header({ heroRef }: HeaderProps) {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!heroRef) {
      setSolid(true);
      return;
    }
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom - 72;
        setSolid(heroBottom <= 0);
      } else {
        setSolid(window.scrollY > window.innerHeight - 72);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroRef]);

  return (
    <header
      id="Header"
      role="banner"
      className={[
        // Layout
        "fixed top-0 left-0 right-0 z-50",
        "h-20 flex items-center justify-between",
        "px-6 md:px-12 lg:px-16",
        // Transition
        "transition-[background,backdrop-filter,box-shadow,border-color] duration-450 ease-in-out",
        "border-b",
        // State
        solid
          ? "bg-slate-900/75 backdrop-blur-md shadow-[0_1px_0_rgba(26,22,18,0.08)] border-white/15"
          : "bg-slate-900/90 backdrop-blur-md border-white/15",
      ].join(" ")}
    >
      <a href="/" aria-label="Jupyter4NFDI home">
        <img
          src={"Jupyter4NFDI-transparent.png"}
          alt={"Jupyter4NFDI Logo"}
          draggable={false}
          className="w-40 md:w-52 lg:w-64 object-contain"
        />
      </a>

      {/* Desktop Nav */}
      <nav aria-label="Primary navigation" className="hidden sm:block">
        <motion.ul
          layout
          transition={{
            layout: { type: "spring", stiffness: 260, damping: 30 },
          }}
          className="flex items-center gap-4 md:gap-8 lg:gap-10 list-none m-0 p-0"
        >
          {navLinks.map((link) => (
            <NavItem key={link.label} label={link.label} href={link.href} />
          ))}
          <AnimatePresence initial={false} mode="popLayout">
            {solid && (
            <motion.li
              key="explore-hub"
              layout
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 48 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ExploreHubButton />
            </motion.li>
            )}
          </AnimatePresence>
        </motion.ul>
      </nav>

      {/* Mobile: CTA + Hamburger */}
      <div className="flex sm:hidden items-center gap-3">
        {navLinks.length > 0 && (
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((o) => !o)}
            className={[
              "flex flex-col justify-center items-center w-8 h-8 gap-1.5",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              "text-white",
            ].join(" ")}
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className={[
            "absolute top-20 left-0 right-0 sm:hidden",
            "flex flex-col px-4 py-3 gap-2",
            "bg-slate-900 border-b border-white/15 shadow-md",
          ].join(" ")}
        >
          {navLinks.map(({ label, href }: { label: string; href: string }) => (
            <a
              key={label}
              href={href}
              className="text-base text-white py-2 border-b border-white/10 last:border-0 hover:text-white/80 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
