"use client";

import Image from "next/image";
import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from "react";

type Member = {
  name: string;
  role: string;
  image: string;
};

type PersonSliderProps = {
  members: Member[];
  title: string;
  currentSlide: number;
  setSlide: Dispatch<SetStateAction<number>>;
  progressKey: number;
};

const PersonSlider = ({ members, title, currentSlide, setSlide, progressKey }: PersonSliderProps) => {
  const handleNext = () => {
    setSlide((prev) => (prev + 1) % members.length);
  };

  const handlePrev = () => {
    setSlide((prev) => (prev - 1 + members.length) % members.length);
  };

  return (
    <div className="w-full">
      <h3 className="mb-2 text-center text-xl font-bold text-gray-900 sm:text-2xl">{title}</h3>
      <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          key={`${title}-${currentSlide}-${progressKey}`}
          className="h-full bg-blue-600"
          style={{ animation: "sliderProgress 5s linear forwards" }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 sm:gap-6">
        <div className="relative h-64 w-48 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg shadow-blue-100 sm:h-80 sm:w-64">
          <Image
            src={`/information/people/${title === "Executive Committee" ? "excom" : title === "Committee Heads" ? "committee-head" : title === "Advisors" ? "excom" : "ieee-eui-founders"}/${members[currentSlide].image}`}
            alt={members[currentSlide].name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 192px, 256px"
          />
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900 sm:text-xl">{members[currentSlide].name}</p>
          <p className="text-xs font-semibold text-blue-600 sm:text-sm">{members[currentSlide].role}</p>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            className="rounded-full bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200 active:scale-95"
          >
            ←
          </button>
          <div className="flex gap-1">
            {members.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setSlide(i);
                }}
                className={`h-2 rounded-full transition ${
                  i === currentSlide ? "w-6 bg-blue-600" : "w-2 bg-blue-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="rounded-full bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200 active:scale-95"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [excomSlide, setExcomSlide] = useState(0);
  const [committeeSlide, setCommitteeSlide] = useState(0);
  const [foundersSlide, setFoundersSlide] = useState(0);
  const [awardsSlide, setAwardsSlide] = useState(0);
  const [excomProgressKey, setExcomProgressKey] = useState(0);
  const [committeeProgressKey, setCommitteeProgressKey] = useState(0);
  const [foundersProgressKey, setFoundersProgressKey] = useState(0);
  const [awardsProgressKey, setAwardsProgressKey] = useState(0);

  const excomMembers: Member[] = [
    { name: "Fouad Hashesh", role: "Chair", image: "chair-fouad-hashesh.png" },
    { name: "Laila Khaled", role: "Vice-Chair", image: "vice-chair-laila-khaled.png" },
    { name: "Farah Sultan", role: "Secretary", image: "secretary-farah-sultan.png" },
    { name: "Maryam Rageh", role: "Treasurer", image: "treasurer-maryam-rageh.png" },
    { name: "Omar Dardery", role: "Web Master", image: "web-master-omar-dardery.png" },
  ];

  const committeeHeads: Member[] = [
    { name: "Mariam Hassan", role: "HR Head", image: "hr-head-mariam-hassan.png" },
    { name: "Nour Nasr", role: "Media Head", image: "media-head-nour-nasr.png" },
    { name: "Nour Hazem", role: "PR Head", image: "pr-head-nour-hazem.png" },
    { name: "Abdelrahman Elkhashab", role: "Organization Committee Head", image: "organization-committee-head-adbelrahman-elkhashab.png" },
    { name: "Mostafa Ibrahim", role: "Technical Activity Coordinator", image: "Mostafa-Ibrahim-Technical-activity-coodrinator.jpg" },
    { name: "Youssef Kafafy", role: "Photography Head", image: "Youssef-Kafafy-photography-head.jpg" },
    { name: "Ziad Fayed", role: "Member Development Coordinator", image: "Ziad-Fayed-Member-devlopment-coordinator.jpg" },
  ];

  const founders: Member[] = [
    { name: "Zeyad Ayman", role: "Founding Chair", image: "founding-chair-zeyad-ayman.png" },
    { name: "Youssef Haider", role: "Founding Vice-Chair", image: "founding-vice-chair-youssef-haider.png" },
    { name: "Doha Hafez", role: "Founding Secretary", image: "Founding-secrtary-IEEE-Central-Indiana-Section-Student-Representative-Doha-Hafez.png" },
  ];

  const advisors: Member[] = [
    { name: "Dr Mohamed Ismail", role: "Advisor", image: "advisor-Dr-Mohamed-Ismail.jpg" },
  ];

  const awards: string[] = [
    "/information/sb-awards/awards-1.png",
    "/information/sb-awards/award-2.png",
    "/information/sb-awards/awards-3.png",
    "/information/sb-awards/awards-4.png",
  ];

  // Auto-advance sliders every 5 seconds with progress bar reset via key
  useEffect(() => {
    setExcomProgressKey((key) => key + 1);
    const timer = setTimeout(() => {
      setExcomSlide((current) => (current + 1) % excomMembers.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [excomSlide, excomMembers.length]);

  useEffect(() => {
    setCommitteeProgressKey((key) => key + 1);
    const timer = setTimeout(() => {
      setCommitteeSlide((current) => (current + 1) % committeeHeads.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [committeeSlide, committeeHeads.length]);

  useEffect(() => {
    setFoundersProgressKey((key) => key + 1);
    const timer = setTimeout(() => {
      setFoundersSlide((current) => (current + 1) % founders.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [foundersSlide, founders.length]);

  useEffect(() => {
    setAwardsProgressKey((key) => key + 1);
    const timer = setTimeout(() => {
      setAwardsSlide((current) => (current + 1) % awards.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [awardsSlide, awards.length]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 px-3 py-6 text-gray-900 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-12 lg:gap-16">
        <style jsx>{`
          @keyframes sliderProgress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}</style>

        {/* Hero + Impact strip */}
        <section className="overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 shadow-lg shadow-blue-100 backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200 sm:text-sm">
                IEEE EUI • Builders, hackers, mentors
              </div>
              <h1 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Make the future real. Together.
              </h1>
              <p className="text-sm text-gray-700 sm:text-base lg:text-lg">
                We run hands-on tech tracks, ship projects, host design sprints, and collaborate with industry to push
                what engineers on campus can build.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <a
                  href="/events"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-5 sm:py-3"
                >
                  View events
                </a>
                <a
                  href="#signature"
                  className="rounded-xl border border-blue-300 px-4 py-2 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-50 hover:-translate-y-0.5 sm:px-5 sm:py-3"
                >
                  See our flagship work
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Workshops", "Hackathons", "Industry Talks", "Community Impact"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-blue-200 bg-white p-4 text-gray-900 shadow-sm shadow-blue-100 transition hover:-translate-y-1 hover:shadow-blue-200"
                >
                  <div className="text-sm font-semibold text-blue-600">{item}</div>
                  <p className="mt-2 text-xs text-gray-600">
                    Curated, hands-on sessions with peers, alumni, and industry partners.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact stats removed per request */}
        </section>

        {/* Signature moments */}
        <section id="signature" className="grid gap-5 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Signature events</h2>
            <p className="mt-2 text-sm text-gray-700">
              A few of the moments that shaped our branch—spanning comms, robotics, space, power, and security.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { title: "CyberQuest 2.0", tag: "Cybersecurity", body: "Blue-team drills, threat hunting labs, and real incident debriefs." },
                { title: "SolveThe17 Hackathon", tag: "Impact", body: "48 hours, SDG-driven prototypes with mentors from industry." },
                { title: "ComSoc NileSat Tour", tag: "Space & Comms", body: "Deep dive into satellite operations with NileSat engineers." },
                { title: "PES ElectroDrive Day", tag: "Energy", body: "EV powertrain teardown, grid impact, and rapid charging demos." },
                { title: "Quantum Computing 2025", tag: "Research", body: "Qiskit labs on error mitigation and NISQ-era workflows." },
                { title: "Career Kickstart", tag: "Careers", body: "Resume gyms, mock interviews, and alumni panels." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm shadow-blue-100 transition hover:-translate-y-1 hover:border-blue-300"
                >
                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">{card.tag}</span>
                    <span className="text-gray-500">Flagship</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-gray-900">{card.title}</h3>
                  <p className="mt-1 text-sm text-gray-700">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Fresh wins</h3>
                <p className="text-sm text-gray-700">Snapshots from awards and community impact.</p>
              </div>
            </div>
            <div className="relative flex flex-col gap-4">
              <div className="mb-1 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  key={`awards-${awardsSlide}-${awardsProgressKey}`}
                  className="h-full bg-amber-500"
                  style={{ animation: "sliderProgress 5s linear forwards" }}
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg shadow-amber-100 sm:h-80">
                <Image
                  src={awards[awardsSlide]}
                  alt="Award"
                  fill
                  className="object-contain p-3 sm:p-6"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setAwardsSlide((awardsSlide - 1 + awards.length) % awards.length);
                      setAwardsProgressKey((key) => key + 1);
                    }}
                    className="rounded-full bg-gray-200 px-3 py-2 text-gray-700 transition hover:bg-gray-300"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      setAwardsSlide((awardsSlide + 1) % awards.length);
                      setAwardsProgressKey((key) => key + 1);
                    }}
                    className="rounded-full bg-gray-200 px-3 py-2 text-gray-700 transition hover:bg-gray-300"
                  >
                    →
                  </button>
                </div>
                <div className="flex gap-1">
                  {awards.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full ${i === awardsSlide ? "bg-amber-500" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracks & labs */}
        <section id="programs" className="rounded-2xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Tracks, labs, and field work</h2>
              <p className="text-sm text-gray-700">From AI sprints to power systems—built with mentors and alumni.</p>
            </div>
            <a href="/events" className="text-sm font-semibold text-blue-600 underline-offset-4 hover:underline">
              Browse full calendar
            </a>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "AI & ML", body: "Computer vision, LLM agents, and MLOps fast-tracks." },
              { title: "Embedded & Robotics", body: "Rapid prototyping, ROS nodes, and autonomous stacks." },
              { title: "Power & Energy", body: "Grid simulations, EV systems, and renewable integration." },
              { title: "Security", body: "Reverse engineering, blue-team labs, and exploit walkthroughs." },
              { title: "Web & Cloud", body: "Full-stack builds, design systems, and cloud fundamentals." },
              { title: "Outreach", body: "STEM days, community service, and school tech tours." },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100 transition hover:-translate-y-1 hover:border-blue-300"
              >
                <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="rounded-2xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">The people behind the work</h2>
              <p className="text-sm text-gray-700">Leadership, committee heads, and the founders who kicked it off.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-4">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100">
              <div className="w-full">
                <h3 className="mb-2 text-center text-xl font-bold text-gray-900 sm:text-2xl">Advisors</h3>
                <div className="relative flex flex-col items-center gap-4 sm:gap-6">
                  <div className="relative h-64 w-48 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg shadow-blue-100 sm:h-80 sm:w-64">
                    <Image
                      src={`/information/people/excom/${advisors[0].image}`}
                      alt={advisors[0].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 192px, 256px"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900 sm:text-xl">{advisors[0].name}</p>
                    <p className="text-xs font-semibold text-blue-600 sm:text-sm">{advisors[0].role}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100">
              <PersonSlider
                members={excomMembers}
                title="Executive Committee"
                currentSlide={excomSlide}
                setSlide={setExcomSlide}
                progressKey={excomProgressKey}
              />
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100">
              <PersonSlider
                members={committeeHeads}
                title="Committee Heads"
                currentSlide={committeeSlide}
                setSlide={setCommitteeSlide}
                progressKey={committeeProgressKey}
              />
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 shadow-sm shadow-blue-100">
              <PersonSlider
                members={founders}
                title="IEEE EUI Founders"
                currentSlide={foundersSlide}
                setSlide={setFoundersSlide}
                progressKey={foundersProgressKey}
              />
            </div>
          </div>
        </section>

        {/* Field notes */}
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-lg shadow-blue-100">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">Field notes</h2>
          <p className="mt-2 text-sm text-gray-700">A quick snapshot of recent highlights.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "IEEE R8 SAC Chair Talk", meta: "Leadership", body: "Growing student branches and impact across Region 8." },
              { title: "She Inspires • WIE", meta: "Inclusion", body: "Mentorship circles and career pathways for women in engineering." },
              { title: "Reverse Engineering 101", meta: "Security", body: "Static + dynamic analysis, unpacking real binaries." },
              { title: "Software Eng Committee Kickoff", meta: "SWE", body: "Building the branch's product backbone and tooling." },
              { title: "Computational Physics Workshop", meta: "Research", body: "Simulations, numerical methods, and HPC intros." },
              { title: "Hospital 57357 SIGHT Tour", meta: "Humanitarian", body: "Tech for care delivery and medical systems." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-blue-200 bg-white p-4 shadow-sm shadow-blue-100">
                <div className="text-xs uppercase tracking-wide text-blue-600">{item.meta}</div>
                <h3 className="mt-1 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-blue-50 to-purple-50 p-5 text-center shadow-xl shadow-blue-100">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">Ready to build with us?</h3>
          <p className="mt-2 text-sm text-gray-700 sm:text-base lg:text-lg">
            Drop into our next workshop, jump on a track, or partner with us on your next idea.
          </p>
          <a
            href="/events"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-400 transition hover:-translate-y-0.5 sm:mt-6 sm:px-8 sm:py-3 sm:text-base"
          >
            See upcoming sessions
          </a>
        </section>
      </div>
    </main>
  );
}
