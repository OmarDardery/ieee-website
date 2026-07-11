import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "ieee-eui-sb-x-wedev-computational-physics-workshop",
  title: "IEEE EUI SB X Wedev - Computational Physics Workshop Collab",
  description:
    "Collaborative computational physics workshop combining practical coding and physics simulations.",
  startDate: new Date("2025-11-21T00:00:00"),
  endDate: new Date("2025-11-24T00:00:00"),
  postedDate: new Date("2025-11-10T00:00:00"),
  societyCodes: ["STB60211912"],
  theme: {
    page: "bg-gradient-to-br from-cyan-50 via-white to-blue-50",
    heading: "from-cyan-600 to-blue-600",
  },
  meta: [
    { icon: "📅", text: "November 21–24, 2025" },
    { icon: "🤝", text: "IEEE EUI SB × WeDev" },
    { icon: "👥", text: "First-year Engineering & Computer Science" },
  ],
  intro:
    "A collaborative project-based computational physics workshop combining IEEE EUI SB and WeDev expertise to teach physics concepts, problem-solving, and web technologies to first-year students.",
  content: (
    <>
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Collaboration Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          On November 21, 2025, IEEE EUI SB Secretary Farah Sultan and
          Technical Activities Coordinator Mostafa Ibrahim met with WeDev
          President Judy Elsheekh and mentor Omar to finalize planning for this
          groundbreaking workshop. The partnership brings together two student
          organizations&apos; expertise to create an immersive learning
          experience where physics meets programming.
        </p>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Workshop Goals
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-cyan-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              📖 Physics Mastery
            </h3>
            <p className="text-gray-700">
              Help first-year students deeply understand core physics concepts
              through interactive, hands-on activities.
            </p>
          </div>
          <div className="p-6 border-2 border-blue-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🧠 Critical Thinking
            </h3>
            <p className="text-gray-700">
              Develop problem-solving skills and analytical reasoning through
              physics challenges and simulations.
            </p>
          </div>
          <div className="p-6 border-2 border-cyan-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🐍 Programming with Physics
            </h3>
            <p className="text-gray-700">
              Apply physics concepts through coding using VPython for
              simulations and visualizations.
            </p>
          </div>
          <div className="p-6 border-2 border-blue-100 rounded-lg">
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              🌐 Web Presentation
            </h3>
            <p className="text-gray-700">
              Showcase physics projects through web technologies including
              HTML, CSS, and React.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Workshop Structure
        </h2>
        <div className="space-y-4">
          <div className="p-5 bg-white border-l-4 border-cyan-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              📚 Physics Foundations
            </h3>
            <p className="text-gray-700">
              Core concepts covering mechanics, motion, forces, and energy
              through interactive teaching.
            </p>
          </div>
          <div className="p-5 bg-white border-l-4 border-blue-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              💻 VPython Programming
            </h3>
            <p className="text-gray-700">
              Write Python code to simulate and visualize physics phenomena
              with VPython library.
            </p>
          </div>
          <div className="p-5 bg-white border-l-4 border-cyan-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              🎨 Web Technologies
            </h3>
            <p className="text-gray-700">
              Present simulations and results using HTML, CSS, and React for
              dynamic, interactive web displays.
            </p>
          </div>
          <div className="p-5 bg-white border-l-4 border-blue-500 rounded">
            <h3 className="font-bold text-gray-900 mb-1">
              🎯 Project Showcase
            </h3>
            <p className="text-gray-700">
              Develop and present final projects combining physics knowledge,
              code, and web design.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Key Organizers
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-cyan-50 border border-cyan-200 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">IEEE EUI SB</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                • <span className="font-semibold">Farah Sultan</span> -
                Secretary
              </li>
              <li>
                • <span className="font-semibold">Mostafa Ibrahim</span> -
                Technical Activities Coordinator
              </li>
            </ul>
          </div>
          <div className="p-5 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">WeDev</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                • <span className="font-semibold">Judy Elsheekh</span> -
                President
              </li>
              <li>
                • <span className="font-semibold">Omar</span> - Mentor &
                Technical Lead
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Learning Outcomes
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 font-bold">✓</span>
            <span>
              Understand and apply fundamental physics concepts to real-world
              problems
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 font-bold">✓</span>
            <span>
              Develop computational thinking through physics simulations in
              Python
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 font-bold">✓</span>
            <span>
              Create visualizations and interactive content using VPython
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 font-bold">✓</span>
            <span>
              Communicate physics results through web-based presentations
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 font-bold">✓</span>
            <span>
              Build problem-solving and critical-thinking skills across domains
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-cyan-600 font-bold">✓</span>
            <span>Collaborate in interdisciplinary team projects</span>
          </li>
        </ul>
      </section>

      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-cyan-200 rounded-lg bg-cyan-50">
            <h3 className="text-xl font-bold text-cyan-800 mb-2">
              📍 Location
            </h3>
            <p className="text-gray-700">Egypt University of Informatics</p>
          </div>
          <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              ⏰ Schedule
            </h3>
            <p className="text-gray-700">November 21–24, 2025</p>
          </div>
          <div className="p-6 border-2 border-cyan-200 rounded-lg bg-cyan-50">
            <h3 className="text-xl font-bold text-cyan-800 mb-2">👥 Hosts</h3>
            <p className="text-gray-700">IEEE EUI SB (STB60211912) × WeDev</p>
          </div>
          <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              🎯 Target Audience
            </h3>
            <p className="text-gray-700">
              First-year engineering & computer science students
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Computational Physics Workshop demonstrated the power of
          collaboration between IEEE EUI SB and WeDev. By combining rigorous
          physics instruction, engaging Python programming, and modern web
          technologies, the workshop equipped first-year students with
          interconnected skills spanning science, engineering, and computer
          science. Participants completed hands-on simulations, built working
          visualizations, and presented projects showcasing their mastery of
          physics applied to real problems.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-cyan-200 text-cyan-900 rounded-full text-sm font-semibold">
            #collaboration
          </span>
          <span className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-sm font-semibold">
            #computational-physics
          </span>
          <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">
            #python
          </span>
          <span className="px-3 py-1 bg-purple-200 text-purple-900 rounded-full text-sm font-semibold">
            #programming
          </span>
          <span className="px-3 py-1 bg-orange-200 text-orange-900 rounded-full text-sm font-semibold">
            #web-technologies
          </span>
          <span className="px-3 py-1 bg-pink-200 text-pink-900 rounded-full text-sm font-semibold">
            #engineering
          </span>
        </div>
      </section>
    </>
  ),
};
