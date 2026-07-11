import type { Metadata } from "next";
import { Suspense } from "react";
import { EventCard, type EventCardData } from "../components/EventCard";
import { events, getEventSocietyLabel, isEventEnded } from "./_content";
import { EventsExplorer } from "./EventsExplorer";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events from the IEEE student branch at Egypt University of Informatics.",
};

// Lightweight projection sent to the client explorer — the heavy per-event
// page content in _content never reaches this bundle.
const eventCards: EventCardData[] = events.map((event) => ({
  id: event.id,
  title: event.title,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  isEnded: isEventEnded(event),
  societyLabel: getEventSocietyLabel(event),
  societyCodes: event.societyCodes,
}));

// Statically rendered fallback: search engines and no-JS visitors get the
// full list; the interactive explorer takes over after hydration.
function StaticEventList() {
  return (
    <section className="grid gap-4">
      {eventCards.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="text-gray-600">
            Search for upcoming and past events from the IEEE student branch.
          </p>
        </header>

        <Suspense fallback={<StaticEventList />}>
          <EventsExplorer events={eventCards} />
        </Suspense>
      </div>
    </main>
  );
}
