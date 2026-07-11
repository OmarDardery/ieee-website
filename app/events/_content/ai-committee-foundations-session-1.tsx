import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "ai-committee-foundations-session-1",
  title: "AI Committee - Foundations session 1",
  description:
    "Foundational session covering AI committee basics and roadmap.",
  startDate: new Date("2023-11-04T00:00:00"),
  endDate: new Date("2023-11-11T00:00:00"),
  postedDate: new Date("2023-10-25T00:00:00"),
  societyCodes: ["SBC60211912"],
  theme: {
    page: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
    heading: "from-blue-600 to-purple-600",
  },
  meta: [
    { icon: "📅", text: "November 4, 2023" },
    { icon: "⏰", text: "5:00 PM - 6:10 PM EET" },
    { icon: "💻", text: "Online (Microsoft Teams)" },
  ],
  intro:
    "First Python Session at IEEE CS AI Committee, introducing participants to the essentials of Python programming for AI development.",
  content: (
    <>
      {/* Session Overview */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Session Overview
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The first session of the AI Committee&apos;s Foundations series was
            held on November 4th via Microsoft Teams. This introductory session
            laid the groundwork for Python programming in the context of AI
            development, covering essential concepts and practical
            applications.
          </p>
          <p>
            Participants discovered why Python is the preferred language for AI
            projects, thanks to its simplicity, extensive libraries, and strong
            community support. They gained practical experience using Jupyter
            Notebooks for coding and documentation.
          </p>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Topics Covered
        </h2>
        <div className="grid gap-6">
          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🐍 Python&apos;s Advantages for AI
            </h3>
            <p className="text-gray-600">
              Understanding why Python is the go-to language for AI
              development: simplicity, readability, extensive ecosystem, and
              strong community support.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              📓 Jupyter Notebooks
            </h3>
            <p className="text-gray-600">
              Hands-on introduction to Jupyter Notebooks as an interactive
              environment for coding, documentation, and visualization.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              📊 Data Types & Math Operations
            </h3>
            <p className="text-gray-600">
              Exploring fundamental data types (integers, floats, strings,
              booleans) and basic mathematical operations essential for
              numerical computations.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🔀 Control Flow Statements
            </h3>
            <p className="text-gray-600">
              Learning conditional statements (if, elif, else) to make
              decisions based on different conditions in code.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">🔁 Loops</h3>
            <p className="text-gray-600">
              Mastering for and while loops to automate repetitive tasks and
              iterate over data efficiently.
            </p>
          </div>

          <div className="border-l-4 border-teal-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🗂️ Data Structures
            </h3>
            <p className="text-gray-600">
              Introduction to essential Python data structures: lists, tuples,
              sets, and dictionaries, and their use cases in AI applications.
            </p>
          </div>

          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              ⚡ List Comprehension
            </h3>
            <p className="text-gray-600">
              Learning concise and efficient techniques for creating new lists
              based on existing ones using list comprehension.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          What Participants Gained
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              💡 Foundational Knowledge
            </h3>
            <p className="text-gray-700">
              Solid understanding of Python basics and why it&apos;s essential
              for AI and machine learning projects.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              🛠️ Practical Tools
            </h3>
            <p className="text-gray-700">
              Hands-on experience with Jupyter Notebooks for interactive coding
              and documentation.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-3">
              🎯 Core Concepts
            </h3>
            <p className="text-gray-700">
              Mastery of fundamental programming concepts: data types, control
              flow, loops, and data structures.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-3">
              ⚙️ Efficient Techniques
            </h3>
            <p className="text-gray-700">
              Introduction to Pythonic approaches like list comprehension for
              writing clean, efficient code.
            </p>
          </div>
        </div>
      </section>

      {/* Host Information */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Event Details</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <h3 className="font-bold text-lg">Host</h3>
              <p>Egypt University of Informatics, C16</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <h3 className="font-bold text-lg">Organizer</h3>
              <p>IEEE EUI Computer Society SBC - AI Committee</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <h3 className="font-bold text-lg">Platform</h3>
              <p>Online session conducted on Microsoft Teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Recap */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The AI Committee&apos;s first Foundations session successfully
          introduced participants to Python programming fundamentals for AI
          development. Through a comprehensive curriculum covering data types,
          control structures, loops, and data structures, attendees built a
          solid foundation for their journey into artificial intelligence and
          machine learning. The session demonstrated the power and simplicity
          of Python, setting the stage for more advanced topics in upcoming
          sessions.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">
            #ieee_eui_cs_sbc
          </span>
          <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-semibold">
            #ieee_eui_sb
          </span>
          <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-semibold">
            #ai_committee
          </span>
          <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">
            #ai
          </span>
          <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-semibold">
            #session
          </span>
        </div>
      </section>
    </>
  ),
};
