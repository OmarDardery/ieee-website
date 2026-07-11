import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "ieee-eui-sb-at-the-quantum-computing-workshop-2025",
  title: "IEEE EUI SB at The Quantum Computing Workshop 2025",
  description: "Participation in the Quantum Computing Workshop.",
  startDate: new Date("2025-02-17T00:00:00"),
  endDate: new Date("2025-02-23T00:00:00"),
  postedDate: new Date("2025-02-01T00:00:00"),
  societyCodes: ["STB60211912"],
  theme: {
    page: "bg-gradient-to-br from-slate-50 via-white to-violet-50",
    heading: "from-violet-600 to-indigo-600",
  },
  meta: [
    { icon: "📅", text: "February 17–18, 2025" },
    { icon: "⏰", text: "10:00 AM – 5:00 PM EET" },
    {
      icon: "📍",
      text: "Knowledge City, New Administrative Capital, Al-Qahirah",
    },
  ],
  intro:
    'IEEE EUI SB volunteers supported the two-day "Quantum Technologies: Opportunities and Challenges" workshop—co-hosted by MCIT and EUI—ensuring smooth registration, guidance, and logistics for attendees and speakers.',
  content: (
    <>
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Event Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The workshop explored the transformative potential of quantum
          technologies in Egypt, covering foundational concepts, emerging
          opportunities, and practical challenges. Over two days, experts
          discussed applications across communications, computing, and national
          innovation initiatives.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Volunteer Impact
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-violet-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              📝 Registration & Check-in
            </h3>
            <p className="text-gray-700">
              Streamlined attendee onboarding, materials distribution, and
              schedule guidance.
            </p>
          </div>
          <div className="p-6 border-2 border-indigo-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🧭 Venue Guidance
            </h3>
            <p className="text-gray-700">
              Directing participants to tracks, halls, and speaker sessions
              across Knowledge City.
            </p>
          </div>
          <div className="p-6 border-2 border-emerald-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              📣 Speaker Coordination
            </h3>
            <p className="text-gray-700">
              Ensuring presenters had timely support for logistics and session
              readiness.
            </p>
          </div>
          <div className="p-6 border-2 border-amber-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🤝 Attendee Experience
            </h3>
            <p className="text-gray-700">
              Maintaining smooth communication, timing, and Q&A flow throughout
              the workshop.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-slate-50 to-violet-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-slate-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              📍 Location
            </h3>
            <p className="text-gray-700">
              Knowledge City, New Administrative Capital, Al-Qahirah, Egypt
            </p>
          </div>
          <div className="p-6 border-2 border-indigo-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-indigo-800 mb-2">
              ⏰ Schedule
            </h3>
            <p className="text-gray-700">
              Start: Feb 17, 2025 at 10:00 AM EET
              <br />
              End: Feb 18, 2025 at 05:00 PM EET
            </p>
          </div>
          <div className="p-6 border-2 border-emerald-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-emerald-800 mb-2">
              👥 Hosts
            </h3>
            <p className="text-gray-700">
              Ministry of Communications and Information Technology (MCIT) &
              Egypt University of Informatics (EUI)
            </p>
          </div>
          <div className="p-6 border-2 border-amber-200 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-amber-800 mb-2">
              📝 Registration
            </h3>
            <p className="text-gray-700">
              Attendance managed on-site; IEEE EUI SB volunteers handled
              participant guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-100 to-violet-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The workshop highlighted opportunities and challenges in quantum
          technologies for Egypt. IEEE EUI SB volunteers ensured seamless
          coordination, enabling speakers and attendees to focus on knowledge
          exchange across computing, communications, and emerging quantum
          applications.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-violet-200 text-violet-900 rounded-full text-sm font-semibold">
            #QuantumComputing
          </span>
          <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">
            #Volunteering
          </span>
          <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full text-sm font-semibold">
            #Technical
          </span>
        </div>
      </section>
    </>
  ),
};
