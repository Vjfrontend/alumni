"use client"
import Image from "next/image"
import { Play } from "lucide-react"
import Button from "@/components/ui/button"

export default function Gallery() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[450px] w-full">
        <Image src="/images/school.jpg" alt="School building" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-xl  font-bold  mb-1">JOGSOBA &apos;98</h1>
          <h2 className="text-[#FFD700] text-4xl font-bold mb-3">GALLERY</h2>
          <p className="text-white text-xs lg:text-2xl max-w-lg mb-4">
      a platform where past studnt of ijebu-ode grammer school,1998 set ,reconnect,collaborate  and contribute towards the developmentof our alma mateer and the community.

          </p>
          <Button label="EXPLORE" className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-medium px-8 rounded" onClick={() => console.log('Explore button clicked')} />
        </div>
      </div>

      {/* Filter Navigation */}
      <div className=" text-white flex justify-center space-x-4 pt-3">

      <button className="px-4 py-1 bg-[#4A2275] rounded-t-md">All</button>
        <button className="px-4 py-1 bg-[#4A2275] rounded-t-md transition-colors">2001</button>
        <button className="px-4 py-1 bg-[#4A2275] rounded-t-md transition-colors">2002</button>
        <button className="px-4 py-1 bg-[#4A2275] rounded-t-md transition-colors">2003</button>

      </div>
      <div className="bg-[#5D2D91] text-white flex justify-center space-x-4 py-3"> </div>
       

      {/* Gallery Content */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-start mb-6 mt-4">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold mb-2">Meet And Greet 2018</h3>
            <p className="text-sm text-gray-700">
              Etiam vitae tortor. Curabitur nisi. In hac habitasse platea dictumst. Praesent ac massa at ligula laoreet
              iaculis. Praesent ac massa at ligula laoreet iaculis. Sollicitudin, lorem quis bibendum auctor, nisi elit
              consequat ipsum, quis venenatis ante odio sit amet eros. Nullam quis ante. Curabitur vestibulum.
            </p>
          </div>
          <Button label="View Album" className="bg-[#5D2D91] hover:bg-[#4A2275] text-white text-sm rounded" onClick={() => console.log('View Album clicked')} />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First row */}
          <div className="relative h-[200px] md:h-[240px]">
            <Image src="/images/gallery1.png" alt="Gallery image" fill className="object-cover rounded" />
          </div>
          <div className="relative h-[200px] md:h-[240px]">
            <Image src="/images/gallery2.png" alt="Gallery image" fill className="object-cover rounded" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-30 rounded-full p-2">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          <div className="relative h-[200px] md:h-[240px]">
            <Image src="/images/gallery3.png" alt="Gallery image" fill className="object-cover rounded" />
          </div>

          {/* Second row */}
          <div className="relative h-[200px] md:h-[240px]">
            <Image src="/images/gallery4.png" alt="Gallery image" fill className="object-cover rounded" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-30 rounded-full p-2">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          <div className="relative h-[200px] md:h-[240px]">
            <Image src="/images/gallery5.png" alt="Gallery image" fill className="object-cover rounded" />
          </div>
          <div className="relative h-[200px] md:h-[240px]">
            <Image src="/images/gallery6.png" alt="Gallery image" fill className="object-cover rounded" />
          </div>
        </div>
      </div>
    </main>
  )
}
