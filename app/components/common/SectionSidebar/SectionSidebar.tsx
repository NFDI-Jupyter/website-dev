import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useSectionScroll } from "@/hooks/SectionScroll";

const sections = [
	{ id: "hero", label: "Overview" },
	{ id: "mission", label: "Mission" },
	{ id: "features", label: "Features" },
	{ id: "incubators", label: "Incubators" },
	{ id: "NewConsortia", label: "Consortia" },
	{ id: "publication", label: "Publications & Events" },
];

export default function SectionSidebar() {
	const [activeId, setActiveId] = useState(sections[0].id);
	const { scrollToSection } = useSectionScroll();
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		let frame = 0;

		const updateActiveSection = () => {
			frame = 0;
			const readingLine = Math.max(176, window.innerHeight * 0.28);
			let nextActiveId = sections[0].id;

			for (const section of sections) {
				const element = document.getElementById(section.id);
				if (element && element.getBoundingClientRect().top <= readingLine) {
					nextActiveId = section.id;
				}
			}

			if (
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 2
			) {
				nextActiveId = sections.at(-1)?.id ?? nextActiveId;
			}

			setActiveId((current) =>
				current === nextActiveId ? current : nextActiveId,
			);
		};

		const requestUpdate = () => {
			if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
		};

		updateActiveSection();
		window.addEventListener("scroll", requestUpdate, { passive: true });
		window.addEventListener("resize", requestUpdate);

		return () => {
			window.removeEventListener("scroll", requestUpdate);
			window.removeEventListener("resize", requestUpdate);
			if (frame) window.cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<motion.nav
			aria-label="Page sections"
			initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
			className="fixed left-0 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
		>
			<div className="flex flex-col items-start gap-1.5">
				{sections.map((section) => {
					const isActive = activeId === section.id;

					return (
						<motion.button
							key={section.id}
							type="button"
							aria-current={isActive ? "location" : undefined}
							aria-label={`Go to ${section.label}`}
							onClick={() => scrollToSection(section.id)}
							initial={{
								width: "16rem",
								backgroundColor: "rgb(37 99 235 / 75%)",
								color: "rgb(255 255 255 / 90%)",
							}}
							animate={{
								width: isActive ? "18rem" : "16rem",
								backgroundColor: isActive ? "rgb(255 255 255)" : "rgb(37 99 235 / 75%)",
								color: isActive ? "rgb(15 23 42)" : "rgb(255 255 255 / 90%)",
								translateX: isActive ? "0" : "0",
								transition: {
									duration: 0.3,
									ease: [0.4, 0, 0.2, 1],
								},
							}}
							whileHover={
								shouldReduceMotion
									? undefined
									: {
										scale: 1.03,
										x: 0,
										backgroundColor: isActive
											? "rgb(255 255 255)"
											: "rgb(37 99 235 / 90%)",
									}
							}
							whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
							className={[
								"flex h-12 items-center overflow-hidden rounded-r-full pl-6 pr-5 text-left text-base font-medium outline-none",
								"focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
								isActive
									? "shadow-[0_10px_30px_rgba(15,23,42,0.18)]"
									: "hover:bg-primary/90",
							].join(" ")}
						>
							<span className="whitespace-nowrap">{section.label}</span>
						</motion.button>
					);
				})}
			</div>
		</motion.nav>
	);
}
