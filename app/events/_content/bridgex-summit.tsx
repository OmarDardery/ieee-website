import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import type { EventDefinition } from "./types";

// Brand typography per the BRIDGEx branding guide (Montserrat Bold / Medium)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Brand palette per Bridge Branding.pdf
const NAVY = "#0C3A61";
const BLUE = "#1A4FA2";
const TEAL = "#255977";
const ORANGE = "#F37B21";

const tracks = [
  {
    title: "Talks & Panels",
    tagline: "Hear it from the people who build things.",
    description:
      "Interactive discussions with engineers, HR professionals, and industry leaders — unfiltered insight into what the real world of technology expects.",
    accent: BLUE,
    icon: "🎙️",
  },
  {
    title: "Technical Workshops",
    tagline: "Learn by doing, not by watching.",
    description:
      "Practical, hands-on sessions in Software, AI, Data Science, Electronics, and Embedded Systems — walk out with skills you can use tomorrow.",
    accent: ORANGE,
    icon: "⚙️",
  },
  {
    title: "Startups & Innovation",
    tagline: "From idea to impact.",
    description:
      "Explore entrepreneurship, innovation, and startup success stories from founders who turned student projects into companies.",
    accent: TEAL,
    icon: "🚀",
  },
  {
    title: "Expo & Networking",
    tagline: "Your next opportunity is in the room.",
    description:
      "Connect with companies, discover internships and openings, and build the meaningful relationships that launch careers.",
    accent: NAVY,
    icon: "🤝",
  },
];

const pillars = [
  {
    title: "Learn",
    body: "Practical knowledge from expert-led talks and workshops designed around what industry actually needs — not just what the curriculum covers.",
  },
  {
    title: "Connect",
    body: "Direct access to engineers, recruiters, and founders. Conversations here become referrals, internships, and mentorships.",
  },
  {
    title: "Grow",
    body: "Leave with the confidence, skills, and industry exposure to step into the professional world — before graduation day.",
  },
];

function XMark({ className }: { className?: string }) {
  // The brand "X" — the intersection where students, academia, and industry meet.
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id="bx-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={TEAL} />
        </linearGradient>
        <linearGradient id="bx-orange" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ORANGE} />
          <stop offset="100%" stopColor="#f9a45c" />
        </linearGradient>
      </defs>
      <polygon points="8,0 42,50 8,100 28,100 62,50 28,0" fill="url(#bx-blue)" />
      <polygon
        points="92,0 58,50 92,100 72,100 38,50 72,0"
        fill="url(#bx-orange)"
        opacity="0.92"
      />
    </svg>
  );
}

