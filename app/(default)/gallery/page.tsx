"use client"
import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import Button from "@/components/ui/button"

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState("All")

  const imagesByYear: Record<string, string[]> = {
    All: [
      "/images/gallery1.png",
      "/images/gallery2.png",
      "/images/gallery3.png",
      "/images/gallery4.png",
      "/images/gallery5.png",
      "/images/gallery6.png",
    ],
    "2001": [
      "/images/gallery1.png",
      "/images/gallery2.png",
    ],
    "2002": [
      "/images/gallery3.png",
      "/images/gallery4.png",
    ],
    "2003": [
      "/images/gallery5.png",
      "/images/gallery6.png",
    ],
  }

  const textByYear: Record<string, { title: string; description: string }> = {
    All: {
      title: "Meet And Greet 2018",
      description:
        "Etiam vitae tortor. Curabitur nisi. In hac habitasse platea dictumst. Praesent ac massa at ligula laoreet iaculis. Sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, quis venenatis ante odio sit amet eros. Nullam quis ante. Curabitur vestibulum.",
    },
    "2001": {
      title: "School Reunion 2001",
      description:
        "This year marked our first return to the halls of our alma mater. A nostalgic and heartwarming event reconnecting old friends and reliving memories.",
    },
    "2002": {
      title: "Community Outreach 2002",
      description:
        "A powerful year where we extended hands to our local community—offering scholarships, hosting seminars, and bringing smiles to many faces.",
    },
    "2003": {
      title: "Family Picnic 2003",
      description:
        "A joyful year filled with laughter, games, and shared meals. Members brought along their families to enjoy a relaxing and bonding experience.",
    },
  }

  const currentImages = imagesByYear[selectedYear] || []
  const currentText = textByYear[selectedYear] || textByYear["All"]

  return (
    <main className="min-h-screen bg-white">
      <title>gallery</title>

      {/* Hero Section */}
      <div className="relative h-[450px] w-full">
        <Image src="/images/school.jpg" alt="School building" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-xl font-bold mb-1">JOGSOBA &apos;98</h1>
          <h2 className="text-[#FFD700] text-4xl font-bold mb-3">GALLERY</h2>
          <p className="text-white text-xs lg:text-2xl max-w-lg mb-4">
            a platform where past students of ijebu-ode grammar school, 1998 set, reconnect, collaborate and contribute towards the development of our alma mater and the community.
          </p>
          <Button
            label="EXPLORE"
            className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-medium px-8 rounded"
            onClick={() => console.log("Explore button clicked")}
          />
        </div>
      </div>

      {/* Filter Navigation */}
      <div className="text-white flex justify-center space-x-4 pt-3">
        {["All", "2001", "2002", "2003"].map((year) => (
          <button
            key={year}
            className={`px-4 py-1 rounded-t-md ${selectedYear === year ? "bg-[#FFD700] text-black" : "bg-[#4A2275]"}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Gallery Content */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-start mb-6 mt-4">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold mb-2">{currentText.title}</h3>
            <p className="text-sm text-gray-700">{currentText.description}</p>
          </div>
          <Button
            label="View Album"
            className="bg-[#5D2D91] hover:bg-[#4A2275] text-white text-sm rounded"
            onClick={() => console.log("View Album clicked")}
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentImages.map((src, index) => (
            <div key={index} className="relative h-[200px] md:h-[240px]">
              <Image src={src} alt={`Gallery image ${index + 1}`} fill className="object-cover rounded" />
              {(src.includes("2") || src.includes("4")) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-30 rounded-full p-2">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
