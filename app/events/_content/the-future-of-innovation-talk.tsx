import Image from "next/image";
import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "the-future-of-innovation-talk",
  title: "How to Prepare for the Next Wave of Change",
  description: "A talk discussing the future of innovation in technology.",
  startDate: new Date("2023-05-15T00:00:00"),
  endDate: new Date("2023-11-04T00:00:00"),
  postedDate: new Date("2023-05-01T00:00:00"),
  societyCodes: ["STB60211912"],
  theme: {
    page: "bg-gradient-to-b from-blue-50 via-white to-white",
  },
  meta: [
    { icon: "📅", text: "Monday, 15 May 2023" },
    { icon: "🕐", text: "11:30 AM - 1:30 PM" },
    { icon: "📍", text: "Egypt University of Informatics - EUI" },
  ],
  intro:
    "Eng. Abo El-Ezz discussed innovation management—the process of creating and implementing new ideas that create value for organizations.",
  content: (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <Image
          src="/eng-abo-el-ezz-profile.png"
          alt="Eng. Abo El-Ezz"
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
            Eng. Abo El-Ezz
          </h3>

          <p>
            Eng. Abo El-Ezz is an experienced professional specializing in
            innovation management, organizational change, and strategic
            development. With extensive expertise in guiding organizations
            through transformative periods, he brings practical insights into
            how companies can navigate and thrive during periods of rapid
            change.
          </p>

          <p>
            His experience spans across multiple industries, helping teams
            understand the dynamics of innovation and equipping them with the
            tools and mindset necessary to succeed in today&apos;s competitive
            landscape.
          </p>
        </div>
      </section>

      {/* About the Talk */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About This Talk
        </h2>
        <p className="text-gray-700">
          In today&apos;s rapidly changing world, innovation is more important
          than ever before. Companies that could innovate quickly and
          effectively were the ones that succeeded in the long run.
        </p>
        <p className="text-gray-700 mt-3">
          During this talk, Eng. Abo El-Ezz discussed{" "}
          <strong>innovation management</strong>—the process of creating and
          implementing new ideas that create value for organizations. He
          covered several different skills essential for success, including
          creativity, problem-solving, and risk-taking.
        </p>
        <p className="text-gray-700 mt-3">
          Attendees gained practical insights into preparing for the next wave
          of change and positioning themselves and their organizations for
          continued success in an ever-evolving landscape.
        </p>
      </section>

      {/* Key Topics */}
      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Innovation Management",
            description:
              "Explored the process of creating and implementing new ideas that create organizational value.",
          },
          {
            title: "Creativity & Problem-Solving",
            description:
              "Learned essential skills for identifying opportunities and developing innovative solutions.",
          },
          {
            title: "Risk Management",
            description:
              "Understood how to assess and navigate risks in the innovation process.",
          },
          {
            title: "Organizational Adaptation",
            description:
              "Gained insights into how organizations can prepare for and embrace change.",
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

      {/* Social Media Section */}
      <section className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Stay Connected
        </h3>
        <p className="text-gray-700 mb-4">
          This event was also featured on our social media channels. Follow us
          to stay updated with the latest IEEE EUI events and announcements:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-600 font-bold">•</span>
            <span>
              <strong>Facebook:</strong> IEEE EUI Official Page
            </span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-600 font-bold">•</span>
            <span>
              <strong>LinkedIn:</strong> IEEE EUI Professional Community
            </span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-blue-600 font-bold">•</span>
            <span>
              <strong>Instagram:</strong> IEEE EUI Student Updates
            </span>
          </li>
        </ul>
      </section>

      {/* Event Recap Section */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Event Recap</h3>
        <p className="text-gray-700 mb-4">
          Thank you to all attendees who joined us on{" "}
          <strong>Monday, 15 May 2023</strong> to learn from Eng. Abo El-Ezz
          about preparing for the next wave of change and innovation management
          strategies.
        </p>
        <p className="text-sm text-gray-600">
          We appreciated Eng. Abo El-Ezz&apos;s valuable insights and
          expertise. Stay tuned for more inspiring talks and workshops from the
          IEEE EUI community!
        </p>
      </section>
    </div>
  ),
};
