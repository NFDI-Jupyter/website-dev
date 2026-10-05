import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import { data } from "../../data/Publication";
import { getPublicationEventItems } from "../../data/PublicationEvents";
import { EventCard, PublicationCard } from "../home/sections/Publication/Card";

export default function PublicationsEventsPage() {
  const items = getPublicationEventItems();

  return (
    <main className="min-h-screen bg-[#edf5f7] px-6 pb-20 pt-32 text-[#102b3d] lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <a
              href="./"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#087ca6] hover:text-[#102b3d]"
            >
              <LuArrowLeft aria-hidden="true" size={16} />
              Back to home
            </a>
            <h1 className="font-['Space_Grotesk',sans-serif] text-4xl font-bold tracking-[-0.02em] md:text-5xl">
              Publications &amp; Events
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#587080]">
              Explore the complete collection of work, talks, and community
              activities from Jupyter4NFDI.
            </p>
          </div>

          <a
            href={data.community.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#b8cdd6] bg-white px-5 py-3 text-sm font-semibold text-[#087ca6] transition hover:border-[#087ca6] hover:bg-[#087ca6] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159ac8]"
          >
            Browse Zenodo community
            <LuArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((entry, index) => (
            <div key={`${entry.kind}-${entry.item.title}-${entry.date}`}>
              {entry.kind === "publication" ? (
                <PublicationCard
                  publication={entry.item}
                  relatedEvent={entry.relatedEvent}
                  featured={index === 0}
                  newest={index === 0}
                />
              ) : (
                <EventCard event={entry.item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
