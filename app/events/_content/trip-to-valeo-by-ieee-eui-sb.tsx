import Image from "next/image";
import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "trip-to-valeo-by-ieee-eui-sb",
  title: "Trip to Valeo by IEEE EUI SB",
  description:
    "Industrial field trip to Valeo for exposure to real-world engineering practices.",
  startDate: new Date("2024-02-20T00:00:00"),
  endDate: new Date("2024-02-29T00:00:00"),
  postedDate: new Date("2024-02-05T00:00:00"),
  societyCodes: ["STB60211912"],
  theme: {
    page: "bg-gradient-to-br from-red-50 via-white to-orange-50",
    heading: "from-red-600 to-orange-600",
  },
  meta: [
    { icon: "📅", text: "February 20, 2024" },
    { icon: "⏰", text: "10:00 AM - 4:00 PM EET" },
    { icon: "📍", text: "Valeo, Smart Village, Giza" },
  ],
  intro:
    "A Day@Valeo — IEEE EUI SB organized the field trip of the semester to Valeo Egypt for EUI students.",
  content: (
    <>
      <div className="mb-8 -mt-6">
        <Image
          src="/trip-to-valeo.jpg"
          alt="Trip to Valeo by IEEE EUI SB"
          width={800}
          height={400}
          className="rounded-xl shadow-2xl w-full object-cover"
        />
      </div>

      {/* Trip Overview */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Trip Overview
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            IEEE EUI SB organized this exceptional field trip to Valeo Egypt,
            one of the world&apos;s leading automotive suppliers and partners
            to all automakers worldwide. The trip was made possible through the
            facilitation of Egypt University of Informatics (EUI) and the
            dedicated support of{" "}
            <span className="font-semibold">Dr. Mohamed Ismail</span>, IEEE EUI
            SB Counselor.
          </p>
          <p>
            This immersive experience gave EUI students a unique opportunity to
            step into the professional world of automotive technology and
            innovation, connecting academic learning with real-world industry
            applications.
          </p>
        </div>
      </section>

      {/* What Students Experienced */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          What Students Experienced
        </h2>
        <div className="grid gap-6">
          <div className="border-l-4 border-red-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🏢 Work Environment Exposure
            </h3>
            <p className="text-gray-600">
              Students had the opportunity to see firsthand the work
              environment at Valeo Egypt, experiencing the dynamic atmosphere
              of a leading global automotive technology company.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              👥 Networking with Professionals
            </h3>
            <p className="text-gray-600">
              Participants met with talented professionals in the automotive
              technology field, building valuable connections and learning from
              experienced industry experts.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              📊 Departmental Information Sessions
            </h3>
            <p className="text-gray-600">
              Attended comprehensive information sessions about various
              departments within the company, gaining insights into different
              career paths and specializations at Valeo.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🚗 Automotive Innovation Showcase
            </h3>
            <p className="text-gray-600">
              Explored cutting-edge automotive technologies and innovations
              that Valeo develops for major automakers worldwide, from
              autonomous driving to electrification solutions.
            </p>
          </div>
        </div>
      </section>

      {/* About Valeo */}
      <section className="mb-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Valeo</h2>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Valeo is a global automotive supplier and partner to all automakers
            worldwide. As a technology company, Valeo proposes innovative
            products and systems that contribute to the reduction of CO₂
            emissions and to the development of intuitive driving.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">🌍</div>
              <p className="font-semibold text-gray-800">Global Presence</p>
              <p className="text-sm text-gray-600">
                Partner to all automakers
              </p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">💡</div>
              <p className="font-semibold text-gray-800">Innovation Leader</p>
              <p className="text-sm text-gray-600">Cutting-edge technology</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">🔋</div>
              <p className="font-semibold text-gray-800">
                Sustainable Mobility
              </p>
              <p className="text-sm text-gray-600">CO₂ reduction focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Details */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Trip Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border-2 border-red-200 rounded-lg bg-red-50">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              📍 Location
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Valeo Egypt</span>
            </p>
            <p className="text-gray-600">
              Smart Village
              <br />
              Al-Jizah, Egypt
            </p>
          </div>

          <div className="p-6 border-2 border-orange-200 rounded-lg bg-orange-50">
            <h3 className="text-xl font-bold text-orange-700 mb-3">
              🎓 Organizer
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">IEEE EUI SB</span>
            </p>
            <p className="text-gray-600">
              Facilitated by:
              <br />
              Egypt University of Informatics (EUI)
            </p>
          </div>

          <div className="p-6 border-2 border-yellow-200 rounded-lg bg-yellow-50">
            <h3 className="text-xl font-bold text-yellow-700 mb-3">
              ⏰ Schedule
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span> February 20, 2024
              <br />
              <span className="font-semibold">Time:</span> 10:00 AM - 4:00 PM
              EET
              <br />
              <span className="font-semibold">Duration:</span> Full-day field
              trip
            </p>
          </div>

          <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              👨‍🏫 Support
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Dr. Mohamed Ismail</span>
              <br />
              <span className="text-gray-600">IEEE EUI SB Counselor</span>
            </p>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Learning Outcomes
        </h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🚗</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                Automotive Industry Insights
              </h3>
              <p className="text-gray-600">
                Gained comprehensive understanding of the automotive technology
                sector and its role in shaping future mobility solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">💼</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                Career Exploration
              </h3>
              <p className="text-gray-600">
                Explored diverse career opportunities across engineering,
                software development, research, and innovation departments at
                Valeo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🤝</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                Professional Networking
              </h3>
              <p className="text-gray-600">
                Built valuable professional connections with industry experts
                and potential mentors in the automotive technology field.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🔬</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                Technology & Innovation
              </h3>
              <p className="text-gray-600">
                Witnessed cutting-edge technologies in autonomous driving,
                electrification, and smart mobility solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                Professional Development
              </h3>
              <p className="text-gray-600">
                Learned about corporate culture, professional expectations, and
                skills needed to succeed in global technology companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Trip Resources
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Trip details and announcements were shared on IEEE EUI SB social
            media platforms:
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold">
              Facebook
            </span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold">
              LinkedIn
            </span>
            <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-lg font-semibold">
              Instagram
            </span>
          </div>
          <p className="text-gray-700 mt-4">
            Event photos and memories from the trip are available in our shared
            album.
          </p>
        </div>
      </section>

      {/* Event Recap */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Trip to Valeo was an outstanding success, providing IEEE EUI SB
          members and EUI students with invaluable exposure to the automotive
          technology industry. Through facility tours, information sessions,
          and networking opportunities, participants gained practical insights
          into how global technology companies operate and innovate. The
          experience bridged the gap between academic learning and industry
          practice, inspiring students to pursue careers in automotive
          technology and related fields. This trip exemplified IEEE EUI
          SB&apos;s dedication to creating meaningful learning experiences that
          prepare students for successful professional careers.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-semibold">
            #Valeo
          </span>
          <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">
            #Trip
          </span>
          <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">
            #ieee_eui_sb
          </span>
        </div>
      </section>
    </>
  ),
};
