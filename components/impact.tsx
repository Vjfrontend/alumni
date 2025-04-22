// components/ResponsibilitySection.js

import { FaGraduationCap, FaHandsHelping, FaUniversity, FaUsers } from 'react-icons/fa';

const responsibilities = [
  {
    icon: <FaGraduationCap className="text-3xl text-green-600" />,
    title: "Scholarship",
    text: "De create building thinking about your requirment and latest treand on our marketplace area",
    bg: "bg-blue-100"
  },
  {
    icon: <FaHandsHelping className="text-3xl text-yellow-600" />,
    title: "Help Current Students",
    text: "De create building thinking about your requirment and latest treand on our marketplace area",
    bg: "bg-yellow-100"
  },
  {
    icon: <FaUniversity className="text-3xl text-purple-600" />,
    title: "Help Our University",
    text: "De create building thinking about your requirment and latest treand on our marketplace area",
    bg: "bg-purple-100"
  },
  {
    icon: <FaUsers className="text-3xl text-green-600" />,
    title: "Build Our Community",
    text: "De create building thinking about your requirment and latest treand on our marketplace area",
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
