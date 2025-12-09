export default function ComSocPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white px-6 py-12 text-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-3xl border border-indigo-100 bg-white/80 p-8 shadow-lg shadow-indigo-100/40 backdrop-blur">
          <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700">
            IEEE Communications Society (ComSoc)
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Connect the world—wireless, wired, and beyond.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            We explore wireless systems, networks, and the future of connectivity. Expect protocol labs,
            spectrum discussions, and hands-on demos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/events?society=ComSoc"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-500"
            >
              View ComSoc events
            </a>
            <a
              href="mailto:ieee@example.edu"
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-indigo-300 hover:text-indigo-700"
            >
              Join a study group
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {["Wireless", "Networks", "Edge"].map((focus) => (
            <div
              key={focus}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">{focus}</h2>
              <p className="mt-2 text-gray-700">
                Labs on SDR, 5G/6G concepts, routing, and edge-cloud systems with practical exercises.
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Ways to participate</h3>
          <p className="mt-3 text-gray-700">
            Join protocol deep-dives, contribute to campus network projects, or lead a reading group. All levels
            welcome—curiosity required.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-gray-700">
            <li>SDR and wireless labs</li>
            <li>Network simulation workshops</li>
            <li>Standards and protocol study jams</li>
            <li>Edge and cloud integration projects</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
