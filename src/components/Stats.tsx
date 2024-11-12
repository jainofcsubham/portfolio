import { Code, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Code,
    value: "4+",
    label: "Years Experience"
  },
  {
    icon: Users,
    value: "15+",
    label: "Team Members Mentored"
  },
  {
    icon: Award,
    value: "AIR 141",
    label: "GATE CS 2022"
  }
];

export default function Stats() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <stat.icon className="w-8 h-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}