// components/ResponsibilitySection.js

import {
  Award,
  Handshake,
  Library,
  UsersRound
} from 'lucide-react';

const responsibilities = [
  {
    icon: <Award className="w-10 h-10 text-green-600" />,
    title: "Scholarship",
    text: "Empower Future Generations Support the dreams of deserving students by contributing to our scholarship fund. Your generosity helps provide access to quality education, giving young minds the chance to excel and shape a better tomorrow.",
    bg: "bg-blue-100"
  },
  {
    icon: <Handshake className="w-10 h-10 text-yellow-600" />,
    title: "Help Current Students",
    text: "Be the Bridge Between Learning and Opportunity Share your experience, time, or resources to guide current students. From mentorship programs to internship opportunities, your involvement makes a meaningful difference in their academic and professional journeys.",
    bg: "bg-yellow-100"
  },
  {
    icon: <Library className="w-10 h-10 text-purple-600" />,
    title: "Help Our University",
    text: "Invest in the Growth of Your Alma Mater Contribute to school projects, research funding, or infrastructure development. Your support helps maintain our institution’s excellence and fosters innovation for future generations of students.",
    bg: "bg-purple-100"
  },
  {
    icon: <UsersRound className="w-10 h-10 text-green-600" />,
    title: "Build Our Community",
    text: "Stay Connected, Make an Impact Join a vibrant network of alumni dedicated to lifelong connections and collaborative growth. Whether it’s through events, forums, or community service, your participation strengthens the bonds that began on campus.",
    bg: "bg-green-100"
  }
];

export default function ResponsibilitySection() {
  return (
    <div className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Responsibility</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {responsibilities.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className={`p-6 rounded-full ${item.bg}`}>
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 max-w-xs">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
