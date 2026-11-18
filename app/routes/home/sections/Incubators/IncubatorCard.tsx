import { LuSquareArrowUpRight } from "react-icons/lu";
import type { Incubator } from "@/data/Incubators";

interface IncubatorCardProps {
  incubator: Incubator;
  offset: number;
  wrapped: boolean;
  onSelect?: () => void;
}

const IncubatorCard = ({
  incubator,
  offset,
  wrapped,
  onSelect,
}: IncubatorCardProps) => {
  const distance = Math.abs(offset);
  const isActive = offset === 0;
  const isNear = distance === 1 || distance === 2;
  const position = Math.max(-2, Math.min(2, offset));
  const scale = isActive ? 1 : distance === 1 ? 0.94 : 0.88;

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`${incubator.name} by ${incubator.institution}`}
      aria-hidden={!isActive}
      onClick={isNear ? onSelect : undefined}
      style={{
        transform: `translateX(calc(${position} * (100% + 1rem))) scale(${scale})`,
      }}
      className={[
        "group col-start-1 row-start-1 bg-white border border-[#dbe4ec] rounded-2xl overflow-hidden flex flex-col",
        wrapped
          ? "transition-none"
          : "transition-[transform,opacity,box-shadow,border-color,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-reduce:transition-none",
        isActive
          ? "z-30 opacity-100 visible hover:border-[#1fa8de] hover:shadow-[0_22px_40px_-16px_rgba(18,40,63,0.28)]"
          : distance === 1
            ? "z-20 opacity-70 visible cursor-pointer hover:opacity-90 **:pointer-events-none"
            : distance === 2
              ? "z-10 opacity-40 visible cursor-pointer hover:opacity-70 **:pointer-events-none"
              : "z-0 opacity-0 invisible pointer-events-none",
      ].join(" ")}
    >
      <div className="aspect-4/3 overflow-hidden bg-white">
        {incubator.image ? (
          <img
            src={incubator.image}
            alt={incubator.name}
            loading="lazy"
            className={[
              "w-full h-full object-contain p-4 transition-transform duration-[0.4s] ease-in-out motion-reduce:transition-none",
              isActive ? "group-hover:scale-[1.04]" : "",
            ].join(" ")}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6 text-center">
            <span className="font-semibold text-lg leading-[1.3] text-[#12283f]">
              {incubator.name}
            </span>
          </div>
        )}
      </div>
      <div className="px-4.5 pt-4.5 pb-5 flex flex-col gap-2 flex-1">
        <span className="text-[10.5px] tracking-[0.06em] uppercase text-[#075a7b]">
          {incubator.institution}
        </span>
        <h3 className="font-semibold text-base m-0 leading-[1.3]">
          {incubator.name}
        </h3>
        <p className="m-0 flex-1 text-base leading-6 text-[#475569] max-[640px]:line-clamp-3">
          {incubator.description}
        </p>
        <a
          href={incubator.href}
          tabIndex={isActive ? 0 : -1}
          aria-label={`Learn more about ${incubator.name}`}
          className="mt-1.5 inline-flex items-center gap-1.25 text-[13px] font-semibold text-[#075a7b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#075a7b]"
        >
          Learn more{" "}
          <LuSquareArrowUpRight
            aria-hidden="true"
            className="w-3.5 h-3.5 transition-transform duration-200 ease-in-out motion-reduce:transition-none hover:translate-x-0.5 hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
};

export default IncubatorCard;
