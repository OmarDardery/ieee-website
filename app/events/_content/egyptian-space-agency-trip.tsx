import Image from "next/image";
import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "egyptian-space-agency-trip",
  title: "Egyptian Space Agency Trip",
  description:
    "IEEE EUI SB organized trip to the Egyptian Space Agency with EUI students.",
  startDate: new Date("2023-11-27T00:00:00"),
  endDate: new Date("2023-12-21T00:00:00"),
  postedDate: new Date("2023-11-10T00:00:00"),
  societyCodes: ["STB60211912"],
  theme: {
    page: "bg-gradient-to-br from-indigo-50 via-white to-blue-50",
    heading: "from-indigo-600 to-blue-600",
  },
  meta: [
    { icon: "📅", text: "November 27, 2023" },
    { icon: "⏰", text: "9:30 AM - 3:30 PM EET" },
    { icon: "📍", text: "Egyptian Space Agency, Second New Cairo" },
  ],
  intro:
    "IEEE EUI SB organized the trip of the semester with the Faculty of Engineering and the Faculty of Computing and Information Sciences, EUI to the Egyptian Space Agency.",
  content: (
    <>
      <div className="mb-8 -mt-6">
        <Image
          src="/egyptian-space-agency-trip.jpg"
          alt="Egyptian Space Agency Trip"
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
            This exceptional educational trip was organized by IEEE EUI SB in
            collaboration with Egypt University of Informatics, bringing
            together students from the Faculty of Engineering and the Faculty
            of Computing and Information Sciences for an immersive experience
            at the Egyptian Space Agency (EgSA).
          </p>
          <p>
            The trip was facilitated by EUI and offered completely free of
            charge to participating students, making this unique learning
            opportunity accessible to all.
          </p>
        </div>
      </section>

      {/* What Students Experienced */}
      <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          What Students Experienced
        </h2>
        <div className="grid gap-6">
          <div className="border-l-4 border-indigo-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🎤 Meeting with Prof. Waleed Radwan
            </h3>
            <p className="text-gray-600">
              Students had the privilege of meeting with{" "}
              <span className="font-semibold">Prof. Waleed Radwan</span>, Head
              of the Strategic Studies Unit at the Egyptian Space Agency, who
              shared insights into Egypt&apos;s space program and strategic
              initiatives.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🛰️ Comprehensive Agency Tour
            </h3>
            <p className="text-gray-600">
              Participants went on a detailed tour throughout the entire
              Egyptian Space Agency, gaining firsthand exposure to the
              facilities and operations of Egypt&apos;s premier space
              organization.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🔬 Satellite Manufacturing Process
            </h3>
            <p className="text-gray-600">
              Students explored the complete satellite manufacturing process,
              witnessing cutting-edge technology and engineering practices used
              to design and build satellites for various applications.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6 py-2">
            <h3 className="font-bold text-lg text-gray-800 mb-2">
              🌍 Space Technology Applications
            </h3>
            <p className="text-gray-600">
              The tour highlighted real-world applications of space technology
              in telecommunications, Earth observation, climate monitoring, and
              national security.
            </p>
          </div>
        </div>
      </section>

      {/* Trip Details */}
      <section className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Trip Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-indigo-600 mb-3">
              📍 Location
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Egyptian Space Agency</span>
            </p>
            <p className="text-gray-600 text-sm">
              2JX5+R37, 2nd Ring Rd
              <br />
              Second New Cairo, Cairo Governorate 4764010
              <br />
              Egypt
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
            >
              📌 Click here for Map
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              🎓 Organizers
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">IEEE EUI SB</span>
            </p>
            <p className="text-gray-600">
              In collaboration with:
              <br />
              • Faculty of Engineering, EUI
              <br />
              • Faculty of Computing and Information Sciences, EUI
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              ⏰ Schedule
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span> November 27, 2023
              <br />
              <span className="font-semibold">Time:</span> 9:30 AM - 3:30 PM
              EET
              <br />
              <span className="font-semibold">Duration:</span> Full-day
              educational tour
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-green-600 mb-3">
              💰 Registration
            </h3>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-green-700">
                No Admission Charge
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              Registration Period:
              <br />
              November 21, 2023 at 10:00 PM EET
              <br />
              to November 22, 2023 at 10:00 PM EET
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
            <span className="text-2xl">🚀</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                Space Industry Exposure
              </h3>
              <p className="text-gray-600">
                Students gained comprehensive insights into Egypt&apos;s space
                program and the technical aspects of satellite development and
                deployment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🔧</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                Engineering Applications
              </h3>
              <p className="text-gray-600">
                Witnessed real-world engineering processes, from design and
                manufacturing to testing and quality assurance in satellite
                production.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">💼</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                Career Insights
              </h3>
              <p className="text-gray-600">
                Explored career opportunities in the space sector and learned
                about the skills and qualifications needed for space technology
                careers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-2xl">🌟</span>
            <div>
              <h3 className="font-bold text-lg text-gray-800">
                National Pride & Innovation
              </h3>
              <p className="text-gray-600">
                Learned about Egypt&apos;s contributions to space exploration
                and the strategic importance of space technology for national
                development.
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
            Event photos and documentation are available on our shared drive.
          </p>
        </div>
      </section>

      {/* Event Recap */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Event Recap</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          The Egyptian Space Agency trip was a remarkable educational
          experience that gave IEEE EUI SB members and EUI students
          unprecedented access to Egypt&apos;s space program. From meeting with
          leading experts to witnessing satellite manufacturing firsthand,
          participants gained invaluable insights into space technology and its
          applications. This trip exemplified IEEE EUI SB&apos;s commitment to
          providing students with unique learning opportunities beyond the
          classroom, fostering curiosity about cutting-edge technology and
          inspiring the next generation of space engineers and scientists.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-sm font-semibold">
            #EgSA
          </span>
          <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">
            #IEEE
          </span>
          <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-semibold">
            #EUI
          </span>
          <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-semibold">
            #SB
          </span>
          <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">
            #ieee_eui_sb
          </span>
        </div>
      </section>
    </>
  ),
};
