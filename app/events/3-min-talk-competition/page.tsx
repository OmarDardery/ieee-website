import Image from "next/image";

export default function ThreeMinTalkCompetitionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-4 py-12 text-gray-900 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        {/* Header Section */}
        <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg shadow-blue-100/40 backdrop-blur sm:p-8 relative">
          <div className="absolute top-4 right-4 rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
            Event Concluded
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-1 space-y-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 mb-3">
                  IEEE EUI Student Branch
                </p>
                <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  3-MIN Talk Competition
                </h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">📅 Date:</span>
                  <span>Tuesday, 16 May 2023</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">🕐 Time:</span>
                  <span>1:00 PM - 2:00 PM EEST</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">📍 Location:</span>
                  <span>EUI Library, New Administrative Capital</span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/3-min-talk-competition.png"
                alt="3-MIN Talk Competition"
                width={800}
                height={500}
                className="rounded-2xl border border-blue-100 shadow-md object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* About the Event */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Competition</h2>
          <p className="text-gray-700">
            IEEE EUI Student Branch created a 3-minute talk competition for all students at Egypt University of Informatics from all four faculties: <strong>Engineering</strong>, <strong>Computing and Information Sciences</strong>, <strong>Digital Arts and Design</strong>, and <strong>Business Informatics</strong>.
          </p>
          <p className="text-gray-700 mt-3">
            This competition provided students with an opportunity to showcase their presentation skills, share innovative ideas, and compete in a supportive academic environment. The event brought together students, faculty members, and judges for an afternoon of inspiring talks and friendly competition.
          </p>
        </section>

        {/* Judges Panel */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Distinguished Judges Panel</h2>
          <p className="text-gray-700 mb-4">
            We invited four distinguished judges from our university's faculty:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <div>
                <strong className="text-gray-900">Dr. Mohammed Ismail</strong>
                <span className="text-gray-700"> - Faculty of Engineering (Branch Counselor)</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <div>
                <strong className="text-gray-900">Dr. Basma Hassan</strong>
                <span className="text-gray-700"> - Faculty of Computing and Information Sciences</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <div>
                <strong className="text-gray-900">Dr. Nihal Afifi</strong>
                <span className="text-gray-700"> - Faculty of Business Informatics</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold text-xl">•</span>
              <div>
                <strong className="text-gray-900">Dr. Fatma Hamdy</strong>
                <span className="text-gray-700"> - Faculty of Digital Arts and Design</span>
              </div>
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Special thanks to <strong>Dr. Mohammed Ismail</strong> (our Branch Counselor) who helped immensely in organizing this event, along with IEEE EUI student members and the EUI Student Life Office for providing space on campus and marketing support.
          </p>
        </section>

        {/* Winners Section */}
        <section className="rounded-2xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🏆 Competition Winners</h2>
          
          <div className="space-y-4">
            <div className="rounded-xl border border-amber-200 bg-white p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🥇</span>
                <h3 className="text-xl font-bold text-amber-700">1st Place</h3>
              </div>
              <p className="text-gray-900 font-semibold text-lg">Sawsan Rany</p>
              <p className="text-gray-700">Faculty of Digital Arts and Design</p>
              <p className="text-gray-600 mt-2 italic">Presentation on Climate Action - left a lasting impact</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🥈</span>
                <h3 className="text-xl font-bold text-gray-700">2nd Place</h3>
              </div>
              <p className="text-gray-900 font-semibold text-lg">Myron Milad <span className="text-blue-600 text-sm">(IEEE EUI Member)</span></p>
              <p className="text-gray-700">Faculty of Engineering</p>
              <p className="text-gray-600 mt-2 italic">"Visualizing Success: How Computer Vision is Driving Innovation and Growth"</p>
            </div>

            <div className="rounded-xl border border-orange-200 bg-white p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🥉</span>
                <h3 className="text-xl font-bold text-orange-700">3rd Place</h3>
              </div>
              <p className="text-gray-900 font-semibold text-lg">Fatma Al-Agroudy <span className="text-blue-600 text-sm">(IEEE EUI Member)</span></p>
              <p className="text-gray-700">Faculty of Engineering</p>
              <p className="text-gray-600 mt-2 italic">Presentation on Biomedical Engineering</p>
            </div>
          </div>
        </section>

        {/* Event Highlights */}
        <section className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Cross-Faculty Participation",
              description: "Students from all four faculties attended, presenting diverse topics and supporting their peers.",
            },
            {
              title: "Faculty Support",
              description: "Dr. Amr El-Masry, Dean of the Faculty of Engineering, attended and showed his support and gratitude.",
            },
            {
              title: "Professional Photography",
              description: "Event captured by Seif Wafik, an IEEE EUI SB member from the Faculty of Computing and Information Sciences.",
            },
            {
              title: "Community Building",
              description: "The event fostered collaboration and networking among students, faculty, and organizers.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </section>

        {/* Acknowledgments */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Special Thanks</h3>
          <p className="text-gray-700 mb-4">
            This event's success was made possible by the collaborative efforts of:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Dr. Mohammed Ismail</strong> - Branch Counselor and event organizer</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>IEEE EUI Student Members</strong> - Organizing committee</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>EUI Student Life Office</strong> - Campus space and marketing support</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Dr. Amr El-Masry</strong> - Dean of Faculty of Engineering for his support</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Seif Wafik</strong> - Official event photographer</span>
            </li>
          </ul>
        </section>

        {/* Social Media Section */}
        <section className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Connected</h3>
          <p className="text-gray-700 mb-4">
            This event was featured on our social media channels with additional photos and highlights:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Facebook:</strong> IEEE EUI Official Page</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>LinkedIn:</strong> IEEE EUI Professional Community</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-600 font-bold">•</span>
              <span><strong>Instagram:</strong> IEEE EUI Student Updates</span>
            </li>
          </ul>
        </section>

        {/* Event Recap Section */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Event Recap</h3>
          <p className="text-gray-700 mb-4">
            Thank you to all participants, attendees, judges, and organizers who made the <strong>3-MIN Talk Competition</strong> on <strong>16 May 2023</strong> a tremendous success. The event showcased the incredible talent and diverse perspectives of EUI students across all faculties.
          </p>
          <p className="text-sm text-gray-600">
            Congratulations to all winners and participants! Stay tuned for more exciting competitions and events from IEEE EUI Student Branch.
          </p>
        </section>

        {/* Back Link */}
        <div className="pt-4">
          <a
            href="/events"
            className="text-blue-600 font-semibold hover:text-blue-800 transition flex items-center gap-2"
          >
            ← Back to all events
          </a>
        </div>
      </div>
    </main>
  );
}
