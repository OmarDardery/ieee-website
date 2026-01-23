import Image from "next/image";

export default function CybersecurityCommitteeKickoffSession() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-6 inline-block">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Event Concluded
          </span>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl shadow-lg border border-red-100">
          <div className="relative aspect-auto bg-gray-200" suppressHydrationWarning>
            <Image
              src="/ieee-eui-cybersecurity-committee-kickoff.jpg"
              alt="IEEE EUI Computer Society Cybersecurity Committee Kickoff banner"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        </div>

        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-slate-700 bg-clip-text text-transparent">
            IEEE EUI Computer Society Cybersecurity Committee Kickoff Session
          </h1>
          <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>November 30 – December 8, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👥</span>
              <span>IEEE Computer Society Cybersecurity Committee</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚀</span>
              <span>Term Kickoff</span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Launching the Cybersecurity Committee with a comprehensive introduction to hacking, defense, and CTFs, equipping students with foundational knowledge and a clear learning roadmap.
          </p>
        </header>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Session Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The kickoff session launched the Cybersecurity Committee's term-long journey into cybersecurity fundamentals. Attendees gained clarity on core concepts, career opportunities, and practical pathways to join cybersecurity challenges like Capture The Flag (CTF) competitions.
          </p>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Topics Covered</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-red-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🛡️ Introduction to Cybersecurity</h3>
              <p className="text-gray-700">Foundational concepts, threat landscapes, and the role of cybersecurity in modern organizations.</p>
            </div>
            <div className="p-6 border-2 border-orange-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🔐 CIA Triad</h3>
              <p className="text-gray-700">Confidentiality, Integrity, and Availability—the core pillars of information security.</p>
            </div>
            <div className="p-6 border-2 border-yellow-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">💼 Cybersecurity Domains & Job Profiles</h3>
              <p className="text-gray-700">Career paths including ethical hacking, security analysis, compliance, and threat intelligence.</p>
            </div>
            <div className="p-6 border-2 border-emerald-100 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-2">🎯 CTFs & Getting Started</h3>
              <p className="text-gray-700">What Capture The Flag competitions are and how to begin participating and competing.</p>
            </div>
            <div className="p-6 border-2 border-blue-100 rounded-lg md:col-span-2">
              <h3 className="font-bold text-lg text-gray-900 mb-2">📚 Roadmap, Resources & Learning Platforms</h3>
              <p className="text-gray-700">Recommended learning path, free tools, platforms like MaharaTech, and resources for self-paced progress.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-gradient-to-r from-red-50 to-slate-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Learning Path</h2>
          <div className="space-y-4">
            <div className="p-5 bg-white border-l-4 border-red-500 rounded">
              <h3 className="font-bold text-gray-900 mb-1">🎓 Foundational Knowledge</h3>
              <p className="text-gray-700">Build strong understanding of security principles, threats, and defensive strategies.</p>
            </div>
            <div className="p-5 bg-white border-l-4 border-orange-500 rounded">
              <h3 className="font-bold text-gray-900 mb-1">🔍 Practical Skills</h3>
              <p className="text-gray-700">Hands-on labs and tools to apply security concepts in controlled environments.</p>
            </div>
            <div className="p-5 bg-white border-l-4 border-yellow-500 rounded">
              <h3 className="font-bold text-gray-900 mb-1">⚔️ CTF Participation</h3>
              <p className="text-gray-700">Compete in capture-the-flag challenges to test knowledge and solve real security problems.</p>
            </div>
            <div className="p-5 bg-white border-l-4 border-emerald-500 rounded">
              <h3 className="font-bold text-gray-900 mb-1">📈 Advanced Topics</h3>
              <p className="text-gray-700">Progress to specialized domains like penetration testing, malware analysis, and threat hunting.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Tasks & Next Steps</h2>
          <div className="p-6 border-2 border-red-200 rounded-lg bg-red-50">
            <h3 className="text-xl font-bold text-red-800 mb-4">📋 Assigned for Next Session</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">→</span>
                <span>Complete MaharaTech cybersecurity modules to reinforce foundational concepts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">→</span>
                <span>Set up cybersecurity lab environment with recommended tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">→</span>
                <span>Join and explore at least one beginner CTF platform</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">→</span>
                <span>Prepare questions and topics for deeper discussion next session</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-red-200 rounded-lg bg-red-50">
              <h3 className="text-xl font-bold text-red-800 mb-2">📍 Location</h3>
              <p className="text-gray-700">Egypt University of Informatics</p>
            </div>
            <div className="p-6 border-2 border-slate-200 rounded-lg bg-slate-50">
              <h3 className="text-xl font-bold text-slate-800 mb-2">⏰ Schedule</h3>
              <p className="text-gray-700">November 30 – December 8, 2025</p>
            </div>
            <div className="p-6 border-2 border-orange-200 rounded-lg bg-orange-50">
              <h3 className="text-xl font-bold text-orange-800 mb-2">👥 Hosts</h3>
              <p className="text-gray-700">IEEE Computer Society SBC (SBC60211912) & STB60211912</p>
            </div>
            <div className="p-6 border-2 border-yellow-200 rounded-lg bg-yellow-50">
              <h3 className="text-xl font-bold text-yellow-800 mb-2">📝 Registration</h3>
              <p className="text-gray-700">Announcements via IEEE EUI channels. Admission-free.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-100 to-slate-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Event Recap</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Cybersecurity Committee kickoff energized attendees with a clear vision of what cybersecurity entails—from foundational theory to cutting-edge practice. Through the CIA Triad framework, career insights, and practical CTF guidance, participants left equipped with a roadmap and resources to launch their cybersecurity journey. The assigned MaharaTech modules and lab setup ensure momentum heading into the committee's next phase.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm font-semibold">#cybersecurity</span>
            <span className="px-3 py-1 bg-orange-200 text-orange-900 rounded-full text-sm font-semibold">#hacking</span>
            <span className="px-3 py-1 bg-yellow-200 text-yellow-900 rounded-full text-sm font-semibold">#ctf</span>
            <span className="px-3 py-1 bg-emerald-200 text-emerald-900 rounded-full text-sm font-semibold">#defense</span>
            <span className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-sm font-semibold">#computer-society</span>
          </div>
        </section>
      </div>
    </div>
  );
}
