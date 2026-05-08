import { twMerge } from "tailwind-merge";

interface AnimatedButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center px-5 py-2.5 rounded-lg border font-medium text-sm tracking-wide cursor-pointer hover:scale-105 transition-transform duration-200";

export function AnimatedButton({
  label,
  onClick,
  className,
}: AnimatedButtonProps) {
  return (
    <button
      name={label}
      className={twMerge(baseClasses, className)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
