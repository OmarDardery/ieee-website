import Image from "next/image";

export default function NASYP2023Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-4 py-12 text-gray-900 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        {/* Header */}
        <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg shadow-blue-100/40 backdrop-blur sm:p-8 relative">
          <div className="absolute top-4 right-4 rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
            Event Concluded
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="flex-1 space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                IEEE R8 • NASYP 2023
              </p>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                IEEE R8 North Africa Student and Young Professional (NASYP) Congress 2023
              </h1>
              <p className="text-gray-700">
                200+ IEEE students and young professionals from Egypt and North Africa gathered for four days to learn, network, and collaborate.
              </p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2"><span className="font-semibold">📅 Dates:</span><span>24 Aug 2023, 4:00 PM EEST → 27 Aug 2023, 3:00 PM EEST</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">📍 Venue:</span><span>Egypt University of Informatics, Knowledge City, New Administrative Capital, Egypt</span></div>
                <div className="flex items-center gap-2"><span className="font-semibold">👥 Hosts:</span><span>IEEE Young Professionals Egypt AG & IEEE EUI SB</span></div>
              </div>
            </div>
            <div className="w-full md:w-80" suppressHydrationWarning>
              <Image
                src="/nasyp-2023.jpg"
                alt="IEEE R8 NASYP 2023 in Cairo, Egypt"
                width={640}
                height={480}
                className="h-full w-full rounded-2xl border border-blue-100 object-cover shadow-md"
                priority
              />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About NASYP 2023</h2>
          <p className="text-gray-700">
            NASYP is the biggest IEEE event for students and young professionals in Egypt. Over 200 members from Egypt and North African countries came together to enhance knowledge, expand networks, develop leadership skills, and enjoy four days of activities.
          </p>
          <p className="text-gray-700 mt-3">
            The congress gathered talented IEEE members and volunteers from Egypt, Algeria, Libya, Morocco, Sudan, Tunisia, and guests from Jordan, Uganda, and Kenya to exchange experiences and discuss regional technological advancements.
          </p>
        </section>

        {/* Program Highlights */}
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Highlights</h2>
          <ul className="grid gap-3 sm:grid-cols-2 text-gray-800">
            <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">11+ keynote speakers</li>
            <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">10 panelists across 2 panels</li>
            <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">6 technical sessions</li>
            <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">4 hands-on workshops</li>
            <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">Poster session</li>
            <li className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">Sightseeing at the National Museum of Egyptian Civilization</li>
          </ul>
        </section>

        {/* Networking & Impact */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Networking & Impact</h2>
          <p className="text-gray-700">
            NASYP 2023 provided a platform to train future leaders, share thoughts on technological advancements for a sustainable future, and build lasting connections. Attendees remain connected through dedicated community channels.
          </p>
          <p className="text-gray-700 mt-3">
            Distinguished supporters included IEEE leadership from Region 8 and global officers, reinforcing the event's reach and significance.
          </p>
        </section>

        {/* Registration Details */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration</h2>
          <div className="space-y-2 text-gray-700">
            <div><span className="font-semibold">Opened:</span> 23 May 2023, 9:00 PM EEST</div>
            <div><span className="font-semibold">Closed:</span> 30 July 2023, 9:00 PM EEST</div>
            <div><span className="font-semibold">Admission:</span> No charge</div>
          </div>
        </section>

        {/* Social & Media */}
        <section className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Connected</h3>
          <p className="text-gray-700 mb-3">
            Highlights and ongoing discussions continue across NASYP 2023 Facebook and WhatsApp groups.
          </p>
          <p className="text-sm text-gray-600">
            Official site: <a className="text-blue-700 font-semibold hover:underline" href="https://nasyp.ieee.org.eg/" target="_blank" rel="noreferrer">nasyp.ieee.org.eg</a>
          </p>
        </section>

        {/* Event Recap */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Event Recap</h3>
          <p className="text-gray-700 mb-4">
            Thank you to everyone who made NASYP 2023 possible—from speakers and panelists to volunteers, organizers, and attendees across Egypt and North Africa. The congress fostered learning, leadership, and collaboration that continue beyond the event.
          </p>
          <p className="text-sm text-gray-600">
            Organized by IEEE Young Professionals Egypt Affinity Group in collaboration with IEEE EUI Student Branch.
          </p>
        </section>

        {/* Back link */}
        <div className="pt-4">
          <a href="/events" className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center gap-2">
            ← Back to all events
          </a>
        </div>
      </div>
    </main>
  );
}
