"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { EventCard, type EventCardData } from "../components/EventCard";
import { findSociety, societies } from "../societies-data";

type DateFilter = {
  from?: string;
  to?: string;
};

type EventsExplorerProps = {
  events: EventCardData[];
};

export function EventsExplorer({ events }: EventsExplorerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<DateFilter>({});

  const societyFilter = useMemo(() => {
    const societyParam = searchParams.get("society");
    if (!societyParam) return "all";
    if (societyParam.toLowerCase() === "global") return "global";
    return findSociety(societyParam)?.slug ?? "all";
  }, [searchParams]);

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const fromDate = dateFilter.from ? new Date(dateFilter.from) : undefined;
    const toDate = dateFilter.to ? new Date(dateFilter.to) : undefined;

    return events.filter((event) => {
      const haystack = `${event.title} ${event.description}`.toLowerCase();
      const matchesText =
        !normalizedQuery || haystack.includes(normalizedQuery);
      const startsAfterFrom = fromDate ? event.startDate >= fromDate : true;
      const endsBeforeTo = toDate ? event.endDate <= toDate : true;

      const matchesSociety = (() => {
        if (societyFilter === "all") return true;
        if (societyFilter === "global") return event.societyCodes.length === 0;
        const society = findSociety(societyFilter);
        return !!society && event.societyCodes.includes(society.code);
      })();

      return matchesText && startsAfterFrom && endsBeforeTo && matchesSociety;
    });
  }, [events, query, dateFilter, societyFilter]);

  return (
    <>
      <div className="space-y-3">
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
                const params = new URLSearchParams(searchParams);
                if (value === "all") {
                  params.delete("society");
                } else {
                  params.set("society", value);
                }
                const search = params.toString();
                router.replace(search ? `/events?${search}` : "/events");
              }}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="all">All societies</option>
              <option value="global">Global events</option>
              {societies.map((society) => (
                <option key={society.code} value={society.slug}>
                  {society.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <section className="grid gap-4">
        <p className="text-sm text-gray-500">
          {filteredEvents.length} event{filteredEvents.length === 1 ? "" : "s"}
        </p>
        {filteredEvents.length === 0 ? (
          <p className="text-gray-600">No events match your search.</p>
        ) : (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </section>
    </>
  );
}
