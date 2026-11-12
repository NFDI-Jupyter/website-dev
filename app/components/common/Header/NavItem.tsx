import { Link } from "react-router";
import { motion } from "motion/react";
interface NavItemProps {
  label: string;
  href: string;
}

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <motion.li
      layout
      key={label}
      transition={{ layout: { type: "spring", stiffness: 260, damping: 30 } }}
    >
      <Link
        to={href}
        className={[
          "text-base font-medium tracking-[0.04em] uppercase no-underline",
          "transition-colors duration-300",
          "text-white hover:text-[#00b1e5]",
        ].join(" ")}
      >
        {label}
      </Link>
    </motion.li>
  );
};
