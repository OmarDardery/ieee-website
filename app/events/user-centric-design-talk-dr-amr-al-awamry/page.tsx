import Image from "next/image";

export default function DrAmrTalkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white px-4 py-12 text-gray-900 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        {/* Header Section */}
        <section className="rounded-3xl border border-blue-100 bg-white/80 p-6 shadow-lg shadow-blue-100/40 backdrop-blur sm:p-8 relative">
          <div className="absolute top-4 right-4 rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
            Event Concluded
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/dr-amr-profile.jpg"
                alt="Dr. Amr Al-Awamry"
                width={300}
                height={300}
                className="rounded-2xl border border-blue-100 shadow-md object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 mb-3">
                  IEEE EUI Computer Society
                </p>
                <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  User-Centric Design
                </h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">📅 Date:</span>
                  <span>Monday, 8 May 2023</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">🕐 Time:</span>
                  <span>11:30 AM - 1:30 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">📍 Location:</span>
                  <span>Auditorium</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speaker Bio */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Speaker</h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-semibold text-blue-700">Dr. Amr Al-Awamry</h3>
            
            <p>
              Dr. Amr Al-Awamry is the <strong>Executive Manager of Benha University Biotechnology Incubator</strong>. He brings extensive expertise in innovation management, entrepreneurship, and design thinking to his role.
            </p>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Certifications & Affiliations:</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Certified Mentor by Mowgli</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Certified Ideation Camp Trainer from Intel and TIEC (Technology Innovation and Entrepreneurship Center)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Certified Enterprise Design Thinking Practitioner by IBM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Assistant Professor at the Faculty of Engineering, Benha University</span>
                </li>
              </ul>
            </div>

            <p>
              With a long track record in providing training in innovation management and entrepreneurship, Dr. Amr has become a thought leader in the field.
            </p>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Education:</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Ph.D.</strong> in Electrical Engineering – St. Petersburg Electrotechnical University, Russia (2012)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>M.Sc.</strong> in Communications – Benha Faculty of Engineering, Egypt (2005)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>B.Sc.</strong> in Communication Engineering – Benha Faculty of Engineering, Egypt (1999)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* About the Talk */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Talk</h2>
          <p className="text-gray-700">
            In this talk, Dr. Amr Al-Awamry shared insights on <strong>User-Centric Design</strong>, a fundamental approach to building products and solutions that truly meet user needs. Drawing from his expertise in design thinking and innovation management, Dr. Amr covered practical methodologies and real-world examples of how user-centric approaches drive successful innovation.
          </p>
          <p className="text-gray-700 mt-3">
            This was an excellent opportunity for students interested in design, entrepreneurship, product development, and innovation to learn from an industry expert and mentor.
          </p>
        </section>

        {/* Key Takeaways */}
        <section className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Design Thinking Principles",
              description: "Learned the core principles of human-centered design and how to apply them to real-world problems.",
            },
            {
              title: "Innovation Management",
              description: "Understood how to manage innovation projects from ideation through commercialization.",
            },
            {
              title: "Entrepreneurship Insights",
              description: "Gained practical insights into building and scaling ventures with a user-first mindset.",
            },
            {
              title: "Industry Experience",
              description: "Heard real-world examples and case studies from Dr. Amr's extensive experience.",
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

        {/* CTA Section */}
        <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Event Recap</h3>
          <p className="text-gray-700 mb-4">
            Thank you to all attendees who joined us on <strong>Monday, 8 May 2023</strong> in the <strong>Auditorium</strong> to learn from Dr. Amr Al-Awamry about user-centric design and innovation.
          </p>
          <p className="text-sm text-gray-600">
            We appreciate Dr. Amr's time and insights. Stay tuned for more events and talks from the IEEE EUI Computer Society!
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
