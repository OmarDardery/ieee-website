import Image from "next/image";

export default function HowToPrepareForNextWaveOfChangePage() {
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
                src="/eng-abo-el-ezz-profile.png"
                alt="Eng. Abo El-Ezz"
                width={300}
                height={300}
                className="rounded-2xl border border-blue-100 shadow-md object-cover"
              />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 mb-3">
                  IEEE EUI
                </p>
                <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  How to Prepare for the Next Wave of Change
                </h1>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">📅 Date:</span>
                  <span>Monday, 15 May 2023</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">🕐 Time:</span>
                  <span>11:30 AM - 1:30 PM</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">📍 Location:</span>
                  <span>Egypt University of Informatics - EUI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speaker Bio */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Speaker</h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-semibold text-blue-700">Eng. Abo El-Ezz</h3>
            
            <p>
              Eng. Abo El-Ezz is an experienced professional specializing in innovation management, organizational change, and strategic development. With extensive expertise in guiding organizations through transformative periods, he brings practical insights into how companies can navigate and thrive during periods of rapid change.
            </p>

            <p>
              His experience spans across multiple industries, helping teams understand the dynamics of innovation and equipping them with the tools and mindset necessary to succeed in today's competitive landscape.
            </p>
          </div>
        </section>

        {/* About the Talk */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Talk</h2>
          <p className="text-gray-700">
            In today's rapidly changing world, innovation is more important than ever before. Companies that could innovate quickly and effectively were the ones that succeeded in the long run.
          </p>
          <p className="text-gray-700 mt-3">
            During this talk, Eng. Abo El-Ezz discussed <strong>innovation management</strong>—the process of creating and implementing new ideas that create value for organizations. He covered several different skills essential for success, including creativity, problem-solving, and risk-taking.
          </p>
          <p className="text-gray-700 mt-3">
            Attendees gained practical insights into preparing for the next wave of change and positioning themselves and their organizations for continued success in an ever-evolving landscape.
          </p>
        </section>

        {/* Key Topics */}
        <section className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Innovation Management",
              description: "Explored the process of creating and implementing new ideas that create organizational value.",
            },
            {
              title: "Creativity & Problem-Solving",
              description: "Learned essential skills for identifying opportunities and developing innovative solutions.",
            },
            {
              title: "Risk Management",
              description: "Understood how to assess and navigate risks in the innovation process.",
            },
            {
              title: "Organizational Adaptation",
              description: "Gained insights into how organizations can prepare for and embrace change.",
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

        {/* Social Media Section */}
        <section className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Connected</h3>
          <p className="text-gray-700 mb-4">
            This event was also featured on our social media channels. Follow us to stay updated with the latest IEEE EUI events and announcements:
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
            Thank you to all attendees who joined us on <strong>Monday, 15 May 2023</strong> to learn from Eng. Abo El-Ezz about preparing for the next wave of change and innovation management strategies.
          </p>
          <p className="text-sm text-gray-600">
            We appreciated Eng. Abo El-Ezz's valuable insights and expertise. Stay tuned for more inspiring talks and workshops from the IEEE EUI community!
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
