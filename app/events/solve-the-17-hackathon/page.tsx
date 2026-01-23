import Image from "next/image";

export default function SolveThe17Hackathon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-6 inline-block">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Event Concluded
          </span>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg border border-emerald-100">
          <div className="relative aspect-[16/7] bg-gray-200" suppressHydrationWarning>
            <Image
              src="/solve-the-17-hackathon.jpg"
              alt="SolveThe17 Hackathon banner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        </div>

        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            SolveThe17 Hackathon
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>May 10–17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Egypt University of Informatics, New Administrative Capital</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🏆</span>
              <span>Prizes: 20,000 EGP</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            A dynamic hackathon in collaboration with the Ministry of Youth & Sports, bringing together coders, innovators, and problem-solvers to turn ideas into real-world solutions tackling pressing global issues.
          </p>
        </header>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            SolveThe17 challenged participants to collaborate and innovate, combining their technical skills with creative problem-solving to address real-world challenges. The event featured expert workshops, keynote speakers, and a competitive hackathon environment where participants competed for substantial prizes while making meaningful impact.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Participate?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-emerald-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">💰 Free DataCamp Subscription</h3>
              <p className="text-gray-700">All participants received complimentary access to premium learning resources.</p>
            </div>
            <div className="p-6 border-2 border-teal-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🏆 Compete for Prizes</h3>
              <p className="text-gray-700">Total prize pool of 20,000 EGP awarded to winning teams.</p>
            </div>
            <div className="p-6 border-2 border-emerald-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🌍 Make Global Impact</h3>
              <p className="text-gray-700">Tackle pressing issues with innovative tech solutions aligned with SDG goals.</p>
            </div>
            <div className="p-6 border-2 border-teal-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🤝 Network & Collaborate</h3>
              <p className="text-gray-700">Connect with like-minded innovators, mentors, and industry professionals.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Timeline</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white border-l-4 border-emerald-500 rounded">
              <h3 className="font-bold text-gray-900 mb-1">📍 Opening Day</h3>
              <p className="text-gray-700">Saturday, May 10, 2025</p>
              <p className="text-sm text-gray-600 mt-1">Keynote speakers and workshops from MathWorks and Orange Digital Center</p>
            </div>
            <div className="p-4 bg-white border-l-4 border-teal-500 rounded">
              <h3 className="font-bold text-gray-900 mb-1">⚡ Hackathon Period</h3>
              <p className="text-gray-700">Saturday, May 15 – Thursday, May 17, 2025</p>
              <p className="text-sm text-gray-600 mt-1">Intensive development and collaboration period</p>
            </div>
            <div className="p-4 bg-white border-l-4 border-emerald-500 rounded">
              <h3 className="font-bold text-gray-900 mb-1">🎉 Ending Ceremony</h3>
              <p className="text-gray-700">Saturday, May 17, 2025</p>
              <p className="text-sm text-gray-600 mt-1">Final presentations, judging, and awards ceremony</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Partners & Speakers</h2>
          <div className="space-y-4">
            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-lg">
              <h3 className="font-bold text-gray-900">Ministry of Youth & Sports</h3>
              <p className="text-gray-700">Co-organizing collaborative partner</p>
            </div>
            <div className="p-5 bg-teal-50 border border-teal-200 rounded-lg">
              <h3 className="font-bold text-gray-900">MathWorks</h3>
              <p className="text-gray-700">Featured workshop and technical expertise</p>
            </div>
            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-lg">
              <h3 className="font-bold text-gray-900">Orange Digital Center</h3>
              <p className="text-gray-700">Featured workshop and innovation guidance</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-emerald-200 rounded-lg bg-emerald-50">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">📍 Location</h3>
              <p className="text-gray-700">
                Egypt University of Informatics<br />
                New Administrative Capital, Al-Jizah, Cairo, Egypt
              </p>
            </div>
            <div className="p-6 border-2 border-teal-200 rounded-lg bg-teal-50">
              <h3 className="text-xl font-bold text-teal-800 mb-2">⏰ Schedule</h3>
              <p className="text-gray-700">
                Start: May 10, 2025 at 10:00 AM EEST<br />
                End: May 17, 2025 at 06:00 PM EEST
              </p>
            </div>
            <div className="p-6 border-2 border-emerald-200 rounded-lg bg-emerald-50">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">👥 Hosts</h3>
              <p className="text-gray-700">IEEE EUI SB (STB60211912)</p>
            </div>
            <div className="p-6 border-2 border-teal-200 rounded-lg bg-teal-50">
              <h3 className="text-xl font-bold text-teal-800 mb-2">📝 Registration</h3>
              <p className="text-gray-700">External registration link available. Details via IEEE EUI SB channels.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            SolveThe17 brought together talent, innovation, and collaboration across the Egyptian tech ecosystem. Participants tackled real-world challenges with cutting-edge solutions while benefiting from expert mentorship, industry partnerships, and the opportunity to make meaningful impact. The hackathon reinforced IEEE EUI SB's commitment to fostering innovation and empowering the next generation of problem-solvers.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">#collaboration</span>
            <span className="px-3 py-1 bg-teal-200 text-teal-900 rounded-full text-sm font-semibold">#informatics</span>
            <span className="px-3 py-1 bg-cyan-200 text-cyan-900 rounded-full text-sm font-semibold">#eui</span>
            <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">#ieee_eui_sb</span>
            <span className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-sm font-semibold">#technical</span>
            <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full text-sm font-semibold">#hackathon</span>
          </div>
        </section>
      </div>
    </div>
  );
}
