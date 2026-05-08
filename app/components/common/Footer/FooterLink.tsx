export function FooterLink({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {label}
      </a>
    </li>
  );
}
