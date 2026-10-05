import { data as eventsData, type Event } from "./Events";
import { data as publicationData, type PublicationRecord } from "./Publication";

export type PublicationEventItem =
  | {
      kind: "publication";
      date: string;
      item: PublicationRecord;
      relatedEvent?: Event;
    }
  | {
      kind: "event";
      date: string;
      item: Event;
    };

const getTimestamp = (date: string) => {
  const timestamp = new Date(date).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

export function getPublicationEventItems(): PublicationEventItem[] {
  const linkedEvents = new Map<string, Event>();
  const unlinkedEvents = eventsData.events.filter((event) => {
    const publication = publicationData.records.find(
      (record) => record.doi === event.publicationDoi,
    );

    if (publication) {
      linkedEvents.set(publication.doi, event);
      return false;
    }

    return true;
  });

  return [
    ...publicationData.records.map((publication) => ({
      kind: "publication" as const,
      date: publication.publication_date,
      item: publication,
      relatedEvent: linkedEvents.get(publication.doi),
    })),
    ...unlinkedEvents.map((event) => ({
      kind: "event" as const,
      date: event.date,
      item: event,
    })),
  ].sort(
    (first, second) => getTimestamp(second.date) - getTimestamp(first.date),
  );
}
