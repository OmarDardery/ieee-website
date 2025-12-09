export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-4 py-10 text-gray-900 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg shadow-blue-100/40 backdrop-blur sm:p-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                Welcome to IEEE EUI Branch
              </p>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
                Empowering engineers to learn, build, and lead.
              </h1>
              <p className="text-base text-gray-700 sm:text-lg">
                We are a student community of builders, researchers, and volunteers. Join us for
                hands-on workshops, technical talks, hackathons, and outreach programs that turn ideas
                into real impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/events"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-500"
                >
                  Explore events
                </a>
                <a
                  href="#programs"
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Discover programs
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Workshops", "Hackathons", "Industry Talks", "Community Service"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="text-sm font-semibold text-blue-700">{item}</div>
                  <p className="mt-2 text-sm text-gray-700">
                    Practical sessions led by peers and guests to upskill and collaborate.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Learning Tracks",
              body:
                "Semester-long tracks on AI, embedded systems, web, and power engineering with weekly meetups.",
            },
            {
              title: "Projects Lab",
              body:
                "Small teams build portfolio-ready projects, from prototypes to campus-ready solutions.",
            },
            {
              title: "Career Readiness",
              body:
                "Resume reviews, mock interviews, and mentorship from alumni and industry partners.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">{card.title}</h2>
              <p className="mt-2 text-gray-700">{card.body}</p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">What is IEEE EUI?</h3>
          <p className="mt-3 text-gray-700">
            IEEE EUI is a student branch dedicated to advancing technology for the benefit of humanity.
            We connect students with resources, mentorship, and opportunities to grow as engineers and leaders.
            Expect hands-on learning, collaborative projects, and a welcoming community.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
              Regular technical workshops and study groups.
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
              Annual hackathons and design challenges.
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
              Networking with alumni and industry speakers.
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
              Community outreach and service initiatives.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
