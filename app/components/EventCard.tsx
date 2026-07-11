import Link from "next/link";

// Lightweight card projection of an event; keeps the heavy per-event page
// content out of the events-list client bundle.
export type EventCardData = {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isEnded: boolean;
  societyLabel: string;
  societyCodes: string[];
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
});

function formatDateRange(startDate: Date, endDate: Date): string {
  const sameDay = startDate.toDateString() === endDate.toDateString();

  if (sameDay) {
    return `${dateFormatter.format(startDate)} · ${timeFormatter.format(startDate)} - ${timeFormatter.format(endDate)}`;
  }

  return `${dateFormatter.format(startDate)} ${timeFormatter.format(startDate)} - ${dateFormatter.format(endDate)} ${timeFormatter.format(endDate)}`;
}

type EventCardProps = {
  event: EventCardData;
};

export function EventCard({ event }: EventCardProps) {
  const isEnded = event.isEnded;

  return (
    <Link
      href={`/events/${event.id}`}
      className="group relative block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {isEnded && (
        <span
          className="pointer-events-none absolute inset-0 rounded-xl bg-gray-200/40 backdrop-blur-[1px]"
          aria-hidden
        />
      )}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="text-sm font-medium text-blue-700">
            {formatDateRange(event.startDate, event.endDate)}
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            {event.title}
          </h2>
          <div className="text-xs font-semibold text-emerald-700">
            {event.societyLabel}
          </div>
        </div>
        <span className="text-sm font-semibold text-blue-600">
          View details →
        </span>
      </div>
      <p className="mt-2 text-gray-700">{event.description}</p>
      {isEnded && (
        <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-gray-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
          Ended
        </div>
      )}
    </Link>
  );
}
