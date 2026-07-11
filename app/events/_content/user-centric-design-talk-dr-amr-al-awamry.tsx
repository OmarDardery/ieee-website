import Image from "next/image";
import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "user-centric-design-talk-dr-amr-al-awamry",
  title: "User-Centric Design",
  description: "A talk on user-centric design principles and practices.",
  startDate: new Date("2023-05-08T00:00:00"),
  endDate: new Date("2023-08-21T00:00:00"),
  postedDate: new Date("2023-05-01T00:00:00"),
  societyCodes: ["STB60211912"],
  theme: {
    page: "bg-gradient-to-b from-blue-50 via-white to-white",
  },
  meta: [
    { icon: "📅", text: "Monday, 8 May 2023" },
    { icon: "🕐", text: "11:30 AM - 1:30 PM" },
    { icon: "📍", text: "Auditorium" },
  ],
  intro:
    "Dr. Amr Al-Awamry shared insights on User-Centric Design, a fundamental approach to building products and solutions that truly meet user needs.",
  content: (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <Image
          src="/dr-amr-profile.jpg"
          alt="Dr. Amr Al-Awamry"
          width={300}
          height={300}
          className="rounded-2xl border border-blue-100 shadow-md object-cover"
        />
      </div>

      {/* Speaker Bio */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About the Speaker
        </h2>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold text-blue-700">
            Dr. Amr Al-Awamry
          </h3>

          <p>
            Dr. Amr Al-Awamry is the{" "}
            <strong>
              Executive Manager of Benha University Biotechnology Incubator
            </strong>
            . He brings extensive expertise in innovation management,
            entrepreneurship, and design thinking to his role.
          </p>

          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">
              Certifications & Affiliations:
            </h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Certified Mentor by Mowgli</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Certified Ideation Camp Trainer from Intel and TIEC
                  (Technology Innovation and Entrepreneurship Center)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Certified Enterprise Design Thinking Practitioner by IBM
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Assistant Professor at the Faculty of Engineering, Benha
                  University
                </span>
              </li>
            </ul>
          </div>

          <p>
            With a long track record in providing training in innovation
            management and entrepreneurship, Dr. Amr has become a thought
            leader in the field.
          </p>

          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900">Education:</h4>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>Ph.D.</strong> in Electrical Engineering – St.
                  Petersburg Electrotechnical University, Russia (2012)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>M.Sc.</strong> in Communications – Benha Faculty of
                  Engineering, Egypt (2005)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  <strong>B.Sc.</strong> in Communication Engineering – Benha
                  Faculty of Engineering, Egypt (1999)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About the Talk */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About This Talk
        </h2>
        <p className="text-gray-700">
          In this talk, Dr. Amr Al-Awamry shared insights on{" "}
          <strong>User-Centric Design</strong>, a fundamental approach to
          building products and solutions that truly meet user needs. Drawing
          from his expertise in design thinking and innovation management, Dr.
          Amr covered practical methodologies and real-world examples of how
          user-centric approaches drive successful innovation.
        </p>
        <p className="text-gray-700 mt-3">
          This was an excellent opportunity for students interested in design,
          entrepreneurship, product development, and innovation to learn from
          an industry expert and mentor.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Design Thinking Principles",
            description:
              "Learned the core principles of human-centered design and how to apply them to real-world problems.",
          },
          {
            title: "Innovation Management",
            description:
              "Understood how to manage innovation projects from ideation through commercialization.",
          },
          {
            title: "Entrepreneurship Insights",
            description:
              "Gained practical insights into building and scaling ventures with a user-first mindset.",
          },
          {
            title: "Industry Experience",
            description:
              "Heard real-world examples and case studies from Dr. Amr's extensive experience.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-blue-700">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Event Recap</h3>
        <p className="text-gray-700 mb-4">
          Thank you to all attendees who joined us on{" "}
          <strong>Monday, 8 May 2023</strong> in the <strong>Auditorium</strong>{" "}
          to learn from Dr. Amr Al-Awamry about user-centric design and
          innovation.
        </p>
        <p className="text-sm text-gray-600">
          We appreciate Dr. Amr&apos;s time and insights. Stay tuned for more
          events and talks from the IEEE EUI Computer Society!
        </p>
      </section>
    </div>
  ),
};
