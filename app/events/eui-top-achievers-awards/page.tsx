import Image from "next/image";

export default function EUITopAchieversAwards() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Event Concluded Badge */}
        <div className="mb-6 inline-block">
          <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Event Concluded
          </span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            EUI Top Achievers Awards
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>October 31, 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">1:00 PM - 2:00 PM EET</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>New Administrative Capital</span>
            </div>
          </div>

          <div className="mb-8" suppressHydrationWarning>
            <Image
              src="/eui-top-achievers-awards.jpg"
              alt="EUI Top Achievers Awards"
              width={800}
              height={400}
              className="rounded-xl shadow-2xl w-full object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            EUI Top Achievers Ceremony is an event created by Egypt University of Informatics to appreciate and recognize students' academic and educational achievements and student activities.
          </p>
        </header>

        {/* About the Ceremony */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About the Ceremony</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The EUI Top Achievers Ceremony was established to celebrate and honor the outstanding achievements of students at Egypt University of Informatics. This prestigious event recognizes excellence not only in academic performance but also in student activities and community engagement.
            </p>
            <p>
              The ceremony serves as a platform to inspire students to strive for excellence and contribute meaningfully to the university community through various initiatives and activities.
            </p>
          </div>
        </section>

        {/* IEEE EUI SB Recognition */}
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span className="text-4xl">🏆</span>
            Our Achievement
          </h2>
          <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600 shadow-md">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Best Student Activity</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We were awarded a certificate from EUI in the Top Achievers Awards Ceremony for being the <span className="font-bold text-blue-700">best student activity in EUI</span>. This recognition reflects our commitment to fostering technical excellence, community engagement, and leadership development among students.
            </p>
          </div>
        </section>

        {/* Recognition Categories */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Recognition Categories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-yellow-200 rounded-lg bg-yellow-50">
              <h3 className="text-xl font-bold text-yellow-700 mb-3">🎓 Academic Excellence</h3>
              <p className="text-gray-700">
                Recognizing students with outstanding academic performance and scholarly achievements throughout the academic year.
              </p>
            </div>
            
            <div className="p-6 border-2 border-blue-200 rounded-lg bg-blue-50">
              <h3 className="text-xl font-bold text-blue-700 mb-3">🌟 Student Activities</h3>
              <p className="text-gray-700">
                Honoring student organizations and initiatives that have made significant contributions to campus life and community engagement.
              </p>
            </div>
            
            <div className="p-6 border-2 border-green-200 rounded-lg bg-green-50">
              <h3 className="text-xl font-bold text-green-700 mb-3">💡 Innovation & Research</h3>
              <p className="text-gray-700">
                Celebrating students who have demonstrated exceptional creativity and contributions to research and innovation.
              </p>
            </div>
            
            <div className="p-6 border-2 border-purple-200 rounded-lg bg-purple-50">
              <h3 className="text-xl font-bold text-purple-700 mb-3">🤝 Leadership & Service</h3>
              <p className="text-gray-700">
                Acknowledging students who have shown outstanding leadership and dedication to serving the university community.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statement */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Impact</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This award is a testament to the hard work and dedication of IEEE EUI SB members who have consistently organized impactful technical workshops, community outreach programs, professional development sessions, and networking events throughout the year.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Being recognized as the best student activity motivates us to continue our mission of empowering students with technical skills, fostering innovation, and creating opportunities for professional growth within the IEEE community.
          </p>
        </section>

        {/* Event Recap */}
        <section className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Event Recap</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The EUI Top Achievers Awards ceremony was a memorable celebration of excellence and achievement at Egypt University of Informatics. IEEE EUI SB was honored to receive the Best Student Activity award, recognizing our continuous efforts to create value for students through technical education, professional development, and community engagement.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-semibold">
              #Top
            </span>
            <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">
              #Achievers
            </span>
            <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">
              #Ceremony
            </span>
            <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-semibold">
              #Certificate
            </span>
            <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-semibold">
              #Award
            </span>
            <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-semibold">
              #Best_Student_Activity
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
