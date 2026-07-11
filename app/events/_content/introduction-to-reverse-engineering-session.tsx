import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "introduction-to-reverse-engineering-session",
  title: "Introduction to Reverse Engineering Session",
  description: "A session introducing the concepts of reverse engineering.",
  startDate: new Date("2025-04-20T00:00:00"),
  endDate: new Date("2025-04-24T00:00:00"),
  postedDate: new Date("2025-04-01T00:00:00"),
  societyCodes: ["SBC60211912"],
  theme: {
    page: "bg-gradient-to-br from-slate-50 via-white to-indigo-50",
    heading: "from-slate-700 to-indigo-700",
  },
  meta: [
    { icon: "📅", text: "April 20–24, 2025" },
    { icon: "💻", text: "Online Session" },
    { icon: "👥", text: "IEEE EUI Computer Society SBC" },
  ],
  intro:
    "Eng. Yousif Ayman, cybersecurity expert, led an online session introducing reverse engineering principles with practical examples and live demonstrations.",
  content: (
    <>
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Session Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The session provided a foundational introduction to reverse
          engineering—understanding how software and applications work by
          analyzing their components. Attendees learned systematic approaches
          to decompilation, binary analysis, and exploitation techniques.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Key Topics Covered
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-slate-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🔍 Fundamentals of Reverse Engineering
            </h3>
            <p className="text-gray-700">
              Core concepts, tools, and methodologies for analyzing compiled
              code and binaries.
            </p>
          </div>
          <div className="p-6 border-2 border-indigo-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              📊 Step-by-Step Guide
            </h3>
            <p className="text-gray-700">
              Structured approach to static and dynamic analysis of
              applications.
            </p>
          </div>
          <div className="p-6 border-2 border-slate-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🎮 Live Demonstration
            </h3>
            <p className="text-gray-700">
              Practical example: reverse engineering Plants vs Zombies and
              bypassing game logic to always win.
            </p>
          </div>
          <div className="p-6 border-2 border-indigo-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🛡️ Security Implications
            </h3>
            <p className="text-gray-700">
              Understanding threats from reverse engineering and defensive
              mitigation strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Speaker</h2>
        <div className="space-y-3 text-gray-700">
          <p className="text-lg font-semibold text-indigo-700">
            Eng. Yousif Ayman
          </p>
          <p>
            Cybersecurity expert specializing in binary analysis, exploitation,
            and secure software design.
          </p>
          <p>
            Delivered hands-on technical content with real-world examples to
            demystify reverse engineering practices.
          </p>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Learning Outcomes
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 font-bold">✓</span>
            <span>
              Understand reverse engineering principles and ethical/legal
              considerations
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 font-bold">✓</span>
            <span>
              Identify key tools and techniques for analyzing compiled
              applications
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 font-bold">✓</span>
            <span>
              Follow systematic approaches to binary analysis and exploitation
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 font-bold">✓</span>
            <span>
              Recognize security risks and design applications with reverse
              engineering in mind
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-slate-200 rounded-lg bg-slate-50">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              📍 Format
            </h3>
            <p className="text-gray-700">Online session</p>
          </div>
          <div className="p-6 border-2 border-indigo-200 rounded-lg bg-indigo-50">
            <h3 className="text-xl font-bold text-indigo-800 mb-2">
              ⏰ Schedule
            </h3>
            <p className="text-gray-700">April 20–24, 2025</p>
          </div>
          <div className="p-6 border-2 border-slate-200 rounded-lg bg-slate-50">
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              👥 Hosts
            </h3>
            <p className="text-gray-700">
              IEEE EUI Computer Society SBC (SBC60211912)
            </p>
          </div>
          <div className="p-6 border-2 border-indigo-200 rounded-lg bg-indigo-50">
            <h3 className="text-xl font-bold text-indigo-800 mb-2">
              📝 Registration
            </h3>
            <p className="text-gray-700">
              Announcements and registration shared via IEEE EUI channels.
              Admission-free.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-100 to-indigo-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The reverse engineering session equipped students with foundational
          knowledge and practical skills to analyze software binaries. Through
          step-by-step guidance and a live Plants vs Zombies demonstration,
          attendees gained insight into how systems work and the importance of
          secure coding practices.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-200 text-slate-900 rounded-full text-sm font-semibold">
            #reverse-engineering
          </span>
          <span className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm font-semibold">
            #security
          </span>
          <span className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-semibold">
            #egypt
          </span>
          <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">
            #eui
          </span>
          <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full text-sm font-semibold">
            #ieee_eui_cs_sbc
          </span>
        </div>
      </section>
    </>
  ),
};
