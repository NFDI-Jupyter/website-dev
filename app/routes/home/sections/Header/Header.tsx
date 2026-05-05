import { useState, useEffect, type RefObject } from "react";
import { NavItem } from "./NavItem";

const DEFAULT_NAV = [{ label: "Documentation", href: "/docs" }];

interface HeaderProps {
  navLinks?: { label: string; href: string }[];
  heroRef?: RefObject<HTMLDivElement>;
}

export default function Header({
  navLinks = DEFAULT_NAV,
  heroRef,
}: HeaderProps) {
  const [solid, setSolid] = useState(false);

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
        <img src="Jupyter4NFDI-top.png" alt="Jupyter4NFDI" width={256} />
      ) : (
        <img
          src="Jupyter4NFDI-transparent.png"
          alt="Jupyter4NFDI"
          width={256}
          className="object-contain"
        />
      )}

      {/* Nav */}
      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-6 md:gap-8 lg:gap-10 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => (
            <NavItem label={label} key={label} href={href} solid={solid} />
          ))}

          <li className="sm:block">
            <a
              href={"/prod"}
              className={[
                "text-[0.72rem] font-normal tracking-[0.12em] uppercase no-underline",
                "px-4 py-2 rounded-sm border",
                "transition-[color,background,border-color] duration-300",
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
    </header>
  );
}
