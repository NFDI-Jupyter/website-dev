interface NavItemProps {
  label: string;
  href: string;
  solid: boolean;
}

export const NavItem = ({ label, href, solid }: NavItemProps) => {
  return (
    <li key={label}>
      <a
        href={href}
        className={[
          "text-[0.72rem] font-normal tracking-[0.12em] uppercase no-underline",
          "transition-colors duration-300",
          solid
            ? "text-neutral-800 hover:text-primary"
            : "text-white hover:text-neutral-900",
        ].join(" ")}
      >
        {label}
      </a>
    </li>
  );
};
