import Image from "next/image";

export default function IEEEEUI_SB_SPC2023() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Event Concluded Badge */}
        <div className="mb-6 inline-block">
          <span className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Event Concluded
          </span>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            IEEE EUI SB SPC 2023
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>November 29, 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">1:00 PM - 3:00 PM EET</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>EUI Library, New Administrative Capital</span>
            </div>
          </div>

          <div className="mb-8" suppressHydrationWarning>
            <Image
              src="/ieee-eui-sb-spc-2023.jpg"
              alt="IEEE EUI SB SPC 2023"
              width={800}
              height={400}
              className="rounded-xl shadow-2xl w-full object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-700 leading-relaxed">
            The IEEE Paper Contest is a program offered by IEEE R8 SAC. It's the first time for it in Egypt and IEEE EUI SB was the first Egyptian student branch to host this contest.
          </p>
        </header>

        {/* About the Program */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About the Program</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The IEEE EUI SB SPC 2023 included many features other than just the contest.
            </p>
            <p>
              The IEEE EUI SB SPC aimed to prepare undergraduate students to write a perfectly structured research paper.
            </p>
            <p>
              As EUI is a newly established university by the Ministry of Communications and Information Technology, the oldest generation of EUI students are still undergraduates. That's why we decided to extend the IEEE EUI SB SPC 2023 to a series of sessions teaching students how to do research, the basics of academic writing, and how to write a research paper.
            </p>
          </div>
        </section>

        {/* Sessions */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Program Sessions</h2>
          <p className="text-gray-700 mb-6">
            There were three sessions in addition to the introduction session:
          </p>
          <div className="grid gap-6">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Introduction Session</h3>
              <p className="text-gray-600">
                By <span className="font-semibold">Dr. Mohammed Ismail</span>, IEEE EUI SB Counselor, and IEEE EUI SB SPC Chair
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Session 1: "The Structure of a Research Paper"</h3>
              <p className="text-gray-600">
                By <span className="font-semibold">Prof. Amr ElSherif</span>, IEEE EUI SB Advisor
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Session 2: "If it was not published it was not done yet"</h3>
              <p className="text-gray-600">
                By <span className="font-semibold">Professor Youssri Hassan</span>, Associate Professor at EUI
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Session 3: "Unlocking the Academic Writing Fear!"</h3>
              <p className="text-gray-600">
                By <span className="font-semibold">Ms. Heidi Omara</span>, Head of the English Department at EUI
              </p>
            </div>
          </div>
        </section>

        {/* Judges */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <span>👥</span>
            Contest Judges
          </h2>
          <div className="space-y-8">
            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Prof. Amr Elmasry</h3>
              <p className="text-gray-700">
                Dean of the Faculty of Engineering at Egypt University of Informatics (EUI) and former head of the Computer Engineering Department at Alexandria University. Prof. Elmasry received his B.Sc. and M.Sc. degrees in Computer Engineering from Alexandria University (1991, 1995), and Ph.D. in Computer Science from Rutgers University (2001). He worked as a senior researcher at the Max-Planck Institute for Informatics and as a full professor at the University of Copenhagen. He has coauthored over 100 research papers.
              </p>
            </div>
            
            <div className="pb-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Prof. Rania Sweif</h3>
              <p className="text-gray-700">
                IEEE Senior Member, IEEE Women in Engineering (WIE) Egypt Section Vice Chair, and IEEE SAC Egypt Chair. Prof. Swief received her B.Sc., M.Sc., and Ph.D. degrees from Ain Shams University (1998, 2004, 2010). She has contributed to numerous papers nationally and internationally, with many publications in conferences, and has supervised many Ph.D. and Master's degrees in Smart grids, Protection, Deregulated markets, AI applications in smart grids, Smart Cities, electricity market forecasting, and Renewable Energy technologies.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Dr. Basma Hassan</h3>
              <p className="text-gray-700">
                Assistant Professor at the Faculty of Computing and Information Sciences at Egypt University of Informatics (EUI). She received her B.Sc., M.Sc., and Ph.D. degrees in Computer Science from the Faculty of Computers and Artificial Intelligence, Cairo University (2006, 2011, 2020).
              </p>
            </div>
          </div>
        </section>

        {/* Prizes */}
        <section className="mb-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Contest Prizes</h2>
          <div className="grid gap-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-yellow-500 shadow-md">
              <h3 className="text-2xl font-bold text-yellow-600 mb-3">🥇 First Place</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Paper qualifies for the IEEE R8 Student Paper Contest</li>
                <li>✓ Certificate of participation from IEEE EUI SB</li>
                <li>✓ <span className="font-bold text-xl">3000 EGP</span> Cash Prize</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-gray-400 shadow-md">
              <h3 className="text-2xl font-bold text-gray-600 mb-3">🥈 Second Place</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Certificate of participation from IEEE EUI SB</li>
                <li>✓ <span className="font-bold text-xl">2000 EGP</span> Cash Prize</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-600 shadow-md">
              <h3 className="text-2xl font-bold text-orange-600 mb-3">🥉 Third Place</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Certificate of participation from IEEE EUI SB</li>
                <li>✓ <span className="font-bold text-xl">1000 EGP</span> Cash Prize</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Social Media & Resources */}
        <section className="mb-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Event Resources</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Contest details and updates were shared on IEEE EUI SB social media platforms:
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
              Event photos and documentation are available online.
            </p>
          </div>
        </section>

        {/* Event Recap */}
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Event Recap</h2>
          <p className="text-gray-700 leading-relaxed">
            The IEEE EUI SB SPC 2023 successfully concluded, marking a historic moment as the first IEEE Student Paper Contest hosted by an Egyptian student branch. Through comprehensive training sessions and expert judging, the event helped undergraduate students develop essential research and academic writing skills. The program demonstrated IEEE EUI SB's commitment to advancing academic excellence and fostering research culture among Egyptian engineering students.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold">
              #IEEE_EUI_SB_SPC_2023
            </span>
            <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-semibold">
              #SPC
            </span>
            <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-semibold">
              #R8_SPC
            </span>
            <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-semibold">
              #IEEE
            </span>
            <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-semibold">
              #EUI
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
