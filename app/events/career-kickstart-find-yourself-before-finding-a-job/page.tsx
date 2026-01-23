import Image from "next/image";

export default function CareerKickstartFindYourselfBeforeFindingAJob() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-6 inline-block">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Event Concluded
          </span>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg border border-rose-100">
          <div className="relative aspect-[16/7] bg-gray-200" suppressHydrationWarning>
            <Image
              src="/career-kickstart-find-yourself.jpg"
              alt="Career Kickstart talk by Amany Helmy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        </div>

        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
            Career Kickstart "Find Yourself Before Finding a Job"
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>February 25, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>01:00 PM – 02:00 PM EET</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>EUI Auditorium, Knowledge City, New Administrative Capital</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            IEEE WIE hosted Amany Helmy for a career development session on self-discovery, CV and interview excellence, and how AI is reshaping the job market.
          </p>
        </header>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Session Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The interactive talk guided students through understanding their strengths, passions, and goals before choosing career paths. Amany Helmy shared practical tips on crafting standout resumes, mastering interviews, and leveraging AI tools to navigate evolving job landscapes with confidence.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-rose-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🔍 Self-Discovery First</h3>
              <p className="text-gray-700">Mapping strengths, values, and interests to intentional career choices.</p>
            </div>
            <div className="p-6 border-2 border-amber-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">📄 CV & Interview Tips</h3>
              <p className="text-gray-700">Structuring impact-driven resumes and interviewing with clarity and confidence.</p>
            </div>
            <div className="p-6 border-2 border-orange-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🤖 AI for Career Growth</h3>
              <p className="text-gray-700">Using AI to research roles, tailor applications, and prepare for interviews.</p>
            </div>
            <div className="p-6 border-2 border-emerald-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🎯 Actionable Roadmaps</h3>
              <p className="text-gray-700">Setting short-term milestones and feedback loops to stay on track.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Speaker</h2>
          <div className="space-y-3 text-gray-700">
            <p className="text-lg font-semibold text-rose-700">Amany Helmy</p>
            <p>Career coach and speaker focusing on self-discovery, employability skills, and the role of AI in modern hiring.</p>
            <p>Engaged students with Q&A and practical examples to help them prepare for the job market.</p>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-rose-200 rounded-lg bg-rose-50">
              <h3 className="text-xl font-bold text-rose-800 mb-2">📍 Location</h3>
              <p className="text-gray-700">
                Egypt University of Informatics, Knowledge City<br />
                New Administrative Capital, Al-Qahirah, Egypt<br />
                Auditorium
              </p>
            </div>
            <div className="p-6 border-2 border-amber-200 rounded-lg bg-amber-50">
              <h3 className="text-xl font-bold text-amber-800 mb-2">⏰ Schedule</h3>
              <p className="text-gray-700">February 25, 2025 · 01:00 PM – 02:00 PM EET</p>
            </div>
            <div className="p-6 border-2 border-emerald-200 rounded-lg bg-emerald-50">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">👥 Hosts</h3>
              <p className="text-gray-700">IEEE WIE EUI SB</p>
            </div>
            <div className="p-6 border-2 border-indigo-200 rounded-lg bg-indigo-50">
              <h3 className="text-xl font-bold text-indigo-800 mb-2">📝 Registration</h3>
              <p className="text-gray-700">Announcements and registration shared via IEEE EUI SB channels. Admission-free.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-rose-100 to-amber-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Career Kickstart session empowered students to align personal strengths with career choices, sharpen their applications, and harness AI for job readiness. Interactive discussion and Q&A left attendees better equipped to pursue opportunities with clarity and confidence.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-rose-200 text-rose-900 rounded-full text-sm font-semibold">#WIE</span>
            <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">#eui</span>
            <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full text-sm font-semibold">#ieee_eui_sb</span>
            <span className="px-3 py-1 bg-purple-200 text-purple-900 rounded-full text-sm font-semibold">#talk</span>
          </div>
        </section>
      </div>
    </div>
  );
}
