import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "fail-safe-systems-talk",
  title: "Fail-Safe Systems: Why Safety Starts with Smart Design Talk",
  description: "A talk on the importance of safety in system design.",
  startDate: new Date("2025-12-11T00:00:00"),
  endDate: new Date("2025-12-14T00:00:00"),
  postedDate: new Date("2025-12-01T00:00:00"),
  societyCodes: ["SBC60211912C"],
  theme: {
    page: "bg-gradient-to-br from-amber-50 via-white to-red-50",
    heading: "from-amber-600 to-red-600",
  },
  meta: [
    { icon: "📅", text: "December 11–14, 2025" },
    { icon: "👥", text: "RAS EUI" },
    { icon: "🛡️", text: "Safety-Critical Engineering" },
  ],
  intro:
    "Eng. Amir Ghobrial, a mechatronics student at EUI, shared critical insights on fail-safe systems, design principles, and how engineers build safety into complex systems.",
  content: (
    <>
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Talk Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The talk explored the philosophy and practice of fail-safe
          design—ensuring systems gracefully degrade or reach safe states when
          components fail. Through real-world examples and engineering best
          practices, attendees gained understanding of how safety-critical
          thinking shapes industries and saves lives.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Topics Covered
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-amber-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🛡️ What Are Fail-Safe Systems?
            </h3>
            <p className="text-gray-700">
              Definition, principles, and why they are essential across
              industries and everyday life.
            </p>
          </div>
          <div className="p-6 border-2 border-orange-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🏗️ Core Design Principles
            </h3>
            <p className="text-gray-700">
              Safety-critical engineering practices including redundancy, fault
              tolerance, and graceful degradation.
            </p>
          </div>
          <div className="p-6 border-2 border-red-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              ✈️ Real-World Examples
            </h3>
            <p className="text-gray-700">
              Case studies from aviation, transportation, and industrial
              systems demonstrating fail-safe in action.
            </p>
          </div>
          <div className="p-6 border-2 border-yellow-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🔬 Risk Assessment & Testing
            </h3>
            <p className="text-gray-700">
              How engineers assess risk, conduct failure testing, and design
              for safe states.
            </p>
          </div>
          <div className="p-6 border-2 border-amber-100 rounded-lg md:col-span-2">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              📚 Lessons from Successes & Failures
            </h3>
            <p className="text-gray-700">
              Engineering lessons learned from major industrial successes and
              notable failures worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-amber-50 to-red-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Speaker</h2>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg font-semibold text-amber-700">
            Eng. Amir Ghobrial
          </p>
          <p>Mechatronics student at Egypt University of Informatics.</p>
          <p>
            Amir brings hands-on experience in designing systems where safety
            is paramount. His passion for fail-safe engineering stems from
            understanding how thoughtful design prevents disasters and saves
            lives.
          </p>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Insights</h2>
        <div className="space-y-4">
          <div className="p-5 bg-amber-50 border-l-4 border-amber-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              🎯 Safety as Design Philosophy
            </h3>
            <p className="text-gray-700">
              Safety must be built into systems from inception, not added as an
              afterthought.
            </p>
          </div>
          <div className="p-5 bg-orange-50 border-l-4 border-orange-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              🔄 Redundancy & Resilience
            </h3>
            <p className="text-gray-700">
              Redundant systems and graceful degradation are critical for
              mission-critical applications.
            </p>
          </div>
          <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              📊 Risk-Based Engineering
            </h3>
            <p className="text-gray-700">
              Engineers assess failure modes, test edge cases, and design
              recovery mechanisms.
            </p>
          </div>
          <div className="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              🌍 Industry Impact
            </h3>
            <p className="text-gray-700">
              Fail-safe thinking impacts aerospace, automotive, medical
              devices, and infrastructure worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Learning Outcomes
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold">✓</span>
            <span>
              Understand the philosophy and importance of fail-safe system
              design
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold">✓</span>
            <span>
              Learn core principles of safety-critical engineering across
              domains
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold">✓</span>
            <span>
              Recognize real-world applications in aviation, automotive, and
              industrial systems
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold">✓</span>
            <span>
              Appreciate risk assessment, failure testing, and design
              validation processes
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-amber-600 font-bold">✓</span>
            <span>
              Gain insights from engineering successes and failures that shaped
              best practices
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-amber-200 rounded-lg bg-amber-50">
            <h3 className="text-xl font-bold text-amber-800 mb-2">
              📍 Location
            </h3>
            <p className="text-gray-700">Egypt University of Informatics</p>
          </div>
          <div className="p-6 border-2 border-red-200 rounded-lg bg-red-50">
            <h3 className="text-xl font-bold text-red-800 mb-2">⏰ Schedule</h3>
            <p className="text-gray-700">December 11–14, 2025</p>
          </div>
          <div className="p-6 border-2 border-orange-200 rounded-lg bg-orange-50">
            <h3 className="text-xl font-bold text-orange-800 mb-2">
              👥 Hosts
            </h3>
            <p className="text-gray-700">RAS EUI (SBC60211912C)</p>
          </div>
          <div className="p-6 border-2 border-yellow-200 rounded-lg bg-yellow-50">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">
              📝 Registration
            </h3>
            <p className="text-gray-700">
              Announcements via IEEE EUI channels. Admission-free.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-100 to-red-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Eng. Amir Ghobrial&apos;s talk illuminated the critical importance of
          fail-safe thinking in modern engineering. Through real-world examples
          from aviation and transportation, attendees saw how thoughtful
          design, redundancy, and rigorous testing prevent disasters. The
          session reinforced that in safety-critical fields, engineering
          excellence is measured by what doesn&apos;t go wrong—and fail-safe
          systems are the foundation of that excellence.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-semibold">
            #eui
          </span>
          <span className="px-3 py-1 bg-orange-200 text-orange-900 rounded-full text-sm font-semibold">
            #ras
          </span>
          <span className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm font-semibold">
            #fail-safe-systems
          </span>
          <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded-full text-sm font-semibold">
            #safety
          </span>
          <span className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-sm font-semibold">
            #talk
          </span>
        </div>
      </section>
    </>
  ),
};
