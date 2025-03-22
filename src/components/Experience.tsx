import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Emmes Services Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "May 2024 - Present",
    description: [
      "Built and integrated a Backend for Frontend (BFF) layer, reducing client-side load and improving performance by 30% across web and mobile applications.",
      "Developed a push notification system using AWS SNS, FCM, and APN, achieving 99.9% delivery reliability and enhancing user engagement.",
      "Designed a centralized translation service, streamlining multilingual support and cutting translation maintenance efforts by 40%.",
      "Led the migration of AppSync and Lambda-based backend service to AWS ECS, optimizing scalability and cutting API response times by 20%.",
      "Led code reviews, mentorship, and design discussions, improving code quality, onboarding efficiency, and system scalability.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Divami Design Labs",
    location: "Hyderabad, India",
    period: "Dec 2020 - Jul 2022",
    description: [
      "Led a team of 4 in building a comprehensive learning platform, overseeing the entire lifecycle from conception to deployment, ensuring timely delivery of a high-quality product",
      "Collaborated with cross-functional teams in Agile environments to deliver timely high-quality software solutions",
      "Developed APIs using the serverless framework, designed databases, and optimized query performance by for seamless client-database communication",
      "Leveraged React to create complex components and reusable services, enhancing user experience and codebase maintainability",
      "Maintained regular communication with clients, providing updates and addressing requirements and feedback to ensure satisfaction",
      "Delegated tasks, monitored progress, and guided to ensure smooth project execution",
      "Mentored 15 junior team members in Angular and React, fostering their professional growth",
    ],
  },
  {
    title: "Software Engineer",
    company: "Divami Design Labs",
    location: "Hyderabad, India",
    period: "May 2019 - Nov 2020",
    description: [
      "Created responsive, high-quality User Interfaces using HTML, CSS, JavaScript, Angular, and React, following a test-driven approach",
      "Improved product stability by resolving bugs and designing reusable UI components, increasing development efficiency by 25%",
      "Contributed to API design in a Serverless architecture with Node.js, optimizing backend performance",
      "Debugged legacy Uniface applications, enhancing functionality through business rule establishment and query optimization",
      "Led code reviews and mentored junior developers, fostering a collaborative and growth-oriented environment",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-blue-600"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full" />
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-blue-600 font-semibold">
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, idx) => (
                      <li
                        style={{ paddingLeft: "1.5em", textIndent: "-1.5em" }}
                        key={idx}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
