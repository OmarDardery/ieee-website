import Image from "next/image";
import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "ieee-r8-north-africa-congress-2023",
  title:
    "IEEE R8 North Africa Student and Young Professional (NASYP) Congress 2023",
  description:
    "A congress for students and young professionals to network and learn.",
  startDate: new Date("2023-08-24T00:00:00"),
  endDate: new Date("2023-09-08T00:00:00"),
  postedDate: new Date("2023-08-01T00:00:00"),
  societyCodes: ["YP80103", "STB60211912"],
  theme: {
    page: "bg-gradient-to-b from-blue-50 via-white to-white",
  },
  meta: [
    {
      icon: "📅",
      text: "24 Aug 2023, 4:00 PM EEST → 27 Aug 2023, 3:00 PM EEST",
    },
    {
      icon: "📍",
      text: "Egypt University of Informatics, Knowledge City, New Administrative Capital, Egypt",
    },
    { icon: "👥", text: "IEEE Young Professionals Egypt AG & IEEE EUI SB" },
  ],
  intro:
    "200+ IEEE students and young professionals from Egypt and North Africa gathered for four days to learn, network, and collaborate.",
  content: (
    <div className="flex flex-col gap-8">
      <div className="w-full" suppressHydrationWarning>
        <Image
          src="/nasyp-2023.jpg"
          alt="IEEE R8 NASYP 2023 in Cairo, Egypt"
          width={640}
          height={480}
          className="w-full rounded-2xl border border-blue-100 object-cover shadow-md"
        />
      </div>

      {/* Overview */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About NASYP 2023
        </h2>
        <p className="text-gray-700">
          NASYP is the biggest IEEE event for students and young professionals
          in Egypt. Over 200 members from Egypt and North African countries
          came together to enhance knowledge, expand networks, develop
          leadership skills, and enjoy four days of activities.
        </p>
        <p className="text-gray-700 mt-3">
          The congress gathered talented IEEE members and volunteers from
          Egypt, Algeria, Libya, Morocco, Sudan, Tunisia, and guests from
          Jordan, Uganda, and Kenya to exchange experiences and discuss
          regional technological advancements.
        </p>
      </section>

      {/* Program Highlights */}
      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Program Highlights
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2 text-gray-800">
          <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">
            11+ keynote speakers
          </li>
          <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">
            10 panelists across 2 panels
          </li>
          <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">
            6 technical sessions
          </li>
          <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">
            4 hands-on workshops
          </li>
          <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">
            Poster session
          </li>
          <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">
            Sightseeing at the National Museum of Egyptian Civilization
          </li>
        </ul>
      </section>

      {/* Networking & Impact */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Networking & Impact
        </h2>
        <p className="text-gray-700">
          NASYP 2023 provided a platform to train future leaders, share
          thoughts on technological advancements for a sustainable future, and
          build lasting connections. Attendees remain connected through
          dedicated community channels.
        </p>
        <p className="text-gray-700 mt-3">
          Distinguished supporters included IEEE leadership from Region 8 and
          global officers, reinforcing the event&apos;s reach and significance.
        </p>
      </section>

      {/* Registration Details */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration</h2>
        <div className="space-y-2 text-gray-700">
          <div>
            <span className="font-semibold">Opened:</span> 23 May 2023, 9:00
            PM EEST
          </div>
          <div>
            <span className="font-semibold">Closed:</span> 30 July 2023, 9:00
            PM EEST
          </div>
          <div>
            <span className="font-semibold">Admission:</span> No charge
          </div>
        </div>
      </section>

      {/* Social & Media */}
      <section className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Stay Connected
        </h3>
        <p className="text-gray-700 mb-3">
          Highlights and ongoing discussions continue across NASYP 2023
          Facebook and WhatsApp groups.
        </p>
        <p className="text-sm text-gray-600">
          Official site:{" "}
          <a
            className="text-blue-700 font-semibold hover:underline"
            href="https://nasyp.ieee.org.eg/"
            target="_blank"
            rel="noreferrer"
          >
            nasyp.ieee.org.eg
          </a>
        </p>
      </section>

      {/* Event Recap */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Event Recap</h3>
        <p className="text-gray-700 mb-4">
          Thank you to everyone who made NASYP 2023 possible—from speakers and
          panelists to volunteers, organizers, and attendees across Egypt and
          North Africa. The congress fostered learning, leadership, and
          collaboration that continue beyond the event.
        </p>
        <p className="text-sm text-gray-600">
          Organized by IEEE Young Professionals Egypt Affinity Group in
          collaboration with IEEE EUI Student Branch.
        </p>
      </section>
    </div>
  ),
};
