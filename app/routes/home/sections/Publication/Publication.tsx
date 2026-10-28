import { motion } from "motion/react";
import { LuArrowUpRight } from "react-icons/lu";
import { data } from "../../../../data/Publication";
import { getPublicationEventItems } from "../../../../data/PublicationEvents";
import { EventCard, PublicationCard } from "./Card";

export default function Publication() {
  const items = getPublicationEventItems();
  const visibleItems = items.slice(0, 9);

  return (
    <section
      id="publication"
      className="bg-[#edf5f7] px-6 py-20 text-[#102b3d] lg:px-8"
      aria-labelledby="publications-events-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <h2
              id="publications-events-heading"
              className="text-4xl font-bold tracking-[-0.02em] md:text-5xl"
            >
              Publications &amp; Events
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#587080]">
              Explore the work, talks, and proposals shaping Jupyter4NFDI.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 self-start md:self-auto">
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
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {visibleItems.map((entry, index) => (
            <motion.div
              key={`${entry.kind}-${entry.item.title}-${entry.date}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
