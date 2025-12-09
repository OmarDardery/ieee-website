export default function SightPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white px-6 py-12 text-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-3xl border border-amber-100 bg-white/80 p-8 shadow-lg shadow-amber-100/40 backdrop-blur">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
            IEEE SIGHT
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Technology for community impact.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We design accessible, sustainable solutions with and for underserved communities. Human-centered
            design meets pragmatic engineering.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/events?society=SIGHT"
              className="rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-amber-200 transition hover:bg-amber-500"
            >
              View SIGHT events
            </a>
            <a
              href="mailto:ieee@example.edu"
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-amber-300 hover:text-amber-700"
            >
              Partner with us
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {["Energy Access", "Health", "Education"].map((focus) => (
            <div
              key={focus}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">{focus}</h2>
              <p className="mt-2 text-gray-700">
                Co-design sprints, prototyping, and field testing with community feedback loops.
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">How we work</h3>
          <p className="mt-3 text-gray-700">
            Multidisciplinary teams scope, prototype, and validate solutions alongside local stakeholders. We aim
            for measurable, sustainable outcomes.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-gray-700">
            <li>Human-centered design workshops</li>
            <li>Rapid prototyping and field pilots</li>
            <li>Impact measurement and iteration</li>
            <li>Mentorship from practitioners</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
