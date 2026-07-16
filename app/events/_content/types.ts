import type { ReactNode } from "react";

export type EventBanner = {
  src: string;
  alt: string;
  /** Tailwind classes controlling the banner frame (border color, aspect ratio, …) */
  frameClassName?: string;
  /** Tailwind classes for the image itself; defaults to "object-cover" */
  imageClassName?: string;
};

export type EventTheme = {
  /** Tailwind classes for the page background, e.g. "bg-linear-to-br from-emerald-50 via-white to-teal-50" */
  page: string;
  /** Tailwind gradient stops for the title, e.g. "from-emerald-600 to-teal-600". Omit for a plain dark title. */
  heading?: string;
};

export type EventMetaItem = {
  icon: string;
  text: string;
};

export type EventDefinition = {
  /** URL slug: the event lives at /events/<id> */
  id: string;
  title: string;
  /** Short summary shown on event cards and in search engines */
  description: string;
  startDate: Date;
  endDate: Date;
  /** When the event was announced; the events list is sorted by this */
  postedDate: Date;
  /** IEEE unit codes (see app/societies-data.ts); empty array = global event */
  societyCodes: string[];
  theme: EventTheme;
  banner?: EventBanner;
  /** Icon + text facts shown under the title (date, location, prizes, …) */
  meta: EventMetaItem[];
  /** Lead paragraph rendered under the meta row */
  intro?: string;
  /**
   * The dynamic part: everything below the header, as plain JSX.
   * Each event can have completely custom sections and styling here.
   */
  content: ReactNode;
  /**
   * Escape hatch for flagship events: when set, this JSX replaces the whole
   * generic event layout (badge, banner, header, container), giving the event
   * a fully custom, full-bleed page. `content` is ignored in that case.
   */
  fullPage?: ReactNode;
};
