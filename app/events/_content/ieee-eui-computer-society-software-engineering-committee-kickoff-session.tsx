import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "ieee-eui-computer-society-software-engineering-committee-kickoff-session",
  title:
    "IEEE EUI Computer Society Software Engineering Committee Kickoff Session",
  description:
    "Kickoff session for the Software Engineering Committee launching new initiatives and roadmap.",
  startDate: new Date("2025-11-27T00:00:00"),
  endDate: new Date("2025-11-27T00:00:00"),
  postedDate: new Date("2025-11-15T00:00:00"),
  societyCodes: ["SBC60211912", "STB60211912"],
  theme: {
    page: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
    heading: "from-blue-600 to-purple-600",
  },
  banner: {
    src: "/ieee-eui-swe-committee-kickoff.jpg",
    alt: "IEEE EUI Computer Society Software Engineering Committee Kickoff banner",
    frameClassName: "border-blue-100",
    imageClassName: "object-contain",
  },
  meta: [
    { icon: "📅", text: "November 27, 2025" },
    { icon: "👥", text: "IEEE Computer Society SWE Committee" },
    { icon: "🚀", text: "Term Launch" },
  ],
  intro:
    "The inaugural session launching the Software Engineering Committee with a comprehensive roadmap covering version control, design patterns, and hands-on projects.",
  content: (
    <>
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Session Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The SWE Committee kickoff brought together developers and engineers
          to explore foundational software engineering practices. The session
          set the tone for the term with core topics, practical tools, and an
          exciting project roadmap to develop skills across the entire
          development lifecycle.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Core Topics Covered
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-blue-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              📚 Introduction to Software Engineering
            </h3>
            <p className="text-gray-700">
              Foundational principles, best practices, and industry standards
              shaping modern development.
            </p>
          </div>
          <div className="p-6 border-2 border-indigo-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🔗 What is Git & GitHub?
            </h3>
            <p className="text-gray-700">
              Version control fundamentals, repositories, and collaborative
              development workflows.
            </p>
          </div>
          <div className="p-6 border-2 border-purple-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              📝 Version Control
            </h3>
            <p className="text-gray-700">
              Branching strategies, merging, conflict resolution, and team
              collaboration patterns.
            </p>
          </div>
          <div className="p-6 border-2 border-violet-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🏗️ Design Patterns
            </h3>
            <p className="text-gray-700">
              Proven solutions to common design problems, reusable patterns,
              and architectural principles.
            </p>
          </div>
          <div className="p-6 border-2 border-blue-100 rounded-lg md:col-span-2">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🏆 Badges & Projects Plan
            </h3>
            <p className="text-gray-700">
              Gamified learning path with achievement badges and hands-on
              projects throughout the term.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Program Highlights
        </h2>
        <div className="space-y-4">
          <div className="p-5 bg-white border-l-4 border-blue-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              🎯 Structured Curriculum
            </h3>
            <p className="text-gray-700">
              Comprehensive roadmap covering essential SWE concepts from basics
              to advanced patterns.
            </p>
          </div>
          <div className="p-5 bg-white border-l-4 border-purple-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              💻 Hands-On Projects
            </h3>
            <p className="text-gray-700">
              Real-world application of concepts through guided projects and
              collaborative development.
            </p>
          </div>
          <div className="p-5 bg-white border-l-4 border-indigo-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              🎖️ Achievement System
            </h3>
            <p className="text-gray-700">
              Badges and milestones tracking progress and recognizing
              accomplishments throughout the term.
            </p>
          </div>
          <div className="p-5 bg-white border-l-4 border-violet-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              🤝 Community Learning
            </h3>
            <p className="text-gray-700">
              Collaborative environment where members mentor each other and
              share best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              📍 Location
            </h3>
            <p className="text-gray-700">Egypt University of Informatics</p>
          </div>
          <div className="p-6 border-2 border-purple-200 rounded-lg bg-purple-50">
            <h3 className="text-xl font-bold text-purple-800 mb-2">
              ⏰ Schedule
            </h3>
            <p className="text-gray-700">November 27, 2025</p>
          </div>
          <div className="p-6 border-2 border-indigo-200 rounded-lg bg-indigo-50">
            <h3 className="text-xl font-bold text-indigo-800 mb-2">
              👥 Hosts
            </h3>
            <p className="text-gray-700">
              IEEE Computer Society SBC (SBC60211912) & STB60211912
            </p>
          </div>
          <div className="p-6 border-2 border-violet-200 rounded-lg bg-violet-50">
            <h3 className="text-xl font-bold text-violet-800 mb-2">
              📝 Registration
            </h3>
            <p className="text-gray-700">
              Announcements via IEEE EUI channels. Admission-free.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Software Engineering Committee kickoff set an ambitious agenda
          for the term, combining foundational theory with practical tools.
          Members departed energized by the curriculum roadmap, gamified
          learning system, and collaborative project opportunities ahead. The
          session successfully launched a vibrant community dedicated to
          mastering software engineering excellence.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-sm font-semibold">
            #computer-society
          </span>
          <span className="px-3 py-1 bg-purple-200 text-purple-900 rounded-full text-sm font-semibold">
            #software-engineering
          </span>
          <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full text-sm font-semibold">
            #version-control
          </span>
          <span className="px-3 py-1 bg-violet-200 text-violet-900 rounded-full text-sm font-semibold">
            #design-patterns
          </span>
        </div>
      </section>
    </>
  ),
};
