import { Calendar, MapPin } from 'lucide-react';

const educations = [
  {
    title: "M.Tech in Computer Science",
    institution: "Indian Institute of Technology, Kharagpur",
    location: "Kharagpur, India",
    period: "Aug 2022 - Apr 2024",
    gpa: "9.02"
  },
  {
    title: "B.Tech in Computer Science",
    institution: "Biju Pattnaik University of Technology",
    location: "Berhampur, India",
    period: "Aug 2015 - Apr 2019",
    gpa: "8.42"
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {educations.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full" />
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{edu.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-blue-600 font-semibold">{edu.institution}</div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                  </div>
                  <div className="flex items-center text-black text-sm">
                      Grade - {edu.gpa}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}