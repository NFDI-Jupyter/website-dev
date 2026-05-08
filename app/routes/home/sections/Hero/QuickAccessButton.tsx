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
      className="flex items-center justify-between w-full p-3 bg-white/20 text-white border-none rounded-lg"
      onClick={() => scrollToSection(link.id)}
    />
  );
}
