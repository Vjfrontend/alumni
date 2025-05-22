"use client";

import { useState } from "react";
import Image from "next/image";

// Example image sets (replace with your actual images)
const allImages = [
  { src: "/images/7.jpg", year: 2003 },
  { src: "/images/8.jpg", year: 1998 },
  { src: "/images/9.jpg", year: 2012 },
  { src: "/images/10.jpg", year: 2024 },
  { src: "/images/11.jpg", year: 2001 },
  { src: "/images/12.jpg", year: 2016 },
  { src: "/images/13.jpg", year: 2023 },
  { src: "/images/14.jpg", year: 2005 },
];

const oldMemories = [
  { src: "/images/1.jpg", year: 1998 },
  { src: "/images/2.jpg", year: 2001 },
  { src: "/images/3.jpg", year: 1995 },
  { src: "/images/4.jpg", year: 2000 },
];

const events = [
  { src: "/images/23.jpg", year: 2012 },
  { src: "/images/24.jpg", year: 2016 },
  { src: "/images/25.jpg", year: 2018 },
  { src: "/images/26.jpg", year: 2015 },
  { src: "/images/27.jpg", year: 2013 },
];

const recent = [
    { src: "/images/23.jpg", year: 2012 },
  { src: "/images/24.jpg", year: 2016 },
  { src: "/images/25.jpg", year: 2018 },
  { src: "/images/26.jpg", year: 2015 },
  { src: "/images/27.jpg", year: 2013 },
];

const categories: Record<string, { src: string; year: number }[]> = {
  All: allImages,
  "Old Memories": oldMemories,
  Events: events,
  Recent: recent,
};

export default function Gallery() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const images = categories[currentCategory];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">GALLERY</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`${
                currentCategory === category
                  ? "font-semibold text-black underline"
                  : "hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={img.src}
                alt={`Gallery image ${index}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 text-center">
<p className="font-semibold text-lg text-gray-700">jogsoba'98</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
