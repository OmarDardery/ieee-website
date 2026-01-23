"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [excomSlide, setExcomSlide] = useState(0);
  const [committeeSlide, setCommitteeSlide] = useState(0);
  const [foundersSlide, setFoundersSlide] = useState(0);
  const [awardsSlide, setAwardsSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const excomMembers = [
    { name: "Fouad Hashesh", role: "Chair", image: "chair-fouad-hashesh.png" },
    { name: "Laila Khaled", role: "Vice-Chair", image: "vice-chair-laila-khaled.png" },
    { name: "Farah Sultan", role: "Secretary", image: "secretary-farah-sultan.png" },
    { name: "Maryam Rageh", role: "Treasurer", image: "treasurer-maryam-rageh.png" },
    { name: "Omar Dardery", role: "Web Master", image: "web-master-omar-dardery.png" },
  ];

  const committeeHeads = [
    { name: "Mariam Hassan", role: "HR Head", image: "hr-head-mariam-hassan.png" },
    { name: "Nour Nasr", role: "Media Head", image: "media-head-nour-nasr.png" },
    { name: "Nour Hazem", role: "PR Head", image: "pr-head-nour-hazem.png" },
    { name: "Abdelrahman Elkhashab", role: "Organization Committee Head", image: "organization-committee-head-adbelrahman-elkhashab.png" },
  ];

  const founders = [
    { name: "Zeyad Ayman", role: "Founding Chair", image: "founding-chair-zeyad-ayman.png" },
    { name: "Youssef Haider", role: "Founding Vice-Chair", image: "founding-vice-chair-youssef-haider.png" },
    { name: "Doha Hafez", role: "Founding Secretary", image: "Founding-secrtary-IEEE-Central-Indiana-Section-Student-Representative-Doha-Hafez.png" },
  ];

  const awards = [
    "/information/sb-awards/awards-1.png",
    "/information/sb-awards/award-2.png",
    "/information/sb-awards/awards-3.png",
    "/information/sb-awards/awards-4.png",
  ];

  // Auto-advance sliders every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 20;
        if (newProgress >= 100) {
          setExcomSlide((current) => (current + 1) % excomMembers.length);
          return 0;
        }
        return newProgress;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCommitteeSlide((current) => (current + 1) % committeeHeads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFoundersSlide((current) => (current + 1) % founders.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAwardsSlide((current) => (current + 1) % awards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const PersonSlider = ({ members, title, currentSlide, setSlide, isExcom }) => {
    const handleNext = () => {
      setSlide((currentSlide + 1) % members.length);
      setProgress(0);
    };
    const handlePrev = () => {
      setSlide((currentSlide - 1 + members.length) % members.length);
      setProgress(0);
    };

    return (
      <div className="w-full">
        <h3 className="mb-2 text-center text-xl font-bold text-gray-900 sm:text-2xl">{title}</h3>
        {isExcom && (
          <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-blue-600 transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        <div className="relative flex flex-col items-center gap-4 sm:gap-6">
          <div className="relative h-64 w-48 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-lg sm:h-80 sm:w-64">
            <Image
              src={`/information/people/${title === "Executive Committee" ? "excom" : title === "Committee Heads" ? "committee-head" : "ieee-eui-founders"}/${members[currentSlide].image}`}
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
                    setProgress(0);
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-3 py-6 text-gray-900 sm:px-6 sm:py-10 lg:px-8 lg:py-12" suppressHydrationWarning>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* Hero Section */}
        <section className="rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-lg shadow-blue-100/40 backdrop-blur sm:rounded-3xl sm:p-6 lg:p-8">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:text-sm">
                Welcome to IEEE EUI Branch
              </p>
              <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Empowering engineers to learn, build, and lead.
              </h1>
              <p className="text-sm text-gray-700 sm:text-base lg:text-lg">
                We are a student community of builders, researchers, and volunteers. Join us for
                hands-on workshops, technical talks, hackathons, and outreach programs that turn ideas
                into real impact.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                <a
                  href="/events"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-500 active:scale-95 sm:px-5 sm:py-3"
                >
                  Explore events
                </a>
                <a
                  href="#programs"
                  className="rounded-xl border border-gray-200 px-4 py-2 text-center text-sm font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-700 active:scale-95 sm:px-5 sm:py-3"
                >
                  Discover programs
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {["Workshops", "Hackathons", "Industry Talks", "Community Service"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl sm:p-4"
                >
                  <div className="text-xs font-semibold text-blue-700 sm:text-sm">{item}</div>
                  <p className="mt-1 text-xs text-gray-700 sm:mt-2 sm:text-sm">
                    Practical sessions led by peers and guests to upskill and collaborate.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="grid gap-4 sm:gap-6 md:grid-cols-3">
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
              className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl sm:p-6"
            >
              <h2 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">{card.title}</h2>
              <p className="mt-2 text-sm text-gray-700 sm:text-base">{card.body}</p>
            </div>
          ))}
        </section>

        {/* About Section */}
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 lg:p-8">
          <h3 className="text-lg font-semibold text-gray-900 sm:text-xl lg:text-2xl">What is IEEE EUI?</h3>
          <p className="mt-2 text-sm text-gray-700 sm:mt-3 sm:text-base lg:text-lg">
            IEEE EUI is a student branch dedicated to advancing technology for the benefit of humanity.
            We connect students with resources, mentorship, and opportunities to grow as engineers and leaders.
            Expect hands-on learning, collaborative projects, and a welcoming community.
          </p>
          <ul className="mt-3 grid gap-2 sm:mt-4 sm:gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-2 text-sm text-gray-700 sm:text-base">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
              Regular technical workshops and study groups.
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700 sm:text-base">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
              Annual hackathons and design challenges.
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700 sm:text-base">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
              Networking with alumni and industry speakers.
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700 sm:text-base">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
              Community outreach and service initiatives.
            </li>
          </ul>
        </section>

        {/* Meet Our Team Section */}
        <div className="border-t border-gray-200 pt-8 sm:pt-10 lg:pt-12">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">Meet Our Team</h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Discover the dedicated leaders and members driving IEEE EUI's mission.
          </p>
        </div>

        {/* Executive Committee Slider */}
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 lg:p-8">
          <PersonSlider
            members={excomMembers}
            title="Executive Committee"
            currentSlide={excomSlide}
            setSlide={setExcomSlide}
            isExcom={true}
          />
        </section>

        {/* Committee Heads Slider */}
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 lg:p-8">
          <PersonSlider
            members={committeeHeads}
            title="Committee Heads"
            currentSlide={committeeSlide}
            setSlide={setCommitteeSlide}
            isExcom={false}
          />
        </section>

        {/* Founders Slider */}
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 lg:p-8">
          <PersonSlider
            members={founders}
            title="IEEE EUI Founders"
            currentSlide={foundersSlide}
            setSlide={setFoundersSlide}
            isExcom={false}
          />
        </section>

        {/* Awards & Recognition Section */}
        <div className="border-t border-gray-200 pt-8 sm:pt-10 lg:pt-12">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">Awards & Recognition</h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Celebrating our achievements and contributions to the IEEE community.
          </p>
        </div>

        {/* Awards Slider */}
        <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 lg:p-8">
          <div className="w-full">
            <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-amber-500 transition-all duration-1000 ease-linear"
                style={{ width: `${((awardsSlide + 1) / awards.length) * 100}%` }}
              />
            </div>
            <div className="relative flex flex-col items-center gap-4 sm:gap-6">
              <div className="relative h-48 w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 shadow-lg sm:h-64 md:max-w-2xl lg:h-80">
                <Image
                  src={awards[awardsSlide]}
                  alt="Award"
                  fill
                  className="object-contain p-2 sm:p-4"
                  sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) calc(100vw - 3rem), min(100vw - 4rem, 42rem)"
                />
              </div>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => setAwardsSlide((awardsSlide - 1 + awards.length) % awards.length)}
                  className="rounded-full bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200 active:scale-95 sm:p-3"
                >
                  ←
                </button>
                <div className="flex gap-1">
                  {awards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setAwardsSlide(i)}
                      className={`h-2 rounded-full transition ${
                        i === awardsSlide ? "w-6 bg-blue-600" : "w-2 bg-blue-200"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setAwardsSlide((awardsSlide + 1) % awards.length)}
                  className="rounded-full bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-200 active:scale-95 sm:p-3"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-blue-100/50 p-4 text-center shadow-sm sm:rounded-2xl sm:p-6 lg:p-8">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl">Ready to join IEEE EUI?</h3>
          <p className="mt-2 text-sm text-gray-700 sm:text-base lg:text-lg">
            Connect with us on social media, attend an event, or reach out to our team to get involved.
          </p>
          <a
            href="/events"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-500 active:scale-95 sm:mt-6 sm:px-8 sm:py-3 sm:text-base"
          >
            Explore Upcoming Events
          </a>
        </section>
      </div>
    </main>
  );
}
