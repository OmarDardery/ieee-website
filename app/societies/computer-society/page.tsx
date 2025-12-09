export default function ComputerSocietyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-6 py-12 text-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-lg shadow-blue-100/40 backdrop-blur">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            IEEE Computer Society
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Build software that scales and inspires.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We dive into systems, web, AI, and security. Expect code labs, architecture reviews, and
            collaborations that ship real products.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/events?society=Computer%20Society"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-500"
            >
              View Computer Society events
            </a>
            <a
              href="mailto:ieee@example.edu"
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              Contact the team
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {["AI & ML", "Full-Stack", "Security"].map((focus) => (
            <div
              key={focus}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">{focus}</h2>
              <p className="mt-2 text-gray-700">
                Weekly labs, reading groups, and build nights to deepen skills and ship demos.
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">How to join</h3>
          <p className="mt-3 text-gray-700">
            Join our weekly meetups, volunteer for build nights, or present a lightning talk. Beginners and
            advanced builders are equally welcome.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-gray-700">
            <li>Project squads with mentorship</li>
            <li>Tooling deep-dives and code reviews</li>
            <li>Architecture and systems discussions</li>
            <li>Open-source contribution sprints</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
