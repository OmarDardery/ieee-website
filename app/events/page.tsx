"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { EventCard } from "../components/EventCard";
import { useEvents, type EventItem } from "../context/EventsContext";

export const dynamic = "force-dynamic";

type DateFilter = {
  from?: string;
  to?: string;
};

const societies = [
  "Computer Society",
  "Robotics and Automation",
  "SIGHT",
  "ComSoc",
];

export default function EventsPage() {
  const events = useEvents();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<DateFilter>({});
  const societyFilter = useMemo(() => {
    const societyParam = searchParams.get("society");
    if (!societyParam) return "all";
    if (societyParam.toLowerCase() === "global") return "global";
    const match = societies.find((s) => s.toLowerCase() === societyParam.toLowerCase());
    return match ?? "all";
  }, [searchParams]);

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const fromDate = dateFilter.from ? new Date(dateFilter.from) : undefined;
    const toDate = dateFilter.to ? new Date(dateFilter.to) : undefined;

    return events.filter((event) => {
      const haystack = `${event.title} ${event.description}`.toLowerCase();
      const matchesText = !normalizedQuery || haystack.includes(normalizedQuery);
      const startsAfterFrom = fromDate ? event.startDate >= fromDate : true;
      const endsBeforeTo = toDate ? event.endDate <= toDate : true;

      const matchesSociety = (() => {
        if (societyFilter === "all") return true;
        if (societyFilter === "global") return !event.belongsToASociety;
        return event.belongsToASociety && event.society === societyFilter;
      })();

      return matchesText && startsAfterFrom && endsBeforeTo && matchesSociety;
    });
  }, [events, query, dateFilter, societyFilter]);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 text-gray-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="text-gray-600">
            Search for upcoming and past events from the IEEE student branch.
          </p>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title or description..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm text-gray-700">
              <span>Start after</span>
              <input
                type="datetime-local"
                value={dateFilter.from ?? ""}
                onChange={(event) =>
                  setDateFilter((prev) => ({ ...prev, from: event.target.value }))
                }
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-gray-700">
              <span>End before</span>
              <input
                type="datetime-local"
                value={dateFilter.to ?? ""}
                onChange={(event) =>
                  setDateFilter((prev) => ({ ...prev, to: event.target.value }))
                }
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm text-gray-700">
              <span>Society</span>
              <select
                value={societyFilter}
                onChange={(event) => {
                  const value = event.target.value;
                  const url = new URL(window.location.href);
                  if (value === "all") {
                    url.searchParams.delete("society");
                  } else {
                    url.searchParams.set("society", value);
                  }
                  router.replace(url.pathname + url.search);
                }}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option value="all">All societies</option>
                <option value="global">Global events</option>
                {societies.map((society) => (
                  <option key={society} value={society}>
                    {society}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </header>

        <section className="grid gap-4">
          {filteredEvents.length === 0 ? (
            <p className="text-gray-600">No events match your search.</p>
          ) : (
            filteredEvents.map((event: EventItem) => (
              <EventCard key={event.id} event={event} />
            ))
          )}
        </section>
      </div>
    </main>
  );
}
