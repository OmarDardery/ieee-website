import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEventById, isEventEnded } from "../_content";

// Only slugs returned by generateStaticParams exist; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.id }));
}

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventById(slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description,
    openGraph: event.banner
      ? { images: [{ url: event.banner.src, alt: event.banner.alt }] }
      : undefined,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventById(slug);
  if (!event) notFound();

  const ended = isEventEnded(event);

  if (event.fullPage) return <>{event.fullPage}</>;

  return (
    <div className={`min-h-screen ${event.theme.page}`}>
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="mb-6 inline-block">
          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold text-white ${
              ended ? "bg-gray-800" : "bg-blue-600"
            }`}
          >
            {ended ? "Event Concluded" : "Upcoming Event"}
          </span>
        </div>

        {event.banner && (
          <div
            className={`mb-8 overflow-hidden rounded-2xl border shadow-lg ${
              event.banner.frameClassName ?? "border-gray-100"
            }`}
          >
            <div className="relative aspect-16/7 bg-gray-200">
              <Image
                src={event.banner.src}
                alt={event.banner.alt}
                fill
                className={event.banner.imageClassName ?? "object-cover"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
            </div>
          </div>
        )}

        <header className="mb-12">
          <h1
            className={`mb-6 text-4xl font-bold sm:text-5xl ${
              event.theme.heading
                ? `bg-linear-to-r ${event.theme.heading} bg-clip-text text-transparent`
                : "text-gray-900"
            }`}
          >
            {event.title}
          </h1>
          {event.meta.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-6 text-gray-700">
              {event.meta.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span aria-hidden>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          )}
          {event.intro && (
            <p className="text-lg leading-relaxed text-gray-700">
              {event.intro}
            </p>
          )}
        </header>

        {event.content}

        <div className="pt-10">
          <Link
            href="/events"
            className="flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
          >
            ← Back to all events
          </Link>
        </div>
      </div>
    </div>
  );
}
