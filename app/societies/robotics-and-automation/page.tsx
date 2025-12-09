export default function RoboticsAutomationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white px-6 py-12 text-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-3xl border border-emerald-100 bg-white/80 p-8 shadow-lg shadow-emerald-100/40 backdrop-blur">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            IEEE Robotics & Automation Society
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Build robots, master control, iterate fast.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            From drivetrain design to perception stacks, we prototype, tune, and compete. Bring your soldering
            iron and your GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/events?society=Robotics%20and%20Automation"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-500"
            >
              View RAS events
            </a>
            <a
              href="mailto:ieee@example.edu"
              className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Join a build night
            </a>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {["Mechanics", "Perception", "Control"].map((focus) => (
            <div
              key={focus}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-gray-900">{focus}</h2>
              <p className="mt-2 text-gray-700">
                Labs on CAD, sensor fusion, SLAM basics, and PID tuning with live demos.
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Get involved</h3>
          <p className="mt-3 text-gray-700">
            Join project pods for line-followers, pick-and-place arms, and autonomous rovers. We learn by
            building and testing—fast.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-gray-700">
            <li>Hands-on hardware labs</li>
            <li>Firmware and ROS workshops</li>
            <li>Competition prep and scrimmages</li>
            <li>Peer code reviews and debugging clinics</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
