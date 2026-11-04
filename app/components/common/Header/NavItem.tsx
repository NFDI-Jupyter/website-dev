import { Link } from "react-router";
interface NavItemProps {
  label: string;
  href: string;
  solid: boolean;
}

export const NavItem = ({ label, href, solid }: NavItemProps) => {
  return (
    <li key={label}>
      <Link
        to={href}
        className={[
          "text-[0.72rem] font-normal tracking-[0.12em] uppercase no-underline",
          "transition-colors duration-300",
          solid
            ? "text-neutral-800 hover:text-primary"
            : "text-white hover:text-neutral-900",
        ].join(" ")}
      >
        {label}
      </Link>
    </li>
  );
};
