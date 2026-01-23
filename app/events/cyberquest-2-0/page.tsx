export default function CyberQuest2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-6 inline-block">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Event Concluded
          </span>
        </div>

        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-cyan-600 bg-clip-text text-transparent">
            CyberQuest 2.0
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>Nov 30, 2024 – Mar 20, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>Starts 10:00 AM EET · Ends 3:30 PM EET</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Egypt University of Informatics, New Administrative Capital</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            CyberQuest 2.0 brought together industry professionals, students, and cybersecurity enthusiasts for expert-led sessions on awareness, penetration testing, SOC analysis, and GRC—plus an interactive trivia competition.
          </p>
        </header>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The series focused on practical cybersecurity skills and foundational knowledge. Attendees explored threat landscapes, hands-on offensive and defensive techniques, and governance frameworks that underpin secure organizations.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Program Tracks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-slate-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🛡️ Cybersecurity Awareness</h3>
              <p className="text-gray-700">Building security-first habits, social engineering defense, and incident readiness.</p>
            </div>
            <div className="p-6 border-2 border-cyan-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🗡️ Penetration Testing</h3>
              <p className="text-gray-700">Reconnaissance, exploitation basics, and ethical testing methodologies.</p>
            </div>
            <div className="p-6 border-2 border-emerald-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">📊 SOC Analysis</h3>
              <p className="text-gray-700">Log analysis, alert triage, and detection engineering fundamentals.</p>
            </div>
            <div className="p-6 border-2 border-indigo-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">📜 GRC</h3>
              <p className="text-gray-700">Governance, Risk, and Compliance essentials for secure, auditable operations.</p>
            </div>
            <div className="p-6 border-2 border-amber-100 rounded-lg md:col-span-2">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🎯 Trivia Competition</h3>
              <p className="text-gray-700">Interactive challenge reinforcing concepts across all tracks.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-r from-slate-50 to-cyan-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Speakers & Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white border border-slate-100 rounded-lg">
              <h3 className="font-bold text-gray-900">Youssef</h3>
              <p className="text-gray-700">Introduction to Cybersecurity</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-lg">
              <h3 className="font-bold text-gray-900">Hossam</h3>
              <p className="text-gray-700">Cybersecurity Awareness</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-lg">
              <h3 className="font-bold text-gray-900">Mahmoud</h3>
              <p className="text-gray-700">Sponsors Pitch</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-lg">
              <h3 className="font-bold text-gray-900">Omar</h3>
              <p className="text-gray-700">Introduction to Penetration Testing</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-lg">
              <h3 className="font-bold text-gray-900">Khaled</h3>
              <p className="text-gray-700">Introduction to SOC Analysis</p>
            </div>
            <div className="p-5 bg-white border border-slate-100 rounded-lg">
              <h3 className="font-bold text-gray-900">Topic Lead</h3>
              <p className="text-gray-700">Introduction to GRC (Governance, Risk, and Compliance)</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-slate-200 rounded-lg bg-slate-50">
              <h3 className="text-xl font-bold text-slate-800 mb-2">📍 Location</h3>
              <p className="text-gray-700">Egypt University of Informatics<br />New Administrative Capital, Al-Qahirah, Egypt</p>
            </div>
            <div className="p-6 border-2 border-cyan-200 rounded-lg bg-cyan-50">
              <h3 className="text-xl font-bold text-cyan-800 mb-2">⏰ Schedule</h3>
              <p className="text-gray-700">
                Start: Nov 30, 2024 at 10:00 AM EET<br />
                End: Mar 20, 2025 at 03:30 PM EET
              </p>
            </div>
            <div className="p-6 border-2 border-emerald-200 rounded-lg bg-emerald-50">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">👥 Hosts</h3>
              <p className="text-gray-700">Egypt University of Informatics</p>
            </div>
            <div className="p-6 border-2 border-indigo-200 rounded-lg bg-indigo-50">
              <h3 className="text-xl font-bold text-indigo-800 mb-2">📝 Registration</h3>
              <p className="text-gray-700">Event announcements and registration were shared via EUI channels. Admission-free.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-100 to-cyan-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            CyberQuest 2.0 delivered end-to-end coverage of modern cybersecurity practice—from awareness to offensive testing, SOC operations, and governance. Interactive trivia and applied sessions kept participants engaged while reinforcing key concepts for both newcomers and practitioners.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-slate-200 text-slate-900 rounded-full text-sm font-semibold">#eui</span>
            <span className="px-3 py-1 bg-cyan-200 text-cyan-900 rounded-full text-sm font-semibold">#ieee_eui_sb</span>
            <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">#CyberSecurity</span>
            <span className="px-3 py-1 bg-indigo-200 text-indigo-900 rounded-full text-sm font-semibold">#SOC</span>
            <span className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-semibold">#Cybersecurityawareness</span>
            <span className="px-3 py-1 bg-gray-200 text-gray-900 rounded-full text-sm font-semibold">#talk</span>
          </div>
        </section>
      </div>
    </div>
  );
}
