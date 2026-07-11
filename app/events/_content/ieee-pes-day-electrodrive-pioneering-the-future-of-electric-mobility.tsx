import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "ieee-pes-day-electrodrive-pioneering-the-future-of-electric-mobility",
  title:
    "IEEE PES DAY | ElectroDrive: Pioneering the Future of Electric Mobility",
  description:
    "PES Day collaboration event focused on electric mobility advancements.",
  startDate: new Date("2024-04-23T00:00:00"),
  endDate: new Date("2024-05-13T00:00:00"),
  postedDate: new Date("2024-04-10T00:00:00"),
  societyCodes: ["STB60211912", "STB60218206", "STB11529"],
  theme: {
    page: "bg-gradient-to-br from-emerald-50 via-white to-sky-50",
    heading: "from-emerald-600 to-sky-600",
  },
  banner: {
    src: "/ieee-pes-day-electrodrive.jpg",
    alt: "IEEE PES DAY | ElectroDrive event banner",
    frameClassName: "border-emerald-100",
  },
  meta: [
    { icon: "📅", text: "April 23, 2024" },
    { icon: "⏰", text: "Full-day program" },
    { icon: "👥", text: "IEEE EUI SB · IEEE FUE SB · IEEE Obour CS SB" },
  ],
  intro:
    "A PES Day collaboration on electric mobility, bringing together student branches and industry partners for workshops, sessions, and a panel discussion exploring the technologies and partnerships shaping sustainable transport.",
  content: (
    <>
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Event Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The IEEE EUI SB, IEEE FUE SB, and IEEE Obour CS SB co-hosted
          ElectroDrive to spotlight the latest trends in electric mobility.
          Participants engaged with industry experts, explored technology
          demonstrations, and discussed pathways for collaboration with
          industrial institutions to accelerate sustainable transport
          solutions.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Program Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-emerald-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🔌 Technical Workshops
            </h3>
            <p className="text-gray-700">
              Hands-on sessions on EV powertrains, charging infrastructure, and
              energy management systems.
            </p>
          </div>
          <div className="p-6 border-2 border-sky-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🧭 Industry Partnerships
            </h3>
            <p className="text-gray-700">
              Collaboration tracks with industrial partners to design joint
              projects and knowledge transfer.
            </p>
          </div>
          <div className="p-6 border-2 border-teal-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🎙️ Panel Discussion
            </h3>
            <p className="text-gray-700">
              Top-tier speakers debated market trends, policy, and technology
              readiness for EV adoption.
            </p>
          </div>
          <div className="p-6 border-2 border-indigo-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🤝 Networking
            </h3>
            <p className="text-gray-700">
              Peer-to-peer and student–industry networking to surface
              internships and collaboration paths.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-emerald-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-emerald-700 mb-2">
              📍 Location
            </h3>
            <p className="text-gray-700">Egypt University of Informatics</p>
          </div>
          <div className="p-6 border-2 border-sky-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-sky-700 mb-2">
              ⏰ Schedule
            </h3>
            <p className="text-gray-700">April 23, 2024 · Full-day event</p>
          </div>
          <div className="p-6 border-2 border-teal-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-teal-700 mb-2">👥 Hosts</h3>
            <p className="text-gray-700">
              IEEE EUI SB · IEEE FUE SB · IEEE Obour CS SB
            </p>
          </div>
          <div className="p-6 border-2 border-indigo-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              📝 Registration
            </h3>
            <p className="text-gray-700">
              Admission-free. Event announcements and registration were shared
              via branch social platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Resources</h2>
        <p className="text-gray-700">
          Full event details and updates were posted on IEEE EUI SB social
          media (Facebook, LinkedIn, Instagram), as well as IEEE Obour CS SB
          (Facebook, Instagram) and IEEE FUE SB (Facebook).
        </p>
      </section>

      <section className="bg-gradient-to-r from-emerald-100 to-sky-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          ElectroDrive showcased the momentum of electric mobility through
          workshops, demos, and a lively panel. Participants connected with
          industry voices, explored technology roadmaps, and identified
          collaboration opportunities to advance sustainable transport.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">
            #IEEE_PES_DAY
          </span>
          <span className="px-3 py-1 bg-sky-200 text-sky-900 rounded-full text-sm font-semibold">
            #IEEE_EUI_SB
          </span>
          <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full text-sm font-semibold">
            #IEEE_FUE_SB
          </span>
          <span className="px-3 py-1 bg-teal-200 text-teal-900 rounded-full text-sm font-semibold">
            #IEEE_OBOUR_CS_SB
          </span>
        </div>
      </section>
    </>
  ),
};
