import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Emmes Services Pvt. Ltd.",
    location: "Bengaluru, India",
    period: "May 2024 - Present",
    description: [
      "Collaborate with cross-functional teams to resolve bugs, ensuring smooth software performance",
      "Built user interface components, enhancing overall user experience",
      "Design and implement backend services, creating and managing APIs within a cloud architecture to support robust and scalable applications"
    ]
  },
  {
    title: "Software Developer - Freelance",
    company: "Construction Check",
    location: "Remote",
    period: "Sep 2022 - Jan 2023",
    description: [
      "Engineered interactive interfaces and common components in Vue, ensuring project consistency",
      "Collaborated with teams to identify and resolve bugs in the project, improving product quality",
      "Coordinated closely with clients, delivering timely updates, incorporating requirements, and resolving feedback to drive project success"
    ]
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
      "Mentored 15 junior team members in Angular and React, fostering their professional growth"
    ]
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
      "Led code reviews and mentored junior developers, fostering a collaborative and growth-oriented environment"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full" />
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-blue-600 font-semibold">{exp.company}</div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, idx) => (
                      <li style={{paddingLeft: "1.5em",textIndent:"-1.5em"}} key={idx}>{item}</li>
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