function BridgexPage() {
  return (
    <div className={`${montserrat.className} bg-white text-[#0C3A61]`}>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        {/* Soft brand glows, Apple-style restraint */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-3xl"
          style={{ background: `radial-gradient(closest-side, ${BLUE}, transparent)` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/3 -right-40 h-[26rem] w-[26rem] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: `radial-gradient(closest-side, ${ORANGE}, transparent)` }}
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
          <p
            className="hero-rise mb-10 rounded-full border border-[#0C3A61]/10 bg-white/70 px-5 py-2 text-xs font-semibold tracking-[0.22em] uppercase text-[#255977] shadow-sm"
            style={{ animationDelay: "0ms" }}
          >
            IEEE EUI Student Branch presents
          </p>

          <div
            className="hero-rise relative w-full max-w-3xl"
            style={{ animationDelay: "120ms" }}
          >
            <Image
              src="/LOGO.png"
              alt="BRIDGEx Summit"
              width={2005}
              height={658}
              priority
              className="h-auto w-full"
              sizes="(max-width: 768px) 92vw, 768px"
            />
          </div>

          <h1
            className="hero-rise mt-12 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl"
            style={{ animationDelay: "240ms" }}
          >
            Where ambition{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BLUE}, ${ORANGE})`,
              }}
            >
              meets industry.
            </span>
          </h1>

          <p
            className="hero-rise mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#255977] sm:text-xl"
            style={{ animationDelay: "360ms" }}
          >
            A technology summit connecting ambitious students with industry
            leaders — inspiring talks, hands-on workshops, and the connections
            that start careers.
          </p>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-[#0C3A61]/80"
            style={{ animationDelay: "480ms" }}
          >
            <span className="flex items-center gap-2">
              <span aria-hidden>📅</span> September 26, 2026
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden>📍</span> Egypt University of Informatics
            </span>
            <span className="flex items-center gap-2">
              <span aria-hidden>🎟️</span> Registration opening soon
            </span>
          </div>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="#tracks"
              className="rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03] hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, #e0640d)`,
                boxShadow: "0 12px 30px -10px rgba(243,123,33,0.55)",
              }}
            >
              Explore the Summit
            </a>
            <a
              href="#details"
              className="rounded-full border border-[#0C3A61]/15 bg-white px-8 py-3.5 text-sm font-bold text-[#0C3A61] transition hover:border-[#0C3A61]/40"
            >
              Event details
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section className="text-white" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 text-center sm:grid-cols-4">
          {[
            ["4", "Learning tracks"],
            ["10+", "Speakers & mentors"],
            ["5", "Hands-on domains"],
            ["1", "Unmissable day"],
          ].map(([value, label]) => (
            <div key={label} className="scroll-reveal">
              <div
                className="text-5xl font-bold tracking-tight sm:text-6xl"
                style={{ color: "#f9a45c" }}
              >
                {value}
              </div>
              <div className="mt-2 text-sm font-medium tracking-wide text-white/70">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Mission statement ---------- */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center sm:py-36">
        <p className="scroll-reveal text-xs font-bold tracking-[0.28em] uppercase text-[#F37B21]">
          Our mission
        </p>
        <h2 className="scroll-reveal mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          To bridge the gap between academia and industry — empowering students
          with practical knowledge, real-world experience, and direct
          connections with professionals.
        </h2>
        <p className="scroll-reveal mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-[#255977]">
          The distinctive “X” in BRIDGEx is more than a letter. It marks the
          intersection where students, academia, industry, and innovation come
          together to create meaningful opportunities and future careers.
        </p>
      </section>

      {/* ---------- Tracks ---------- */}
      <section id="tracks" className="bg-[#f5f7fa] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="scroll-reveal mb-16 max-w-3xl">
            <p className="text-xs font-bold tracking-[0.28em] uppercase text-[#F37B21]">
              Event tracks
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Four tracks. One goal — your career.
            </h2>
            <p className="mt-4 text-lg font-medium text-[#255977]">
              BRIDGEx offers multiple learning tracks designed to match
              different interests and career paths.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="scroll-reveal group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${track.accent}, transparent)`,
                  }}
                />
                <div className="mb-6 text-4xl" aria-hidden>
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  {track.title}
                </h3>
                <p
                  className="mt-1 text-sm font-bold"
                  style={{ color: track.accent }}
                >
                  {track.tagline}
                </p>
                <p className="mt-4 leading-relaxed font-medium text-[#255977]">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Vision (dark) ---------- */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: `linear-gradient(160deg, ${NAVY} 0%, #0a2e4d 60%, ${TEAL} 130%)`,
        }}
      >
        <XMark className="pointer-events-none absolute -right-16 top-1/2 h-[130%] -translate-y-1/2 opacity-[0.10]" />
        <div className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36">
          <p className="scroll-reveal text-xs font-bold tracking-[0.28em] uppercase text-[#f9a45c]">
            Our vision
          </p>
          <h2 className="scroll-reveal mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            A future where every engineering student graduates with the
            confidence, skills, and industry exposure to thrive.
          </h2>
          <p className="scroll-reveal mt-8 max-w-2xl text-lg font-medium leading-relaxed text-white/70">
            Blue for knowledge, trust, and technology. Orange for energy,
            innovation, and ambition. BRIDGEx is where they meet — and where
            you cross over.
          </p>
        </div>
      </section>

      {/* ---------- Why attend ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="scroll-reveal mb-16 text-center">
          <p className="text-xs font-bold tracking-[0.28em] uppercase text-[#F37B21]">
            Why attend
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Cross the bridge.
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="scroll-reveal text-center">
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${[BLUE, ORANGE, TEAL][i]}, ${NAVY})`,
                }}
              >
                {i + 1}
              </div>
              <h3 className="mt-6 text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed font-medium text-[#255977]">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Details ---------- */}
      <section id="details" className="bg-[#f5f7fa] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="scroll-reveal mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
            The essentials
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "📅",
                title: "When",
                body: "September 26, 2026 · 9:00 AM – 6:00 PM EET",
              },
              {
                icon: "📍",
                title: "Where",
                body: "Egypt University of Informatics, Knowledge City, New Administrative Capital",
              },
              {
                icon: "🎓",
                title: "Who",
                body: "Open to all engineering and computing students hungry for real-world exposure",
              },
              {
                icon: "🎟️",
                title: "Registration",
                body: "Opening soon — follow IEEE EUI SB channels for the announcement",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="scroll-reveal rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="text-3xl" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#255977]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="relative overflow-hidden px-6 py-28 text-center text-white sm:py-36" style={{ backgroundColor: NAVY }}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(60rem 30rem at 50% 120%, ${ORANGE}, transparent)`,
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <XMark className="scroll-reveal mx-auto mb-10 h-16 w-16" />
          <h2 className="scroll-reveal text-4xl font-bold tracking-tight sm:text-6xl">
            Be part of BRIDGEx.
          </h2>
          <p className="scroll-reveal mt-6 text-lg font-medium text-white/70">
            One day. Four tracks. A room full of people who can change your
            trajectory. Registration details are coming soon — don’t miss the
            announcement.
          </p>
          <div className="scroll-reveal mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#tracks"
              className="rounded-full px-8 py-3.5 text-sm font-bold text-white transition hover:scale-[1.03]"
              style={{
                background: `linear-gradient(135deg, ${ORANGE}, #e0640d)`,
                boxShadow: "0 12px 30px -10px rgba(243,123,33,0.55)",
              }}
            >
              Revisit the tracks
            </a>
            <Link
              href="/events"
              className="rounded-full border border-white/25 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              ← All events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export const event: EventDefinition = {
  id: "bridgex-summit",
  title: "BRIDGEx Summit",
  description:
    "IEEE EUI SB's flagship technology summit connecting ambitious students with industry leaders — talks, hands-on workshops, startup stories, and a networking expo.",
  startDate: new Date("2026-09-26T09:00:00"),
  endDate: new Date("2026-09-26T18:00:00"),
  postedDate: new Date("2026-07-16T00:00:00"),
  societyCodes: [],
  theme: {
    // Unused when fullPage is set, but kept sensible for any generic surfaces
    page: "bg-white",
    heading: "from-[#1A4FA2] to-[#F37B21]",
  },
  banner: {
    src: "/LOGO.png",
    alt: "BRIDGEx Summit logo",
  },
  meta: [
    { icon: "📅", text: "September 26, 2026 · 9:00 AM – 6:00 PM EET" },
    { icon: "📍", text: "Egypt University of Informatics, New Administrative Capital" },
  ],
  intro:
    "A technology summit bridging the gap between academia and industry through inspiring talks, hands-on workshops, and meaningful connections.",
  content: null,
  fullPage: <BridgexPage />,
};
