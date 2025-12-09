"use client";

import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import { events as rawEvents, type EventItem } from "../events-data";

const EventsContext = createContext<EventItem[] | undefined>(undefined);

export function EventsProvider({ children }: { children: ReactNode }) {
  const sortedEvents = useMemo(
    () => [...rawEvents].sort((a, b) => b.postedDate.getTime() - a.postedDate.getTime()),
    []
  );

  return (
    <EventsContext.Provider value={sortedEvents}>{children}</EventsContext.Provider>
  );
}

export function useEvents(): EventItem[] {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }

  return context;
}

export type { EventItem };
