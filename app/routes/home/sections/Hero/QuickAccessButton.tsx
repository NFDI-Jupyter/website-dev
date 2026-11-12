import { useSectionScroll } from "@/hooks/SectionScroll";
import { AnimatedButton } from "@/components/ui/AnimatedButton";

interface QuickAccessButtonProps {
  link: { label: string; id: string };
}

export function QuickAccessButton({ link }: QuickAccessButtonProps) {
  const { scrollToSection } = useSectionScroll();

  return (
    <AnimatedButton
      label={link.label}
      className="flex items-center justify-between w-full p-3 bg-slate-900/75 text-white border-none rounded-lg shadow-sm hover:bg-slate-900/10"
      onClick={() => scrollToSection(link.id)}
    />
  );
}
