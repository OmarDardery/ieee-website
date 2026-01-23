import Image from "next/image";

export default function IEEEPesDayElectroDrive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-6 inline-block">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Event Concluded
          </span>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg border border-emerald-100">
          <div className="relative aspect-[16/7] bg-gray-200" suppressHydrationWarning>
            <Image
              src="/ieee-pes-day-electrodrive.jpg"
              alt="IEEE PES DAY | ElectroDrive event banner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        </div>

        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
            IEEE PES DAY | ElectroDrive: Pioneering the Future of Electric Mobility
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>April 23, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>Full-day program</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👥</span>
              <span>IEEE EUI SB · IEEE FUE SB · IEEE Obour CS SB</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            A PES Day collaboration on electric mobility, bringing together student branches and industry partners for workshops, sessions, and a panel discussion exploring the technologies and partnerships shaping sustainable transport.
          </p>
        </header>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The IEEE EUI SB, IEEE FUE SB, and IEEE Obour CS SB co-hosted ElectroDrive to spotlight the latest trends in electric mobility. Participants engaged with industry experts, explored technology demonstrations, and discussed pathways for collaboration with industrial institutions to accelerate sustainable transport solutions.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Program Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-emerald-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🔌 Technical Workshops</h3>
              <p className="text-gray-700">Hands-on sessions on EV powertrains, charging infrastructure, and energy management systems.</p>
            </div>
            <div className="p-6 border-2 border-sky-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🧭 Industry Partnerships</h3>
              <p className="text-gray-700">Collaboration tracks with industrial partners to design joint projects and knowledge transfer.</p>
            </div>
            <div className="p-6 border-2 border-teal-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🎙️ Panel Discussion</h3>
              <p className="text-gray-700">Top-tier speakers debated market trends, policy, and technology readiness for EV adoption.</p>
            </div>
            <div className="p-6 border-2 border-indigo-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🤝 Networking</h3>
              <p className="text-gray-700">Peer-to-peer and student–industry networking to surface internships and collaboration paths.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-emerald-200 rounded-lg bg-white">
              <h3 className="text-xl font-bold text-emerald-700 mb-2">📍 Location</h3>
              <p className="text-gray-700">Egypt University of Informatics</p>
            </div>
            <div className="p-6 border-2 border-sky-200 rounded-lg bg-white">
              <h3 className="text-xl font-bold text-sky-700 mb-2">⏰ Schedule</h3>
              <p className="text-gray-700">April 23, 2024 · Full-day event</p>
            </div>
            <div className="p-6 border-2 border-teal-200 rounded-lg bg-white">
              <h3 className="text-xl font-bold text-teal-700 mb-2">👥 Hosts</h3>
              <p className="text-gray-700">IEEE EUI SB · IEEE FUE SB · IEEE Obour CS SB</p>
            </div>
            <div className="p-6 border-2 border-indigo-200 rounded-lg bg-white">
              <h3 className="text-xl font-bold text-indigo-700 mb-2">📝 Registration</h3>
              <p className="text-gray-700">
                Admission-free. Event announcements and registration were shared via branch social platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Resources</h2>
          <p className="text-gray-700">
            Full event details and updates were posted on IEEE EUI SB social media (Facebook, LinkedIn, Instagram), as well as IEEE Obour CS SB (Facebook, Instagram) and IEEE FUE SB (Facebook).
          </p>
        </section>

        <section className="bg-gradient-to-r from-emerald-100 to-sky-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            ElectroDrive showcased the momentum of electric mobility through workshops, demos, and a lively panel. Participants connected with industry voices, explored technology roadmaps, and identified collaboration opportunities to advance sustainable transport.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">#IEEE_PES_DAY</span>
            <span className="px-3 py-1 bg-sky-200 text-sky-900 rounded-full text-sm font-semibold">#IEEE_EUI_SB</span>
            <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full text-sm font-semibold">#IEEE_FUE_SB</span>
            <span className="px-3 py-1 bg-teal-200 text-teal-900 rounded-full text-sm font-semibold">#IEEE_OBOUR_CS_SB</span>
          </div>
        </section>
      </div>
    </div>
  );
}
