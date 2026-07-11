import Image from "next/image";
import type { EventDefinition } from "./types";

export const event: EventDefinition = {
  id: "data-science-online-bootcamp-wrap-up",
  title: "Data Science Online Bootcamp - Session 1",
  description: "Wrap-up session for the Data Science Bootcamp.",
  startDate: new Date("2023-08-05T00:00:00"),
  endDate: new Date("2024-02-29T00:00:00"),
  postedDate: new Date("2023-07-20T00:00:00"),
  societyCodes: ["SBC60211912", "STB60211912"],
  theme: {
    page: "bg-gradient-to-b from-purple-50 via-white to-white",
  },
  meta: [
    { icon: "📅", text: "5 August - 30 September 2023 (8 weeks)" },
    { icon: "🕐", text: "5:00 PM - 10:00 PM EEST" },
    { icon: "📍", text: "Microsoft Teams (Online)" },
    { icon: "👥", text: "500+ students from universities across Egypt" },
  ],
  intro:
    "The IEEE EUI Computer Society's intensive 8-week Data Science Online Bootcamp, led by Professor Alaa Sheta.",
  content: (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <Image
          src="/data-science-bootcamp.jpg"
          alt="Data Science Online Bootcamp"
          width={800}
          height={500}
          className="rounded-2xl border border-purple-100 shadow-md object-cover w-full"
        />
      </div>

      {/* Instructor Section */}
      <section className="rounded-2xl border border-purple-100 bg-purple-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          👨‍🏫 Instructor
        </h2>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-700">
            Professor Alaa Sheta
          </h3>
          <p className="text-gray-700">
            A proficient data science expert leading this intensive 8-week
            bootcamp with exceptional expertise and dedication.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-purple-200 bg-white p-4 text-center">
              <div className="text-2xl font-bold text-purple-700">Ph.D.</div>
              <div className="text-sm text-gray-600 mt-1">
                Data Science Expert
              </div>
            </div>
            <div className="rounded-lg border border-purple-200 bg-white p-4 text-center">
              <div className="text-2xl font-bold text-purple-700">100+</div>
              <div className="text-sm text-gray-600 mt-1">
                Peer-Reviewed Publications
              </div>
            </div>
            <div className="rounded-lg border border-purple-200 bg-white p-4 text-center">
              <div className="text-2xl font-bold text-purple-700">Tenured</div>
              <div className="text-sm text-gray-600 mt-1">Professor</div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Bootcamp */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          📚 About the Bootcamp
        </h2>
        <p className="text-gray-700">
          The Data Science Online Bootcamp witnessed an{" "}
          <strong>outstanding response with over 500 registrations</strong>{" "}
          from different universities across Egypt, thanks to Professor
          Sheta&apos;s comprehensive curriculum and hands-on approach.
        </p>
        <p className="text-gray-700 mt-3">
          Spanning an intensive 8-week period, participants engaged in a
          structured learning journey covering fundamental to advanced data
          science concepts with practical applications throughout.
        </p>
      </section>

      {/* Bootcamp Roadmap */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🗺️ Bootcamp Roadmap
        </h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-5">
            <h3 className="font-semibold text-purple-700 mb-2">
              Week 1: Introduction & Tools
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">•</span>
                <span>
                  The importance of data science in decision-making and
                  applications
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">•</span>
                <span>Introduction to Overleaf and Google Colab</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-purple-600 font-bold">•</span>
                <span>LaTeX writing with IEEE Conference template</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
            <h3 className="font-semibold text-blue-700 mb-2">
              Week 2: Machine Learning Fundamentals
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Supervised vs unsupervised learning, regression and
                  classification
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Pandas: DataFrames, Series, filtering, sorting, statistical
                  metrics
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-600 font-bold">•</span>
                <span>Visualization with Matplotlib and Seaborn</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
            <h3 className="font-semibold text-emerald-700 mb-2">
              Week 3: Regression Analysis
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Plotting datasets and calculating regression lines</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Model prediction and evaluation using MSE and MAE</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Python libraries: sklearn for regression calculations</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-5">
            <h3 className="font-semibold text-amber-700 mb-2">
              Week 4: Advanced Regression & KNN
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  Polynomial regression and regularization techniques (L1/L2)
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  K-Nearest Neighbors (KNN) for classification and prediction
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>
                  Distance functions: Manhattan, Euclidean, Minkowski
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Practice on cancer detection dataset</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-5">
            <h3 className="font-semibold text-rose-700 mb-2">
              Week 5: Decision Trees
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-rose-600 font-bold">•</span>
                <span>Building decision trees from scratch</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-rose-600 font-bold">•</span>
                <span>Node impurity measures: Entropy and Gini Index</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5">
            <h3 className="font-semibold text-indigo-700 mb-2">
              Week 6: Neural Networks
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Artificial Neural Networks (ANN) overview</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-indigo-600 font-bold">•</span>
                <span>Hands-on ANN demonstrations</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-green-100 bg-green-50/50 p-5">
            <h3 className="font-semibold text-green-700 mb-2">
              Weeks 7-8: Kaggle Competition
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">•</span>
                <span>Real-world application: Housing price prediction</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">•</span>
                <span>Applied all learned concepts to practical dataset</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 font-bold">•</span>
                <span>Competition-based learning and evaluation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🏆 Bootcamp Impact & Achievements
        </h2>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-emerald-200 bg-white p-5 text-center">
              <div className="text-3xl font-bold text-emerald-700">500+</div>
              <div className="text-sm text-gray-600 mt-1">
                Registrations from universities across Egypt
              </div>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-white p-5 text-center">
              <div className="text-3xl font-bold text-emerald-700">70+</div>
              <div className="text-sm text-gray-600 mt-1">
                Certificates awarded to successful participants
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            The bootcamp&apos;s impact was truly notable, as evidenced by the
            proud awarding of <strong>over 70 certificates</strong> to
            ambitious individuals who rigorously applied their gained knowledge
            to a real-world application. This remarkable achievement
            underscores the exceptional quality and impact of the bootcamp in
            shaping the next generation of data scientists.
          </p>
        </div>
      </section>

      {/* Final Competition */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🎯 Kaggle Competition
        </h2>
        <p className="text-gray-700">
          To conclude the bootcamp, a thrilling <strong>Kaggle Competition</strong>{" "}
          took place in which participants had to predict the sales price of
          houses based on housing prices data.
        </p>
        <p className="text-gray-700 mt-3">
          Participants who met the competition criteria were awarded a{" "}
          <strong>
            certificate of completion from the IEEE EUI Computer Society
          </strong>{" "}
          as a form of appreciation for their dedication and hard work.
        </p>
      </section>

      {/* Skills Acquired */}
      <section className="grid gap-4 md:grid-cols-2">
        {[
          {
            title: "📊 Data Analysis & Visualization",
            description:
              "Mastered Pandas, Matplotlib, and Seaborn for data manipulation and creating insightful visualizations.",
          },
          {
            title: "🤖 Machine Learning Models",
            description:
              "Built and evaluated regression models, KNN, decision trees, and neural networks from scratch.",
          },
          {
            title: "🔬 Scientific Computing",
            description:
              "Learned LaTeX writing, Overleaf, Google Colab, and sklearn for research and implementation.",
          },
          {
            title: "🏅 Real-World Application",
            description:
              "Applied knowledge to Kaggle competition, predicting housing prices with industry-standard techniques.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-purple-700">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Social Media Section */}
      <section className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          📱 Bootcamp Highlights
        </h3>
        <p className="text-gray-700 mb-4">
          For highlights, announcements, registration details, and
          certification information, visit our social media channels:
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-purple-600 font-bold">•</span>
            <span>
              <strong>LinkedIn:</strong> Professional updates and alumni stories
            </span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-purple-600 font-bold">•</span>
            <span>
              <strong>Facebook:</strong> Event photos and announcements
            </span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <span className="text-purple-600 font-bold">•</span>
            <span>
              <strong>Instagram:</strong> Behind-the-scenes and participant
              testimonials
            </span>
          </li>
        </ul>
      </section>

      {/* Event Recap Section */}
      <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Event Recap</h3>
        <p className="text-gray-700 mb-4">
          Thank you to all <strong>500+ participants</strong> who joined the
          Data Science Online Bootcamp from{" "}
          <strong>5 August to 30 September 2023</strong>. Special appreciation
          to <strong>Professor Alaa Sheta</strong> for his exceptional
          instruction and dedication throughout the 8-week journey.
        </p>
        <p className="text-sm text-gray-600">
          Congratulations to the <strong>70+ certificate recipients</strong>{" "}
          who successfully completed the Kaggle competition! This bootcamp
          marked a significant milestone in cultivating data science talent
          across Egyptian universities. Stay tuned for more educational
          programs from IEEE EUI Computer Society!
        </p>
      </section>
    </div>
  ),
};
