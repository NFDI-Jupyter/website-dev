import { useState, useEffect, type RefObject } from "react";
import { NavItem } from "./NavItem";

const DEFAULT_NAV = [
  { label: "Home", href: "/" },
  { label: "Documentation", href: "/docs" },
];

interface HeaderProps {
  navLinks?: { label: string; href: string }[];
  heroRef?: RefObject<HTMLDivElement>;
}

export default function Header({
  navLinks = DEFAULT_NAV,
  heroRef,
}: HeaderProps) {
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
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,22,18,0.08)] border-black/6"
          : "bg-white/20 backdrop-blur-sm border-white/10",
      ].join(" ")}
    >
      {/* Logo */}
      {solid ? (
        <img
          src="Jupyter4NFDI-top.png"
          alt="Jupyter4NFDI"
          draggable={false}
          className="w-40 md:w-52 lg:w-64 object-contain"
        />
      ) : (
        <img
          src="Jupyter4NFDI-transparent.png"
          alt="Jupyter4NFDI"
          draggable={false}
          className="w-40 md:w-52 lg:w-64 object-contain"
        />
      )}

      {/* Desktop Nav */}
      <nav aria-label="Primary navigation" className="hidden sm:block">
        <ul className="flex items-center gap-4 md:gap-8 lg:gap-10 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <NavItem label={label} key={label} href={href} solid={solid} />
          ))}

          <li>
            <a
              href="/prod"
              className={[
                "text-[0.72rem] font-normal tracking-[0.12em] uppercase no-underline",
                "px-3 md:px-4 py-2 rounded-sm border",
                "transition-[color,background,border-color] duration-300 whitespace-nowrap",
                solid
                  ? "text-neutral-700 border-neutral-400 hover:bg-[#023d6b] hover:text-white hover:border-[#023d6b]"
                  : "text-white border-white hover:bg-white/20 hover:text-neutral-900 hover:border-neutral-700/60",
              ].join(" ")}
            >
              try it now
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile: CTA + Hamburger */}
      <div className="flex sm:hidden items-center gap-3">
        <a
          href="/prod"
          className={[
            "text-[0.65rem] font-normal tracking-widest uppercase no-underline",
            "px-3 py-1.5 rounded-sm border",
            "transition-[color,background,border-color] duration-300 whitespace-nowrap",
            solid
              ? "text-neutral-700 border-neutral-400 hover:bg-[#023d6b] hover:text-white hover:border-[#023d6b]"
              : "text-white border-white hover:bg-white/20 hover:text-neutral-900 hover:border-neutral-700/60",
          ].join(" ")}
        >
          try it now
        </a>

        {navLinks.length > 0 && (
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
            className={[
              "flex flex-col justify-center items-center w-8 h-8 gap-1.5",
              solid ? "text-neutral-700" : "text-white",
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
          className={[
            "absolute top-20 left-0 right-0 sm:hidden",
            "flex flex-col px-4 py-3 gap-2",
            solid
              ? "bg-white/95 backdrop-blur-md border-b border-black/6 shadow-md"
              : "bg-white/80 backdrop-blur-md border-b border-white/10",
          ].join(" ")}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-neutral-700 py-2 border-b border-neutral-100 last:border-0 hover:text-[#023d6b] transition-colors"
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
