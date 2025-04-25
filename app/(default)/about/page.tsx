"use client"
import Image from "next/image"
import  Button  from "@/components/ui/button"

export default function AboutPage() {
    const members = [
        { name: "SANDRA RILEY", position: "TEACHER" },
        { name: "MARIA MOORE", position: "TEACHER" },
        { name: "SANDRA RILEY", position: "TEACHER" },
        { name: "MARIA ARNOLD", position: "TEACHER" },
        { name: "SANDRA RILEY", position: "TEACHER" },
        { name: "MARIA MOORE", position: "TEACHER" },
        { name: "SANDRA RILEY", position: "TEACHER" },
        { name: "MARIA ARNOLD", position: "TEACHER" },
      ]
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image src="/images/school.jpg" alt="School building" fill className="object-cover brightness-75" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-lg font-bold mb-1">JOGSOBA &apos;98</h1>
          <h2 className="text-[#FFD700] text-4xl font-bold mb-3">ABOUT</h2>
          <p className="text-white lg:text-2xl text-base max-w-lg mb-4 px-4">
            A prestigious alumni group of students of IGBOBI OKE GRAMMAR SCHOOL, founded on the premise of giving back
            to the society towards the advancement of our alma mater and the community at large.
          </p>
          <Button 
            className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-medium px-8 rounded" 
            label="EXPLORE" 
            onClick={() => console.log('Explore button clicked')} 
          />
        </div>
      </div>

      {/* About Content */}
      <div className=" py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {/* Left Column - Image */}
          <div className="relative h-[300px] md:h-auto">
            <Image
              src="/images/student.jpg"
              alt="School group photo"
              fill
              className="object-cover rounded-md md:rounded-lg"
            />
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center bg-gray-100 p-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-700">The School</h3>
            <div className="text-sm text-gray-600 space-y-4">
              <p>
                Igbobi Oke Grammar School, the "Dream of life, The source of Light, and Beacon of Secondary Education"
                in the entire historical Ijebuland was founded in 20th January, 1948 by C.A.B. Oke (Anglican Priest). It
                is today the oldest secondary school in Ijebu-Ode, the second oldest in Ijebu land, the third oldest in
                the present Ogun State of Nigeria, and the second oldest among the AOHSN Group of Schools.
              </p>
              <p>
                It was around 1892, (about forty years after Christianity came to Lagos, Ibadan and Abeokuta), that the
                Ijebu people could practice and openly declare that they are Christians. A team of Christian Missionary
                then was acceptance of Western Education as an integral part of the spread of the gospel, and these both
                grew together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="min-h-screen">
      {/* Purple header */}
      <div className="w-full h-20 bg-[#5D2D91]"></div>

      {/* Content area with light gray background */}
      <div className="bg-[#f2f2f2] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold mb-1">COMMITTEE MEMBERS</h2>
            <div className="w-12 h-0.5 bg-black mx-auto"></div>
          </div>

          {/* Members grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Profile photo placeholder */}
                <div className="w-24 h-24 rounded-full bg-[#0a1026] mb-3"></div>

                {/* Member card */}
                <div className="bg-white shadow-md w-full max-w-[150px] py-3 px-4 text-center">
                  <h3 className="font-bold text-sm">{member.name}</h3>
                  <div className="w-12 h-0.5 bg-[#ff3366] mx-auto my-1"></div>
                  <p className="text-gray-500 text-xs">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    </main>
  )
}
