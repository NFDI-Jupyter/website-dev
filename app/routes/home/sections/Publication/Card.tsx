import { LuArrowUpRight, LuCalendarDays, LuUsers } from "react-icons/lu";
import type { PublicationRecord } from "../../../../data/Publication";
import type { Event } from "../../../../data/Events";

interface PublicationCardProps {
  publication: PublicationRecord;
  relatedEvent?: Event;
  featured?: boolean;
  newest?: boolean;
}

const formatDate = (date: string) =>
  (() => {
    const parsedDate = new Date(`${date}T00:00:00`);

    return Number.isNaN(parsedDate.getTime())
      ? date
      : new Intl.DateTimeFormat("en", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(parsedDate);
  })();

const cardClasses = (featured: boolean) =>
  `group flex h-full flex-col justify-between border border-[#d8e2e8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#159ac8] hover:shadow-[0_18px_38px_-24px_rgba(7,55,82,0.6)] ${
    featured ? "rounded-4xl p-7 md:p-9" : "rounded-2xl"
  }`;

function CardMetadata({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#587080]">
      {children}
    </div>
  );
}

export function PublicationCard({
  publication,
  relatedEvent,
  featured = false,
  newest = false,
}: PublicationCardProps) {
  return (
    <article className={cardClasses(featured)}>
      <div>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-[#087ca6] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              Publication
            </span>
            <span className="inline-flex items-center rounded-full bg-[#e8f7fb] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#075a7b]">
              {publication.resource_type}
            </span>
            {relatedEvent && (
              <span className="inline-flex items-center rounded-full bg-[#dff3e8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#14532d]">
                Event
              </span>
            )}
            {newest && (
              <span className="inline-flex items-center rounded-full bg-[#e8eef1] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3d5361]">
                Newest
              </span>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold leading-[1.15] text-[#102b3d]">
          {publication.title}
        </h3>

        <CardMetadata>
          <span className="inline-flex items-center gap-1.5">
            <LuCalendarDays aria-hidden="true" size={14} />
            {formatDate(publication.publication_date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <LuUsers aria-hidden="true" size={14} />
            {publication.authors.length} author
            {publication.authors.length === 1 ? "" : "s"}
          </span>
          {publication.contributors && publication.contributors.length > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <LuUsers aria-hidden="true" size={14} />
              {publication.contributors.length} contributor
              {publication.contributors.length === 1 ? "" : "s"}
            </span>
          )}
        </CardMetadata>

        {publication.description && (
          <p className="mt-4 text-sm leading-relaxed text-[#587080]">
            {publication.description}
          </p>
        )}
      </div>

      <div className="mt-8">
        <a
          href={publication.record_url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087ca6] transition-colors hover:text-[#102b3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159ac8]"
        >
          View publication
          <LuArrowUpRight
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            size={16}
          />
        </a>

        {relatedEvent && (
          <a
            href={relatedEvent.link}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-sm font-semibold text-[#24734a] hover:text-[#102b3d] hover:underline"
          >
            View event
          </a>
        )}
      </div>
    </article>
  );
}

export function EventCard({ event }: { event: Event }) {
  return (
    <article className={cardClasses(false)}>
      <div>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-[#dff3e8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#24734a]">
              Event
            </span>
            <span className="inline-flex items-center rounded-full bg-[#e8f7fb] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#075a7b]">
              {event.type}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold leading-[1.15] text-[#102b3d]">
          {event.title}
        </h3>

        <CardMetadata>
          <span className="inline-flex items-center gap-1.5">
            <LuCalendarDays aria-hidden="true" size={14} />
            {formatDate(event.date)}
          </span>
        </CardMetadata>

        <p className="mt-4 text-sm leading-relaxed text-[#587080]">
          {event.description}
        </p>
      </div>

      {event.link && (
        <div className="mt-8">
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#087ca6] transition-colors hover:text-[#102b3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159ac8]"
          >
            View event
            <LuArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      )}
    </article>
  );
}
