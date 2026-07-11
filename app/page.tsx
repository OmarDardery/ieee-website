import Link from "next/link";
import { AwardsSlider } from "./components/AwardsSlider";
import { PersonSlider } from "./components/PersonSlider";
import {
  advisors,
  awards,
  committeeHeads,
  excomMembers,
  founders,
} from "./team-data";

const heroHighlights = [
  "Workshops",
  "Hackathons",
  "Industry Talks",
  "Community Impact",
];

const signatureEvents = [
  {
    title: "CyberQuest 2.0",
    tag: "Cybersecurity",
    body: "Blue-team drills, threat hunting labs, and real incident debriefs.",
  },
  {
    title: "SolveThe17 Hackathon",
    tag: "Impact",
    body: "48 hours, SDG-driven prototypes with mentors from industry.",
  },
  {
    title: "ComSoc NileSat Tour",
    tag: "Space & Comms",
    body: "Deep dive into satellite operations with NileSat engineers.",
  },
  {
    title: "PES ElectroDrive Day",
    tag: "Energy",
    body: "EV powertrain teardown, grid impact, and rapid charging demos.",
  },
  {
    title: "Quantum Computing 2025",
    tag: "Research",
    body: "Qiskit labs on error mitigation and NISQ-era workflows.",
  },
  {
    title: "Career Kickstart",
    tag: "Careers",
    body: "Resume gyms, mock interviews, and alumni panels.",
  },
];

const tracks = [
  {
    title: "AI & ML",
    body: "Computer vision, LLM agents, and MLOps fast-tracks.",
  },
  {
    title: "Embedded & Robotics",
    body: "Rapid prototyping, ROS nodes, and autonomous stacks.",
  },
  {
    title: "Power & Energy",
    body: "Grid simulations, EV systems, and renewable integration.",
  },
  {
    title: "Security",
    body: "Reverse engineering, blue-team labs, and exploit walkthroughs.",
  },
  {
    title: "Web & Cloud",
    body: "Full-stack builds, design systems, and cloud fundamentals.",
  },
  {
    title: "Outreach",
    body: "STEM days, community service, and school tech tours.",
  },
];

const fieldNotes = [
  {
    title: "IEEE R8 SAC Chair Talk",
    meta: "Leadership",
    body: "Growing student branches and impact across Region 8.",
  },
  {
    title: "She Inspires • WIE",
    meta: "Inclusion",
    body: "Mentorship circles and career pathways for women in engineering.",
  },
  {
    title: "Reverse Engineering 101",
    meta: "Security",
    body: "Static + dynamic analysis, unpacking real binaries.",
  },
  {
    title: "Software Eng Committee Kickoff",
    meta: "SWE",
    body: "Building the branch's product backbone and tooling.",
  },
  {
    title: "Computational Physics Workshop",
    meta: "Research",
    body: "Simulations, numerical methods, and HPC intros.",
  },
  {
    title: "Hospital 57357 SIGHT Tour",
    meta: "Humanitarian",
    body: "Tech for care delivery and medical systems.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 via-white to-blue-50 px-3 py-6 text-gray-900 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-12 lg:gap-16">
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border border-blue-200 bg-linear-to-br from-blue-50 via-white to-purple-50 p-6 shadow-lg shadow-blue-100 backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200 sm:text-sm">
                IEEE EUI • Builders, hackers, mentors
              </div>
              <h1 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Make the future real. Together.
              </h1>
              <p className="text-sm text-gray-700 sm:text-base lg:text-lg">
                We run hands-on tech tracks, ship projects, host design sprints,
                and collaborate with industry to push what engineers on campus
                can build.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <Link
                  href="/events"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-5 sm:py-3"
                >
                  View events
                </Link>
                <a
                  href="#signature"
                  className="rounded-xl border border-blue-300 px-4 py-2 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-50 hover:-translate-y-0.5 sm:px-5 sm:py-3"
                >
                  See our flagship work
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-blue-200 bg-white p-4 text-gray-900 shadow-sm shadow-blue-100 transition hover:-translate-y-1 hover:shadow-blue-200"
                >
                  <div className="text-sm font-semibold text-blue-600">
                    {item}
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    Curated, hands-on sessions with peers, alumni, and industry
                    partners.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature moments */}
        <section
          id="signature"
          className="grid gap-5 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Signature events
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              A few of the moments that shaped our branch—spanning comms,
              robotics, space, power, and security.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {signatureEvents.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm shadow-blue-100 transition hover:-translate-y-1 hover:border-blue-300"
                >
                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
                      {card.tag}
                    </span>
                    <span className="text-gray-500">Flagship</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Fresh wins</h3>
                <p className="text-sm text-gray-700">
                  Snapshots from awards and community impact.
                </p>
              </div>
            </div>
            <AwardsSlider images={awards} />
          </div>
        </section>

        {/* Tracks & labs */}
        <section
          id="programs"
          className="rounded-2xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Tracks, labs, and field work
              </h2>
              <p className="text-sm text-gray-700">
                From AI sprints to power systems—built with mentors and alumni.
              </p>
            </div>
            <Link
              href="/events"
              className="text-sm font-semibold text-blue-600 underline-offset-4 hover:underline"
            >
              Browse full calendar
            </Link>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100 transition hover:-translate-y-1 hover:border-blue-300"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="rounded-2xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                The people behind the work
              </h2>
              <p className="text-sm text-gray-700">
                Leadership, committee heads, and the founders who kicked it off.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-4">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100">
              <PersonSlider members={advisors} title="Advisors" />
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100">
              <PersonSlider members={excomMembers} title="Executive Committee" />
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100">
              <PersonSlider members={committeeHeads} title="Committee Heads" />
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100">
              <PersonSlider members={founders} title="IEEE EUI Founders" />
            </div>
          </div>
        </section>

        {/* Field notes */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-lg shadow-blue-100">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Field notes
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            A quick snapshot of recent highlights.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {fieldNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm shadow-blue-100"
              >
                <div className="text-xs uppercase tracking-wide text-blue-600">
                  {item.meta}
                </div>
                <h3 className="mt-1 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="rounded-2xl border border-blue-200 bg-linear-to-r from-blue-50 via-blue-50 to-purple-50 p-5 text-center shadow-xl shadow-blue-100">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">
            Ready to build with us?
          </h3>
          <p className="mt-2 text-sm text-gray-700 sm:text-base lg:text-lg">
            Drop into our next workshop, jump on a track, or partner with us on
            your next idea.
          </p>
          <Link
            href="/events"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-400 transition hover:-translate-y-0.5 sm:mt-6 sm:px-8 sm:py-3 sm:text-base"
          >
            See upcoming sessions
          </Link>
        </section>
      </div>
    </main>
  );
}
