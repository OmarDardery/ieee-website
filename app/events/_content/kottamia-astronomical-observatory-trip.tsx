import Image from "next/image";
import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "kottamia-astronomical-observatory-trip",
  title: "Kottamia Astronomical Observatory Trip",
  description:
    "A trip to the Kottamia Astronomical Observatory to explore the universe.",
  startDate: new Date("2023-05-25T00:00:00"),
  endDate: new Date("2023-05-27T00:00:00"),
  postedDate: new Date("2023-05-01T00:00:00"),
  societyCodes: ["STB60211912"],
  theme: {
    page: "bg-gradient-to-b from-indigo-50 via-white to-white",
  },
  meta: [
    { icon: "📅", text: "25 May - 26 May 2023 (Overnight Trip)" },
    { icon: "🕐", text: "4:00 PM EEST - 5:00 AM EEST" },
    { icon: "📍", text: "NRIAG Kottamia Observatory, Cairo Governorate" },
    { icon: "💰", text: "150 EGP (Overnight)" },
  ],
  intro:
    "An overnight trip by IEEE EUI Student Branch & Faculty of Engineering to the home of the largest telescope in the Arab world, the Middle East, and North Africa.",
  content: (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <Image
          src="/kottamia-observatory-trip.jpg"
          alt="Kottamia Astronomical Observatory Trip"
          width={800}
          height={500}
          className="rounded-2xl border border-indigo-100 shadow-md object-cover w-full"
        />
      </div>

      {/* About the Observatory */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🔭 About Kottamia Observatory
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg font-semibold text-indigo-700">
            The largest telescope in the Arab world, the Middle East, and North
            Africa
          </p>

          <p>
            Kottamia Astronomical Observatory is home to the largest telescope
            in the Arab world, Middle East, and North Africa. A large number of
            scientists and researchers in the field of physics and astronomy
            use this telescope. It is unique in terms of its location and
            capabilities.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-indigo-100 bg-indigo-50/50 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">📍 Location</h3>
              <p className="text-sm">
                Approximately 80 km from Cairo center, on Ain El Sokhna Road,
                450 meters above sea level
              </p>
            </div>
            <div className="rounded-lg border border-indigo-100 bg-indigo-50/50 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                📅 Established
              </h3>
              <p className="text-sm">
                1964, as an extension of Helwan Observatory (established 1903)
                - one of the oldest research institutes in Egypt
              </p>
            </div>
          </div>

          <p>
            Kottamia Observatory is regarded as a{" "}
            <strong>small scientific city</strong>, housing state-of-the-art
            astronomical research equipment and facilities.
          </p>
        </div>
      </section>

      {/* Historical Achievements */}
      <section className="rounded-2xl border border-amber-100 bg-amber-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🌕 Historical Achievements
        </h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-amber-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-amber-700 mb-2">
              Lunar Landing Sites Selection
            </h3>
            <p className="text-gray-700">
              One of Kottamia Observatory&apos;s most important achievements
              was its participation in observations of the lunar surface to
              help choose human landing sites on the moon in the late 1960s.
            </p>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              Modernization & Upgrades
            </h3>
            <p className="text-gray-700 mb-3">
              Over the last twenty years, the telescope has been developed and
              upgraded to match other world-class telescopes:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Visual system replaced with modern technology</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Automatic silvering operation system</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Updated electrical circuits and mechanical systems</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Computer-controlled telescope and dome operation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trip Details */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🚌 Trip Details
        </h2>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                🚀 Departure
              </h3>
              <p className="text-sm text-gray-700">
                <strong>Location:</strong> EUI Campus
              </p>
              <p className="text-sm text-gray-700">
                <strong>Time:</strong> 4:00 PM (after classes)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Date:</strong> Thursday, 25 May 2023
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🏠 Return</h3>
              <p className="text-sm text-gray-700">
                <strong>Time:</strong> 5:00 AM
              </p>
              <p className="text-sm text-gray-700">
                <strong>Date:</strong> Friday, 26 May 2023
              </p>
              <p className="text-sm text-gray-700">
                <strong>Drop-off:</strong> Multiple locations in Cairo
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              📍 Observatory Location
            </h3>
            <p className="text-sm text-gray-700 font-mono">
              WRMH+J3P، طريق المرصد الفلكي, Cairo Governorate Desert, Cairo
              Governorate 4830301
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Distance: ~80 km from Cairo center (Ain El Sokhna Road)
            </p>
          </div>

          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="font-semibold text-gray-900 mb-2">💰 Trip Fees</h3>
            <p className="text-lg font-bold text-emerald-700">150 EGP</p>
            <p className="text-sm text-gray-600">
              Includes overnight stay and transportation
            </p>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          📝 Registration Period
        </h2>
        <div className="space-y-2">
          <p className="text-gray-700">
            <strong>Registration opened:</strong> 11 May 2023, 2:00 PM EEST
          </p>
          <p className="text-gray-700">
            <strong>Registration closed:</strong> 12 May 2023, 12:00 AM EEST
          </p>
          <p className="text-sm text-gray-600 mt-3">
            <strong>Admission:</strong> No additional charges beyond the
            overnight fee
          </p>
        </div>
      </section>

      {/* What Participants Experienced */}
      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "🌌 Stargazing Experience",
            description:
              "Observed celestial objects through one of the largest telescopes in the region under clear night skies.",
          },
          {
            title: "🔬 Scientific Exploration",
            description:
              "Learned about astronomical research, telescope operations, and space observation techniques.",
          },
          {
            title: "🏛️ Historic Facility Tour",
            description:
              "Explored a research institute with over 60 years of astronomical achievements and modern upgrades.",
          },
          {
            title: "🤝 Community Building",
            description:
              "Bonded with fellow students over shared interest in astronomy and space science during an overnight trip.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-indigo-700">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Organizers & Photography */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          📸 Event Photography
        </h3>
        <p className="text-gray-700">
          Our photographer <strong>Seif Wafik</strong>, an IEEE EUI SB member
          and student at the Faculty of Computing and Information Sciences,
          captured the memorable moments from this trip.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Event photos were shared across our social media platforms and
          uploaded to our gallery.
        </p>
      </section>

      {/* Social Media Section */}
      <section className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Stay Connected
        </h3>
        <p className="text-gray-700 mb-4">
          This trip was featured on our social media channels with photos and
          highlights:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-indigo-600 font-bold">•</span>
            <span>
              <strong>Facebook:</strong> IEEE EUI Official Page
            </span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-indigo-600 font-bold">•</span>
            <span>
              <strong>LinkedIn:</strong> IEEE EUI Professional Community
            </span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-indigo-600 font-bold">•</span>
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
          Thank you to all participants who joined us on this incredible
          overnight trip to <strong>Kottamia Astronomical Observatory</strong>{" "}
          on <strong>25-26 May 2023</strong>. The trip provided a unique
          opportunity to experience world-class astronomical research
          facilities and explore the wonders of the night sky.
        </p>
        <p className="text-sm text-gray-600">
          Special thanks to the Faculty of Engineering and the National
          Research Institute of Astronomy and Geophysics (NRIAG) for making
          this educational trip possible. Stay tuned for more exciting field
          trips and academic excursions!
        </p>
      </section>
    </div>
  ),
};
